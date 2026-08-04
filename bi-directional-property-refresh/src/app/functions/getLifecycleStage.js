// for HubSpot API calls
const hubspot = require('@hubspot/api-client');

// Initialize HubSpot API client

exports.main = async (context = {}) => {
  const hubspotClient = new hubspot.Client({
    accessToken: process.env['PRIVATE_APP_ACCESS_TOKEN']
  });

  const apiResponse = await hubspotClient.crm.properties.coreApi.getByName(
    '0-1',
    'lifecyclestage'
  );
  return apiResponse;
};
