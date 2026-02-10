# Overlay example ![](https://badgen.net/badge/JS/JavaScript/blue)

This sample is designed to show overlays by using `<Panel>` and `<Modal>` components, examples of their use cases and design guidelines

![overlay 2](https://github.com/HubSpot/ui-extensions-examples/assets/110251572/9dc908f0-f13c-4725-b97c-b133524c683d)

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
cd ui-extensions-examples/overlay-example
```

### Step 2: Install dependencies

Run `hs project install-deps` to install the dependencies for this project.

### Step 3: Upload project

Run `hs project upload`. If you’d like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

### Step 4: View the card

In the main menu select `CRM` > `Contacts` to view contacts records. Click on any of the contact objects and navigate to the custom tab to access the sample card.

If you haven't customized the tabs before follow step #4 from [this guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart) to add the sample card.
