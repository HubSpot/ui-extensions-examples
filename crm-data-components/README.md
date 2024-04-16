# Use CRM data components sample ![](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

This React Project demonstrates the usage of HubSpot CRM Components through UIE. The project includes 2 extensions:

1. Association Table displaying important deals associated with the current user (demonstrates pre-filters, quick filters, and property projections)
2. Stage tracker with high level properties, and property list filtered by pipeline

These extensions demonstrate a number of interactions including:

- Using HubSpot's CRM Data Components
- Using new styling/layout components available through UIE
- Making API calls to the HubSpot API using serverless functions
- Fetching properties for the current object

![Example Image of the Association Table](https://github.com/HubSpot/ui-extensions-examples/assets/110251572/3230755a-4ea2-44eb-b8b6-4858dbb01a87)
![Example Image of Stage Tracker](https://github.com/HubSpot/ui-extensions-examples/assets/110251572/fd35ab4d-a2ac-4165-b5de-02e8a2481a9a)

## Quick Start

### Step 1: Update your CLI and & authenticate your account
1. Update to latest CLI version by running `npm install -g @hubspot/cli@latest`.
2. Run `hs init` if you haven’t already done so to create a config file for your parent account.
3. Run `hs auth` to authenticate your account. Alternatively, select your pre-authenticated account with `hs accounts use`.

### Step 2: Create the project

In the folder where you want this sample to be cloned, create a new project by running `hs project create --templateSource="HubSpot/ui-extensions-examples" --location="crm-data-components" --name="crm-data-components" --template="crm-data-components"`

### Step 3: Install dependencies
Now in the CLI, `cd` into your project directory such as `cd crm-data-components`. Run `npm install` to install the dependencies for this project.

### Step 4: Upload project
Run `hs project upload`. If you’d like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

### Step 5: View the cards

For `CRM data: Stage Tracker example card`.
In the main menu select `Sales` > `Deals` to view deal records. Click on any of the deal objects and navigate to the custom tab to access the two sample cards. If you don’t have any deals in the account you’re using to view this sample, create a deal by the following steps:

1. In the main menu, select `Sales` > `Deals`.
2. Click `Create deal` in the top right hand corner and fill in all required fields. Click `create` once you’ve finished filling in your deal details.
3. Your new deal should appear in the `Deals table`. Select it and navigate to the `custom tab` in the middle pane to access the sample cards.

For `CRM data: Association Table example card`.In the main menu select `Contacts` > `Contacts` to view contact records. Click on any of the contact objects and navigate to the custom tab to access the sample card. If you don’t have any contacts in the account you’re using to view this sample, create a contact by the following steps:

1. In the main menu, select `Contacts` > `Contacts`.
2. Click `Create contact` in the top right hand corner and fill in all required fields. Click `create` once you’ve finished filling in your contact details.
3. Your new contact should appear in the `Contacts table`. Select it and navigate to the `Custom` tab in the middle pane to access the sample card.

If you haven't customized the tabs before follow step #4 from [this guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart) to add the two sample cards.
