# With Google Maps API

This example uses Google Maps Nearby Places API to render a custom card on the CRM custom object Record page, displaying nearby attractions for a Real Estate Listing custom object. This use case was featured in the HubSpot.Extend() conference.

![gmaps](https://user-images.githubusercontent.com/20711270/208017760-339b9344-e3d0-4cac-947a-f08d263ae822.gif)

> **Mid-sized real estate company** employing agents to help buyers find the right home. \
> Our goal is to keep agents productive, _preventing them from hopping between systems_... \
> and help them _quickly find information_ that can help buyers make decisions faster.

Checkout the [HubSpot.Extend() breakout session](https://youtu.be/LJRzMGKbjuI) for a full demo of this app and more.

## How to use

This project can be used in a HubSpot account by:

1. Use the schema file and sample data in `./resources` folder to create a custom object for Listing.
1. Generating API tokens for [Google Maps' "Nearby Places" API](https://developers.google.com/maps/documentation/places/web-service/search-nearby).
1. Creating the Listing custom object schema in your portal:
   - [Create the Listing Custom Object Schema](https://developers.hubspot.com/docs/api/crm/crm-custom-objects) in your portal using the schema included in [`./resources/listing-schema.json`](./resources/listing-schema.json)
   - Optionally, import the included [`./resources/sample-data.csv`](./resources/sample-data.csv) to generate test Listings
2. Clone this repository.
3. `cd with-google-maps`
4. `hs sandbox create --name=listings # optional`
5. `hs secrets add GOOGLE_MAPS_API_KEY # enter API key`
6. `hs project upload`

## Prerequisites

- You must have the Listings custom object created with all necessary sample data added to it.
- You must have an API key for [Nearby Places API](https://developers.google.com/maps/documentation/places/web-service/search-nearby).
