# Overlay example ![](https://badgen.net/badge/JS/JavaScript/blue)

This sample is designed to show overlays by using `<Panel>` and `<Modal>` components, examples of their use cases and design guidelines

![overlay 2](https://github.com/HubSpot/ui-extensions-examples/assets/110251572/9dc908f0-f13c-4725-b97c-b133524c683d)


## Quick Start

### Step 1: Update your CLI and & authenticate your account

1. Update to latest CLI version by running `npm install -g @hubspot/cli@latest`.
1. Run `hs init` if you haven’t already done so to create a config file for your parent account.
1. Run `hs auth` to authenticate your account. Alternatively, select your pre-authenticated account with `hs accounts use`.

### Step 2: Create Overlay example project

In the folder where you want this sample to be cloned, create a new project by running `hs project create --templateSource="HubSpot/ui-extensions-examples" --location="overlay-example" --name="overlay-example" --template="overlay-example"`

### Step 3: Install dependencies

Now in the CLI, enter into this newly created folder by `cd overlay-example`. Run `npm install` to install the dependencies for this project.

### Step 4: Upload project

Run `hs project upload`. If you’d like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

### Step 5: View the card

In the main menu select `CRM` > `Contacts` to view contacts records. Click on any of the contact objects and navigate to the custom tab to access the sample card.

If you haven't customized the tabs before follow step #4 from [this guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart) to add the sample card.
