// for HubSpot API calls
const hubspot = require('@hubspot/api-client');

exports.main = async (context = {}) => {
  const hubspotClient = new hubspot.Client({
    accessToken: process.env['PRIVATE_APP_ACCESS_TOKEN']
  });
  const { stage } = context.parameters;
  const { hs_object_id } = context.propertiesToSend;

  // Set lifecyclestage to empty string to clear the property
  await hubspotClient.crm.contacts.basicApi.update(hs_object_id, {
    properties: { lifecyclestage: '' }
  });

  const apiResponse = await hubspotClient.crm.contacts.basicApi.update(
    hs_object_id,
    {
      properties: { lifecyclestage: stage }
    }
  );

  return apiResponse;
};
