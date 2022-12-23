# Examples of HubSpot UI Extensions

This is a collection of HubSpot developer projects with custom CRM cards. Each folder holds a working developer project, including a README with a description on what that example CRM card demonstrates and instructions on how to get the card working in your own HubSpot account.

Access to these UI Extensions is part of [CRM Development public beta](https://developers.hubspot.com/blog/crm-development-tools-for-hubspot-developers-beta), and more examples will be added over time.

## Prerequisites

- You must have an active HubSpot account with Sales or Service Hub Enterprise access.
- Your HubSpot account must be enrolled in CRM development tools public beta. You can enrol by visiting [Product Updates > Betas](https://app.hubspot.com/l/whats-new/betas).
- You must be using the latest [HubSpot CLI](https://www.npmjs.com/package/@hubspot/cli).
  
## Get started with developer project
UI extensions are createing using developer projects that are part of CRM development beta. Read [Quick Start guide](https://developers.hubspot.com/docs/platform/projects-quick-start-guide) for developer projects for instructions to get started. 

## Tools available in this repository

ESLint and Prettier are included in the root of this repository for ease of development. You can choose whether or not to use them yourself. The usage of ESLint and Prettier in this repository can also serve as an example of how to set them up in your own directory of HubSpot developer projects if you so choose.

### ESLint

[ESLint](https://eslint.org/) is a common, open-source linting tool for JavaScript code. To check for any ESLint errors, use the following command:

```
npx eslint .
```

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter. This tool helps developers spend more time coding, and less time on adjusting code style.

Prettier can be set up to run in your editor each time you save a file. Prettier can also be run through the CLI, using the following command:

```
npx prettier --write .
```
