# Getting Started Typescript Example

This project is an example how to use Typescript with HubSpot Projects. This example is based off of [The Getting Started Project Template](https://github.com/HubSpot/getting-started-project-template).
This setup should be easily adaptable to any CI/CD tooling of your choice.

A few steps are needed to make this happen.
- Use GitHub actions to transpile the TS files to JS. Also copy the contents of the project to the dist directory including the newly compiled JS files.
- The result, in `dist`, should now resemble the contents of a normal HubSpot project (refer to the [getting started template](https://github.com/HubSpot/getting-started-project-template))
- Once the build step is complete, use the HubSpot CLI to upload the project to your portal.


To use the HubSpot CLI to upload this example via GitHub actions ensure you have the following environment variables set in your repositories secrets.

````
HUBSPOT_PERSONAL_ACCESS_KEY

HUBSPOT_PORTAL_ID
````

*Note: This does not work with the GitHub Integration with Developer Projects*
