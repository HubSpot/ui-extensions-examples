## Running charts example against public app

### 1. Install dependencies

In the CLI, enter into this newly created folder by `cd charts-example/public`. Run `npm install` to install the dependencies for this project.

### 2: Upload project to your developer account

Run `hs project upload`. Open your developer account and see the app installed in the 'App' section. Under the Basic info -> Auth you will find the App ID, Client ID and scopes

### 3: Install the app to your test account

To get started, you can use our sample OAuth Nodejs [example](https://github.com/hubspot/oauth-quickstart-nodejs).
Configure the quickstart app's `.env` with the info from the app's settings pagen (App ID, Client ID and scopes), then run it locally. It is already set up to work with http://localhost:3000/oauth-callback as the redirect URL. Install the app into your developer test account
