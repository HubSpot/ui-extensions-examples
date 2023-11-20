// for HubSpot API calls
const hubspot = require('@hubspot/api-client');

exports.main = async (context = {}) => {
  const { hs_object_id } = context.propertiesToSend;

  const deals = await getAssociatedDeals(hs_object_id);
  const totalAmount = calculateTotalAmount(deals);

  // console.log(process.env.PRIVATE_APP_ACCESS_TOKEN)
  // console.log(context.secrets.PRIVATE_APP_ACCESS_TOKEN)

  console.log("Number of deals:", deals?.length);
  console.log("Deal total amount:", totalAmount);

  return { dealsCount: deals.length, totalAmount };
};

const getAssociatedDeals = async (hs_object_id) => {
  const hubSpotClient = new hubspot.Client({
    accessToken: process.env['PRIVATE_APP_ACCESS_TOKEN']
    // basePath: 'https://api.hubapiqa.com'
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

  // for (let i = 0; i < 500; i++) {
  //   console.log("helloworld");
  // }

  return deals.results;
}

const calculateTotalAmount = (deals) => {
  const amounts = deals.map((deal) => parseFloat(deal.properties.amount));
  return amounts.reduce((sum, amount) => sum + amount, 0);
}
