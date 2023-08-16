This repository contains helpful examples to get started with using React as a front-end UI extensions. This is available only as private beta under [developer beta terms & agreements](https://legal.hubspot.com/developerbetaterms).

Over the last year, we have received invaluable feedback from our beta participants and active community developers about custom cards available through the CRM development beta. We heard loud and clear that you need:

- More flexible & interactive front-end to handle complex use cases
- Developer experience specifically optimized for front-end development.

The feedback and use cases you've shared with us have helped define the exciting next chapter for UI extensibility at HubSpot, and for that, we are deeply grateful. We're thrilled to invite you to participate in a private beta for our new React-based UI extensions. UI extensions will now enable you to build front-end experiences using frameworks like React while continuing to use HubSpot’s serverless functions as needed. This enables you to leverage the active ecosystem and open-source tooling that React is known for.

If you are intersted in accessing this beta, please fill out [this form](https://forms.gle/Ag8R7NwELoVz15vi8) and we will be in touch.

---

# Old README

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
