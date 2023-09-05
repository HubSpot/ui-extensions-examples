// for HubSpot API calls
const hubspot = require('@hubspot/api-client');

// Initialize HubSpot API client
const hubspotClient = new hubspot.Client({
  accessToken: process.env['PRIVATE_APP_ACCESS_TOKEN'],
});

// Entry function of this module, it creates a quote together with line items
exports.main = async (context = {}, sendResponse) => {
  const { hs_object_id } = context.propertiesToSend;
  const { distance, sku, numberOfBuses, quoteName } = context.event.payload;

  const product = await findProductBySKU(sku);

  if (product === null) {
    sendResponse({ error: 'PRODUCT_NOT_FOUND' });
  } else {
    const quote = await createQuote({
      dealId: hs_object_id,
      quoteName,
    });

    // Add line items to a newly created quote
    const lineItems = [];
    for (let i = 0; i < numberOfBuses; i++) {
      lineItems.push(
        addLineItem({
          productId: product.id,
          quoteId: quote.id,
          quantity: distance,
        })
      );
    }
    await Promise.all(lineItems);
    sendResponse({ quote });
  }
};

const SECONDS_IN_HOUR = 3600;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;
const SECONDS_IN_WEEK = DAYS_IN_WEEK * HOURS_IN_DAY * SECONDS_IN_HOUR;

// Function to create a quote using HubSpot API client
async function createQuote({ dealId, quoteName }) {
  const request = {
    properties: {
      hs_title: quoteName,
      hs_expiration_date: Date.now() + SECONDS_IN_WEEK, // Expires in one week
      hs_status: 'DRAFT',
      hs_currency: 'USD',
      hs_language: 'en',
      hs_locale: 'en-us',
    },
    associations: [
      {
        to: { id: dealId },
        types: [
          {
            associationCategory: 'HUBSPOT_DEFINED',
            associationTypeId: hubspot.AssociationTypes.quoteToDeal,
          },
        ],
      },
    ],
  };

  return await hubspotClient.crm.quotes.basicApi.create(request);
}

// Function to create a line item and associate with quote
async function addLineItem({ productId, quoteId, quantity }) {
  const request = {
    properties: {
      hs_product_id: productId,
      quantity,
    },
    associations: [
      {
        to: { id: quoteId },
        types: [
          {
            associationCategory: 'HUBSPOT_DEFINED',
            associationTypeId: hubspot.AssociationTypes.lineItemToQuote,
          },
        ],
      },
    ],
  };

  await hubspotClient.crm.lineItems.basicApi.create(request);
}

// Function to find a product by SKU using HubSpot API client
async function findProductBySKU(sku) {
  try {
    const product = await hubspotClient.crm.products.basicApi.getById(
      sku,
      undefined,
      undefined,
      undefined,
      undefined,
      'hs_sku'
    );
    return product;
  } catch (error) {
    if (error.code != 404) {
      console.error(error.message);
    }
    return null;
  }
}
