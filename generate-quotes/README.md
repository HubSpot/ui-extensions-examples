# Generate quotes sample ![](https://badgen.net/badge/JS/JavaScript/blue)

![Generate Quotes sample](https://github.com/HubSpot/ui-extensions-examples/assets/110251572/345244de-ed4c-4fee-8dd1-5667600ad94d)

This example uses a fictitious Shuttle Bus Rental Service. The sample allows a salesperson to quickly determine which of the company's services match the customer's requirements. This example uses HubSpot quotes, but it adds a custom UI inside the CRM so that users can quickly and intuitively create specialized quotes with a lower margin for error than using the full featured quote tool.

We recommend installing this sample in a Sandbox account.

## Prerequisites

- You must have an active HubSpot account.
- You must have the latest [HubSpot CLI](https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/install-the-cli) installed.
- Run `hs init` if you haven't already done so to create a config file for your parent account.
- Run `hs auth` to authenticate your account. Alternatively, select your pre-authenticated account with `hs accounts use`.

## Quick Start

### Step 1: Clone the repository

Clone this repository and navigate to the project directory:

```shell
git clone https://github.com/HubSpot/ui-extensions-examples.git
cd ui-extensions-examples/generate-quotes
```

### Step 2: Import sample products

[Import](https://knowledge.hubspot.com/crm-setup/import-objects) sample [products](./products.csv) into your HubSpot account:

1. Inside your HubSpot account, click the settings gear icon.
1. In the left sidebar menu under `Data Management`, choose `Import & Export`.
1. Click the `Go to import` button, then on the following screen click `Start an import`.
1. Choose `Import file from computer`, then `one file`, then `one object`, then select the `Products`.
1. Select the [products.csv](./products.csv) file in this project and click `Next` and then `Finish` to finish the import.

### Step 3: Install dependencies

Run `hs project install-deps` to install the dependencies for this project.

### Step 4: Upload project

Run `hs project upload`. Alternatively, if you'd like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

### Step 5: Create a deal and view the card

HubSpot quotes are always associated with a deal record to track the progress of the quote. If you don’t have any deals in the account you’re using to view this sample, create a deal now.

1. In the main menu, select `Sales` > `Deals`.
1. Click `Create deal` in the top right hand corner and fill in all required fields. Click `create` once you’ve finished filling in your deal details.
1. Your new deal should appear in the `Deals table`. Select it and navigate to the `custom tab` in the middle pane to access the Shuttle bus quotes.
