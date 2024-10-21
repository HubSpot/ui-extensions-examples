# Charts example

This sample is designed to show charts by using <LineChart> and <BarChart> components.

![image](https://github.com/user-attachments/assets/c3ff5cad-e59b-45a8-aff6-58908529c0c3)

### Description:

This card contains:

1. Line chart that shows the customer's purchase history over time, showing the total revenue generated from their purchases of outdoor gear and apparel products. In this example, we show how to format the data.

2. Stacked bar chart shows the distribution of sales revenue by product category for the customer over a specific time period. This can help the sales rep understand which product categories are performing well and where there may be opportunities to upsell or cross-sell additional products. This is an example with pre-formatted data.

## Quick Start

### Step 1: Update your CLI and & authenticate your developer account

1. Update to latest CLI version by running `npm install -g @hubspot/cli@latest`.
2. Run `hs init` if you haven’t already done so to create a config file for your parent account.
3. Run `hs auth` to authenticate your developer account. Alternatively, select your pre-authenticated account with `hs accounts use`.

### Step 2: Create Charts example project

In the folder where you want this sample to be cloned, create a new project by running `hs project create --templateSource="HubSpot/ui-extensions-examples" --location="charts-example" --name="charts-example" --template="charts-example"`

### Step 3: Install dependencies

Now in the CLI, enter into this newly created folder by `cd charts-example`. Run `npm install` to install the dependencies for this project.


### Step 4: Upload project

Run `hs project upload`. Alternatively, if you’d like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

### Step 5: View the cards

In the main menu, select `Contacts` > `Contacts` to view contact records. Click on any of the contact objects and navigate to the custom tab to access the sample card. If you don’t have any contacts in the account you’re using to view this sample, create a contact by the following steps:

1. In the main menu, select `Contacts` > `Contacts`.
2. Click `Create contact` in the top right hand corner and fill in all required fields. Click `create` once you’ve finished filling in your contact details.
3. Your new contact should appear in the `Contacts table`. Select it and navigate to the `Custom` tab in the middle pane to access the sample card.

If you haven't customized the tabs before follow step #4 from [this guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart).

## Key Components
