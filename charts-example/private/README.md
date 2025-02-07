## Run charts example with a private app

### 1. Prerequisites

Make sure you've followed instructions [here](https://github.com/HubSpot/ui-extensions-examples/blob/main/charts-example/README.md#step-1-update-your-cli-and--authenticate-your-developer-account).

### 2. Create Charts example project

In the folder where you want this sample to be cloned, create a new project by running hs project create --templateSource="HubSpot/ui-extensions-examples" --dest="charts-example-private" --name="charts-example-private" --template="charts-example-private"

### 3. Install dependencies

In the CLI, enter into this newly created folder by `cd charts-example-private`. Run `npm install` to install the dependencies for this project.

### 4. Upload project

Run `hs project upload`. Alternatively, if you’d like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.
