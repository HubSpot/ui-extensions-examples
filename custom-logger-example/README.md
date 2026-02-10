# Custom Logger Example ![](https://badgen.net/badge/JS/JavaScript/blue)

This is an app that demonstrates the main features of the custom logger.

1. Multiple logging levels
   - `info`
   - `debug`
   - `warn`
   - `error`
1. Built-in logging for serverless requests
1. Local development niceties like logging to the console
1. Using Trace IDs to investigate extension failures

For documentation about the custom logger itself, please visit https://developers.hubspot.com/docs/platform/ui-extensions-sdk#send-custom-log-messages-for-debugging.

## Prerequisites

- You must have an active HubSpot account.
- You must have the latest [HubSpot CLI](https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/install-the-cli) installed.

## Quick Start

### Step 1: Clone the repository

Clone this repository and navigate to the project directory:

```shell
git clone https://github.com/HubSpot/ui-extensions-examples.git
cd ui-extensions-examples/custom-logger-example
```

### Step 2: Install dependencies

Run `hs project install-deps` to install the dependencies for this project.

### Step 3: Upload project

Run `hs project upload` to deploy the project.

## Testing when deployed

When [deployed](https://developers.hubspot.com/docs/platform/project-cli-commands#upload-to-hubspot), the custom logger will persist the logs in the HubSpot logging system. Don't forget to add the extension card to the middle pane.

![logger demo deployed](./images/logger-example-deployed.gif)

Logs can be retrieved from the app dashboard.

`https://app.hubspot.com/private-apps/<portal-id>/<app-id>`

## Testing in local development

When [running the project locally](https://developers.hubspot.com/docs/platform/create-private-apps-with-projects), click the buttons and watch the events log to the console.

![logger demo local dev](./images/logger-example-local.gif)
