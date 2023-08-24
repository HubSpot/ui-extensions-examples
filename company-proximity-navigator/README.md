# Company proximity navigator sample

This example uses a fictitious IT services company. Company proximity information appears in the custom middle pane tab of a company record. It contains two CRM cards that help salespeople identify companies they might want to plan to visit along with a trip to the company they’re currently viewing.

We recommend installing this sample in a Sandbox account.

# Quick Start

## Step 1: Update your CLI and & authenticate your account

1. Update to latest CLI version by running `npm install -g @hubspot/cli@latest`
2. Run `hs init` if you haven’t already done so to create a config file for your parent account
3. Run `hs auth` to authenticate your account. Alternatively, select your pre-authenticated account with `hs accounts use`

## Step 2: Provide access token to access Mapbox API

1. Obtain Mapbox [access token](https://docs.mapbox.com/help/getting-started/access-tokens/)
2. Add token as a secret:

```
hs secrets add MAPBOX_ACCESS_TOKEN
```

## Step 3: Provide sample data to demonstrate functionality of the sample project

[Import](https://knowledge.hubspot.com/crm-setup/import-objects) sample [companies](./companies.csv) into your HubSpot account:

1. Inside your HubSpot account, click the settings gear icon.
2. In the left sidebar menu under Data Management, choose Import & Export.
3. Click the Go to import button, then on the following screen click Start an import.
4. Choose Import file from computer, then one file, then one object, then select the companies object.
5. Select the `companies.csv` file in this project and click Next and then Finish to finish the import.

## Step 4: Install dependencies

In the CLI, run `npm install` to install the dependencies for this project.

### Step 4: Upload project

Run `hs project upload`. Alternatively, if you’d like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

## Step 6: View the cards

In the main menu select Contacts > Companies to view company records. Click on any of the sample companies and navigate to the custom tab to access the sample.
