# Bi-directional CRM property refresh example

This example demonstrates how `fetchCrmObjectProperties`, `onCrmPropertiesUpdate`, and `refreshObjectProperties` together enable bi-directional refresh for CRM properties. This avoids manual page reloads by end users in both scenarios.

1. When a user updates CRM properties either in CRM data component or anywhere on the parent record page, custom card can listen to changes using `onCrmPropertiesUpdate` and fetch latest property values using `fetchCrmObjectProperties`
2. When a user updates a CRM properties on a custom card, the developer enables that update using HubSpot's public APIs, however, they can also enforce refresh using `refreshObjectProperties` to keep data on the custom card fresh.
   
![property-refresh](https://github.com/HubSpot/ui-extensions-examples/assets/20711270/0a13b2bc-c6d7-4fd6-a43c-225e9d94aef4)


## Quick Start

1. Use the [quick start guide](https://developers.hubspot.com/docs/platform/ui-extensions-quickstart) to learn how to setup your account and local environment to work with HubSpot developer projects. 
2. In place of `hs project create`, you can optionally use this handy command to directly create project based on this example app: `hs project create --templateSource="HubSpot/ui-extensions-examples" --location="bi-directional-property-refresh" --name="property-refresh" --template="bi-directional-property-refresh"`
3. Change `firstname` or `lastname` anywhere on the page and see that they get updated on the custom card.
4. Change lifecycle stage on the custom card, and see that it gets refreshed in other places on the parent page.
