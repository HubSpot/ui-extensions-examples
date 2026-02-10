# Design Patterns ![](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

This app includes a number of different **Design Patterns** that showcase how to compose UI components the HubSpot way. These are our recommended best code and design practices to create a smooth, and easy to use end customer experience. Each extension file contains a different pattern that you can copy and paste right into your own project. Feel free to use these as boilerplates.

[Here's a link to the Figma Kit](https://developers.hubspot.com/docs/reference/ui-components/figma-design-kit) with Design Pattern assets if you prefer to begin with designs.

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
cd ui-extensions-examples/design-patterns
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

If you haven't customized the tabs before follow step #4 from [this guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart).

## Examples by Component

### Button

- [Buttons in Modal](./src/app/extensions/components/ModalExample.tsx)
- [Buttons in Panel](./src/app/extensions/components/PanelExample.tsx)

### Form

- [Form Action Patterns](./src/app/extensions/FormActionPatterns.tsx)
- [Modal Form](./src/app/extensions/FormModal.tsx)
- [Multistep Form](./src/app/extensions/FormMultistep.tsx)

### Modal

- [Buttons in Modal](./src/app/extensions/components/ModalExample.tsx)
- [Modal Form](./src/app/extensions/FormModal.tsx)

### Panel

- [Buttons in Panel](./src/app/extensions/components/PanelExample.tsx)
- [Multistep Form](./src/app/extensions/FormMultistep.tsx)

### Table

- [Table Example](./src/app/extensions/TableExampleCard.jsx)
