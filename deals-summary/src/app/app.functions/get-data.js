// for HubSpot API calls
const hubspot = require('@hubspot/api-client');

exports.main = async (context = {}, sendResponse) => {
  const { hs_object_id } = context.propertiesToSend;

  const deals = await getAssociatedDeals(hs_object_id);
  const totalAmount = calculateTotalAmount(deals);

  sendResponse({ dealsCount: deals.length, totalAmount });
};

async function getAssociatedDeals(hs_object_id) {
  const hubSpotClient = new hubspot.Client({
    accessToken: process.env['PRIVATE_APP_ACCESS_TOKEN'],
  });
  const objectData = await hubSpotClient.crm.contacts.basicApi.getById(
    hs_object_id,
    null,
    null,
    ['deals'],
  );
  if (!objectData.associations) {
    // no associated deals
    return [];
  }
  const dealIds = objectData.associations.deals.results.map((deal) => deal.id);
  const deals = await hubSpotClient.crm.deals.batchApi.read({
    inputs: dealIds.map((id) => ({ id })),
  });
  return deals.results;
}

function calculateTotalAmount(deals) {
  const amounts = deals.map((deal) => parseFloat(deal.properties.amount));
  return amounts.reduce((sum, amount) => sum + amount, 0);
}
