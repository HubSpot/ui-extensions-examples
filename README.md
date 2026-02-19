This repository contains helpful examples to get started with using React as a front-end UI extensions. This is available as public beta under [developer beta terms & agreements](https://legal.hubspot.com/developerbetaterms).

Over the last year, we have received invaluable feedback from our beta participants and active community developers about custom cards available through the CRM development beta. We heard loud and clear that you need:

- More flexible & interactive front-end to handle complex use cases
- Developer experience specifically optimized for front-end development.

The feedback and use cases you've shared with us have helped define the exciting next chapter for UI extensibility at HubSpot, and for that, we are deeply grateful. We're thrilled to invite you to participate in a public beta for our new React-based UI extensions. UI extensions will now enable you to build front-end experiences using frameworks like React while continuing to use HubSpot’s serverless functions as needed. This enables you to leverage the active ecosystem and open-source tooling that React is known for.

---

# README

This is a collection of HubSpot developer projects with custom CRM cards. Each folder holds a working developer project, including a README with a description on what that example CRM card demonstrates and instructions on how to get the card working in your own HubSpot account.

Access to these UI Extensions is part of [CRM Development public beta](https://developers.hubspot.com/blog/crm-development-tools-for-hubspot-developers-beta), and more examples will be added over time.

## Prerequisites

- You must have an active HubSpot account with Sales or Service Hub Enterprise access.
- Your HubSpot account must be enrolled in CRM development tools public beta. You can enroll by visiting [this product update](https://app.hubspot.com/l/product-updates/in-beta?query=crm&update=13899236).
- You must be using the latest [HubSpot CLI](https://www.npmjs.com/package/@hubspot/cli).

## Quick Start

### Step 1: Update your CLI and & authenticate your account

1. Update to latest CLI version by running `npm install -g @hubspot/cli@latest`.
2. Run `hs init` to create a config file for your parent account.
3. Run `hs auth` to authenticate your account. Alternatively, select your pre-authenticated account with `hs accounts use`.

### Step 2: Clone this repository

Or simply download the source to a location on your machine.

### Step 3: Enter the project

Now in the CLI, `cd` into your project directory such as `cd ui-extensions-examples/<project_dir>`. Run `hs project install-deps` to install the dependencies for this project.

### Step 4: Configure and upload the project

Follow project-specific instructions in the project folder README file. You might need to set up additional environmental variables and provide test data.

Run `hs project upload`. If you’d like to build on this project, run `hs project dev` to kickoff the dev process and see changes reflected locally as you build.

## Lockfiles

It's best practice to generate package lockfiles before uploading projects. This will help prevent running out of file descriptors during the build, and streamline subsequent builds. To generate a lockfile for a project, install the project dependencies locally using `hs project install-deps`.

## Get started with developer projects

UI extensions are created using developer projects that are part of CRM development beta. Read [Quick Start guide](https://developers.hubspot.com/docs/platform/projects-quick-start-guide) for developer projects for instructions to get started.
