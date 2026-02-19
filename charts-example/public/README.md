## Run charts example with a public app

### 1. Prerequisites

Make sure you've followed instructions [here](https://github.com/HubSpot/ui-extensions-examples/blob/main/charts-example/README.md#step-1-update-your-cli-and--authenticate-your-developer-account).

### 2. Clone the repository

Clone this repository and navigate to the project directory:

```shell
git clone https://github.com/HubSpot/ui-extensions-examples.git
cd ui-extensions-examples/charts-example/public
```

### 3. Install dependencies

Run `hs project install-deps` to install the dependencies for this project.

### 4: Upload project to your developer account

Run `hs project upload`. Open your developer account and see the app installed in the 'App' section. Under the Basic info -> Auth you will find the App ID, Client ID and scopes

### 5: Install the app to your test account

To get started, you can use our sample OAuth Nodejs [example](https://github.com/hubspot/oauth-quickstart-nodejs).
Configure the quickstart app's `.env` with the info from the app's settings pagen (App ID, Client ID and scopes), then run it locally. It is already set up to work with http://localhost:3000/oauth-callback as the redirect URL. Install the app into your developer test account
