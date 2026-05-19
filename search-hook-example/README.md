# CRM Search Hook Demo ![](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

This example demonstrates how to use the `useCrmSearch` hook from `@hubspot/ui-extensions/experimental` to search CRM records directly from an app page. It covers the full range of the hook's capabilities:

- Selecting any standard or custom object type
- Choosing which properties to fetch and display
- Full-text search with debounced input
- Building complex filter groups with multiple conditions
- Sorting results by any fetched property
- Paginating through large result sets
- Formatting property values (dates, currencies, etc.)

A "Hook Usage" panel at the bottom of the page renders the exact `useCrmSearch` call matching your current selections, so you can copy it directly into your own app.

TODO: Add screenshot here

## Prerequisites

- You must have an active HubSpot account.
- You must have the latest [HubSpot CLI](https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/install-the-cli) installed.
- Use the [quick start guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart) to learn how to set up your account and local environment to work with HubSpot developer projects.

## Quick Start

### Step 1: Clone the repository

Clone this repository and navigate to the project directory:

```shell
git clone https://github.com/HubSpot/ui-extensions-examples.git
cd ui-extensions-examples/crm-search-hook-demo
```

### Step 2: Install dependencies

Run `hs project install-deps` to install the dependencies for this project.

### Step 3: Upload the project

Run `hs project upload`. If you'd like to build on this project, run `hs project dev` to start the dev server and see your changes reflected in real time.

### Step 4: Open the app page

Navigate to your app page, where the search explorer will render.

### Step 5: Experiment with the hook

Use the controls on the left to change the object type, select properties, enter a search query, or add filter conditions. The results table on the right updates live, and the Hook Usage panel at the bottom always shows the exact `useCrmSearch` call for your current configuration.
