# With Walkscore API

This example uses Google Maps Nearby Places API to render a custom card on the CRM custom object Record page, displaying transit statistics for a Real Estate Listing custom object. This use case was featured in the HubSpot.Extend() conference

> **Mid-sized real estate company** employing agents to help buyers find the right home. \
> Our goal is to keep agents productive, _preventing them from hopping between systems_... \
> and help them _quickly find information_ that can help buyers make decisions faster.

<img width="704" alt="image" src="https://user-images.githubusercontent.com/20711270/208018173-498d9b5d-0d41-4996-ad69-0e54b7114880.png">

Checkout the [HubSpot.Extend() breakout session](https://youtu.be/LJRzMGKbjuI) for a full demo of this app and more.

## How to use

This project can be used in a HubSpot account by:

1. Use the schema file and sample data in `./resources` folder to create a custom object for Listing.
1. Generating API tokens for the ["Walkscore" API](https://www.walkscore.com/professional/walk-score-apis.php).
2. Creating the Listing custom object schema in your portal:
   - [Create the Listing Custom Object Schema](https://developers.hubspot.com/docs/api/crm/crm-custom-objects) in your portal using the schema included in [`./resources/listing-schema.json`](./resources/listing-schema.json)
   - Optionally, import the included [`./resources/sample-data.csv`](./resources/sample-data.csv) to generate test Listings
3. Clone this repository.
4. `cd with-walkscore-api`
5. `hs sandbox create --name=listings # optional`
6. `hs secrets add WALKSCORE # enter API key`
7. `hs project upload`

## Prerequisites

- You must have the Listings custom object created with all necessary sample data added to it.
- You must have an API key for [Walkscore API](https://www.walkscore.com/professional/walk-score-apis.php).
