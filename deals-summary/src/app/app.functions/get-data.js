// For HubSpot API calls
const hubspot = require('@hubspot/api-client');

// Entry function of this module, it fetches associated deals and calculates the statistics
exports.main = async (context = {}) => {
  const { hs_object_id } = context.propertiesToSend;

  const deals = await getAssociatedDeals(hs_object_id);
  const totalAmount = calculateTotalAmount(deals);

  return { dealsCount: deals.length, totalAmount };
};

// Function to fetch associated deals with their properties
async function getAssociatedDeals(hs_object_id) {
  const hubSpotClient = new hubspot.Client({
    accessToken: process.env['PRIVATE_APP_ACCESS_TOKEN'],
  });

  // Fetch assisocisated deals ids
  const objectData = await hubSpotClient.crm.contacts.basicApi.getById(
    hs_object_id,
    null,
    null,
    ['deals']
  );
  if (!objectData.associations) {
    // No associated deals
    return [];
  }

  const dealIds = objectData.associations.deals.results.map((deal) => deal.id);
  // Fetch more deals prooperties to calculate needed numbers
  const deals = await hubSpotClient.crm.deals.batchApi.read({
    inputs: dealIds.map((id) => ({ id })),
  });
  return deals.results;
}

// Function to calculate total amount of deals
function calculateTotalAmount(deals) {
  const amounts = deals.map((deal) => parseFloat(deal.properties.amount));
  return amounts.reduce((sum, amount) => sum + amount, 0);
}
