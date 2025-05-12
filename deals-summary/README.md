# Create a deals summary sample ![](https://badgen.net/badge/JS/JavaScript/blue)

![Deals summary example card](https://github.com/HubSpot/ui-extensions-examples/assets/110251572/2c922d90-5a69-4020-99c3-3ab23c3390c1)

This tutorial will help you get up to speed with React based UI extensions in the HubSpot CRM. You’ll install a project containing a CRM card with two components. Then you’ll follow the steps to add one more component to the card.

We recommend installing this sample in a Sandbox account.

## Update your CLI and & authenticate your account

[Full local environment documentation](https://developers.hubspot.com/docs/guides/crm/setup)

## Quick Start

### Step 1: Update your CLI and & authenticate your account

1. Update to latest CLI version by running `npm install -g @hubspot/cli@latest`.
2. Run `hs init` if you haven’t already done so to create a config file for your parent account.
3. Run `hs auth` to authenticate your account. Alternatively, select your pre-authenticated account with `hs accounts use`.

### Step 2: Create the project

In the folder where you want this sample to be cloned, create a new project by running `hs project create --templateSource="HubSpot/ui-extensions-examples" --dest="deals-summary" --name="deals-summary" --template="deals-summary"`.

### Step 3: Install dependencies

Now in the CLI, `cd` into your project directory such as `cd deals-summary`. You will need to run `npm install` in both the `/src/app/extensions` and `/src/app/app.functions` directories to install the dependencies for this project.

### Step 4: Upload project

Run `hs project upload`. If you’d like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

## Your HubSpot sandbox account

- In the main menu of your HubSpot account navigate to `Contacts` > `Contacts`. Click into the `Brian Halligan` contact.
- Select the `Custom tab` in the middle pane of this contact record
- You should see the Deals summary card with two components: Deals and Unit Price. These will both be set to 0 because there are currently no deals associated with this contact.

## Create two deal records

- In the main menu, navigate to `Sales` > `Deals`.
- Click `Create deal` in the top right hand corner.
- Give your dummy deal a name, an amount, and set the deal association to the `Brian Halligan` contact.
- Repeat the last two steps to create a second deal.
- In the main menu of your HubSpot account navigate to `Contacts` > `Contacts`. Click into the `Brian Halligan` contact. Now you should see 2 deals listed in the `Deals summary` card and the sum total of the amounts you entered for each deal. Next you’ll add an `Average Margin` component.

## Setup local dev

[Full Local dev documentation](https://developers.hubspot.com/docs/guides/crm/private-apps/quickstart#3.-start-local-development) | [Full Secrets documentation](https://developers.hubspot.com/docs/guides/crm/private-apps/serverless-functions#managing-secrets)

- Run npm install to install dependencies for this project.
- Create a file named `.env` inside the app.functions folder (inside `src/app`)
- In your HubSpot account, click on the CRM development item in the main navigation
- In the sidebar under Tools select Private apps and find the Deals summary app. Click View access token and copy this token to your clipboard.
- Add it to your `.env` file

![image](https://git.hubteam.com/storage/user/1895/files/8afc64c7-ff3c-4a0d-90bd-542de3a75f5a)

- To begin the dev process and automatically see your changes reflected in the CRM, run hs project dev.
- Return to the contact record and refresh the browser. You should now see a developing locally icon next to the card title.

## Add the Average Margin component

- Open the [get-data.js](./src/app/app.functions/get-data.js) file in your local text editor. This file is using the [HubSpot API client](https://developers.hubspot.com/docs/api/overview) to fetch deal data related to whichever contact record an end user is viewing in the CRM. This fetching is being done by the `getAssociatedDeals` function. The result of this function is stored in a deals variable. The `calculateTotalAmounts` function is using this data to calculate the total amount of deals.
- To begin the dev process and automatically see your changes reflected in the CRM, run `hs project dev`.
- Add a function called `calculateAverageAmount` below the `calculateTotalAmounts` function. It should look like this:

```javascript
function calculateAverageAmount(deals) {
  const totalCount = deals.length;

  const amounts = deals.map((deal) => parseFloat(deal.properties.amount));
  const totalDeals = amounts.reduce((sum, amount) => sum + amount, 0);

  const average = Math.ceil(totalDeals / totalCount);
  return -Math.round(-average);
}
```

- Next add a variable in the exports statement at the top of the file to store the result of this function and add this variable to the send response.

```javascript
const avgAmount = calculateAverageAmount(deals);
sendResponse({ deals, totalAmount, avgAmount });
```

- This is everything required for fetching the data and making it available to the front end. Open the [DealsSummary.jsx](./src/app/extensions/DealsSummary.jsx) file to add this data to the CRM card.
- First, add a state variable to define the initial state of the average amount

```javascript
const [avgAmount, setAvgAmount] = useState(0);
```

- Next, update the state within the `useEffect` function

```javascript
setAvgAmount(serverlessResponse.response.avgAmount);
```

- Finally, add a new `StatisticsItem` component to display the average amount in the CRM card

```jsx
<StatisticsItem label="Avg margin" number={avgAmount}>
  <Text>Low End</Text>
</StatisticsItem>
```

- To quit the dev process and upload your finished work, press `q` in the CLI. This will stop the local dev server.
- Run `hs project upload` to upload the current state of your local project to your HubSpot account.
