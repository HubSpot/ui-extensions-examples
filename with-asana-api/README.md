# With Asana API

This sample app contains two custom cards on the contact record to
1. Create a task for a given Asana team
2. View tasks for a given Asana team & HubSpot contact

![asana](https://user-images.githubusercontent.com/20711270/213601795-4935f4ce-439f-4707-a28e-f39fd1c63597.gif)

## Prerequisites
1. Get your Asana [personal access token](https://developers.asana.com/docs/personal-access-token).
2. Create a global custom field (available for the whole workspace) in your Asana project to capture HubSpot contact IDs. This field is used to search tasks for the contact. 

## How to use
1. Clone this repo
2. Use `hs secrets add` to add following secrets to your account
   1. ASANA_PAT: Your personal access token for Asana
   2. ASANA_TEAM_GID: Your Asana team ID
   3. ASANA_WS_GID: Your Asana workspace ID
   4. ASANA_CUSTOM_FIELD: ID of the custom field that you create in your projects
3. `cd with-asana-api`
4. `hs project upload`