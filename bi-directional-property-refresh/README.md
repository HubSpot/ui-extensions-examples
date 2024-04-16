# Bi-directional CRM property refresh example ![](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

This example demonstrates how `fetchCrmObjectProperties`, `onCrmPropertiesUpdate`, and `refreshObjectProperties` together enable bi-directional refresh for CRM properties. This avoids manual page reloads by end users in both scenarios.

1. When a user updates CRM properties either in CRM data component or anywhere on the parent record page, custom card can listen to changes using `onCrmPropertiesUpdate` and fetch latest property values using `fetchCrmObjectProperties`
2. When a user updates a CRM properties on a custom card, the developer enables that update using HubSpot's public APIs, however, they can also enforce refresh using `refreshObjectProperties` to keep data on the custom card fresh.
   
![property-refresh](https://github.com/HubSpot/ui-extensions-examples/assets/20711270/0a13b2bc-c6d7-4fd6-a43c-225e9d94aef4)


## Quick Start

### Step 1: Update your CLI and & authenticate your account

1. Update to latest CLI version by running `npm install -g @hubspot/cli@latest`.
2. Use the [quick start guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart) to learn how to setup your account and local environment to work with HubSpot developer projects. 

### Step 2: Create the project

Enter into the folder where you want this sample project. In place of `hs project create`, you can optionally use this handy command to directly create a project based on this sample project using `hs project create --templateSource="HubSpot/ui-extensions-examples" --location="bi-directional-property-refresh" --name="property-refresh" --template="bi-directional-property-refresh"`.

### Step 3: Install dependencies

Now in the CLI, enter into this newly created folder by `cd bi-directional-property-refresh`. Run `npm install` to install the dependencies for this project.

### Step 4: Upload project

Run `hs project upload`. If you’d like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

### Step 5: View the cards

In the main menu select `Contacts` > `Contacts` to view contact records. Click on any of the contact objects and navigate to the custom tab to access the sample card which is called `Refresh properties between custom card and CRM page`. If you haven't customized the tabs before follow step #4 from [this guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart).

### Step 6: Experiment with the cards

On the Contact record, add the card and change the `firstname` or `lastname` anywhere on the page and see that they get updated on the custom card. Change lifecycle stage on the custom card, and see that it gets refreshed in other places on the parent page.
