# View nearby companies: Mapbox API sample ![](https://badgen.net/badge/JS/JavaScript/blue)

![Search Nearby companies card](https://github.com/HubSpot/ui-extensions-examples/assets/110251572/9b1f79a1-7378-48ae-a973-3574f9174bea)
![Companies nearby card](https://github.com/HubSpot/ui-extensions-examples/assets/110251572/d9e1ea3f-1cd1-4503-8a75-03a484fb730a)

This example uses a fictitious IT services company. Company proximity information appears in the custom middle pane tab of a company record. It contains two CRM cards that help salespeople identify companies they might want to plan to visit along with a trip to the company they're currently viewing.

We recommend installing this sample in a Sandbox account.

## Prerequisites

- You must have an active HubSpot account.
- You must have the latest [HubSpot CLI](https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/install-the-cli) installed.
- Run `hs init` if you haven't already done so to create a config file for your parent account.
- Run `hs auth` to authenticate your account. Alternatively, select your pre-authenticated account with `hs accounts use`.

# Quick Start

## Step 1: Clone the repository

Clone this repository and navigate to the project directory:

```shell
git clone https://github.com/HubSpot/ui-extensions-examples.git
cd ui-extensions-examples/mapbox-api
```

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

Run `hs project install-deps` to install the dependencies for this project.

## Step 5: Upload project

Run `hs project upload`. Alternatively, if you'd like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

## Step 6: View the cards

In the main menu select Contacts > Companies to view company records. Click on any of the sample companies and navigate to the custom tab to access the sample.
If you haven't customized the tabs before follow step #4 from [this guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart).
