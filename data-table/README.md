# Paginated Data Table with Loading State Example ![](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

This React Project demonstrates how to implement a paginated table that loads data retrieved from an API and displays it.

![full-table](https://github.com/user-attachments/assets/5eca2a94-6473-4299-8370-0b2066f5d08f)
![loading-state](https://github.com/user-attachments/assets/0aa8d9f2-11b7-493c-afd6-38579ad8a1d5)

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
cd ui-extensions-examples/data-table
```

### Step 2: Install dependencies

Run `hs project install-deps` to install the dependencies for this project.

### Step 3: Upload project

Run `hs project upload`. If you’d like to build directly from this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

### Step 4: View the cards

In the main menu select `Contacts` > `Contacts` to view contact records. Click on any of the contact objects and navigate to the custom tab to access the sample card. If you don’t have any contacts in the account you’re using to view this sample, create a contact by the following steps:

1. In the main menu, select `Contacts` > `Contacts`.
2. Click `Create contact` in the top right hand corner and fill in all required fields. Click `create` once you’ve finished filling in your contact details.
3. Your new contact should appear in the `Contacts table`. Select it and navigate to the `Custom` tab in the middle pane to access the sample card.

If you haven't customized the tabs before follow step #4 from [this guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart) to get the card added to your screen.
