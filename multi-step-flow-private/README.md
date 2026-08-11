# Build a multi-step flow sample ![](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

The Build a multi-step flow sample allows a HubSpot user to send a meal from a local restaurant to one of their contacts.

![ui-extension-sample-multi-step-flow-with-panel](https://github.com/HubSpot/ui-extensions-examples/assets/110251572/1b5b00dc-7c21-4b76-931e-0fd2bed18fd5)

This sample demonstrates a number of interactions that are enabled by React extensions.

- realtime form validation
- a form in a Panel
- table pagination and search
- async fetching with HubSpot serverless functions
- loading, error, and empty states
- getting current contact properties
- getting current user properties
- triggering alerts in the CRM outside extension boundaries

## Quick Start

### Step 1: Update your CLI and & authenticate your developer account

1. Update to latest CLI version by running `npm install -g @hubspot/cli@latest`.
1. Run `hs init` if you haven’t already done so to create a config file for your parent account.
1. Run `hs auth` to authenticate your developer account. Alternatively, select your pre-authenticated account with `hs accounts use`.

### Step 2: Install dependencies

Run `hs project install-deps` from this project directory.

### Step 3: Upload the project

Run `hs project upload`. To develop locally, run `hs project dev` instead.

### Step 4: View the cards in the dev test account

In the main menu of your dev test account, select `Contacts` > `Contacts` to view contact records. Click on any of the contact objects and navigate to the custom tab to access the sample card. If you don’t have any contacts in the account you’re using to view this sample, create a contact by the following steps:

1. In the main menu, select `Contacts` > `Contacts`.
2. Click `Create contact` in the top right hand corner and fill in all required fields. Click `create` once you’ve finished filling in your contact details.
3. Your new contact should appear in the `Contacts table`. Select it and navigate to the `Custom` tab in the middle pane to access the sample card.

If you haven't customized the tabs before follow step #4 from [this guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart).

## Key Components

- [OrderMealCard.tsx](src/app/cards/components/OrderMealCard.tsx) manages the extension state and submits the order.
- [RestaurantsSearch.tsx](src/app/cards/components/RestaurantsSearch.tsx) provides paginated restaurant search.
- [Menu.tsx](src/app/cards/components/Menu.tsx) displays the selected restaurant menu.
- [Cart.tsx](src/app/cards/components/Cart.tsx) displays the order or an empty state.
- [Checkout.tsx](src/app/cards/components/Checkout.tsx) calculates the order total and collects the contact message.
