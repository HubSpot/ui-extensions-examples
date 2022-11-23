# real-estate-listing

Renders a custom card on the CRM Record page, displaying nearby attractions \
and transit statistics for a Real Estate Listing custom object. This use case \
was featured in the HubSpot.Extend() conference:

> **Mid-sized real estate company** employing agents to help buyers find the right home.  \
> Our goal is to keep agents productive, _preventing them from hopping between systems_...  \
> and help them _quickly find information_ that can help buyers make decisions faster.

**Checkout the [HubSpot.Extend() breakout session](https://youtu.be/LJRzMGKbjuI) for a full demo of this app and more.**

![real-estate-listing-example](https://user-images.githubusercontent.com/30241/200099293-0d109d70-2b8a-4af0-8e9c-a06bf07318af.png)


## How to use

This project can be used in a HubSpot account by:

1. Use the schema file and sample data in `./resources` folder to create a custom object for Listing.
1. Generating API tokens for the following services:
    - [Google Maps' "Nearby Places" API](https://developers.google.com/maps/documentation/places/web-service/search-nearby)
    - ["Walkscore" API](https://www.walkscore.com/professional/walk-score-apis.php)
1. Creating the Listing custom object schema in your portal:
    - [Create the Listing Custom Object Schema](https://developers.hubspot.com/docs/api/crm/crm-custom-objects) in your portal using the schema included in [`./resources/listing-schema.json`](./resources/listing-schema.json)
    - Optionally, import the included [`./resources/sample-data.csv`](./resources/sample-data.csv) to generate test Listings
1. Cloning this repository
1. `cd real-estate-listing`
1. `hs sandbox create --name=listings     # optional`
1. `hs secrets add GOOGLE_MAPS_API_KEY    # enter API key`
1. `hs secrets add WALKSCORE              # enter API key`
1. `hs project upload`


## Prerequisites

- You must have the Listings custom object created with all necessary sample data added to it. 
- You must have an active HubSpot account.
- You must be using the latest [HubSpot CLI](https://www.npmjs.com/package/@hubspot/cli).
- You must have access to developer projects (developer projects are currently [in public beta under "CRM Development Tools"](https://app.hubspot.com/l/whats-new/betas)).
