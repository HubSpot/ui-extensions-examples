const hubspot = require('@hubspot/api-client');

exports.main = async (context) => {
  try {
    const accessToken = process.env.PRIVATE_APP_ACCESS_TOKEN;
    const hubspotClient = new hubspot.Client({ accessToken });

    const response = await hubspotClient.crm.schemas.coreApi.getAll();

    const customObjects = response.results.map((schema) => ({
      label: schema.labels?.plural || schema.name,
      value: schema.objectTypeId,
    }));

    return { customObjects };
  } catch (error) {
    console.error('Error fetching custom object schemas:', error.message, error.stack);
    return { error: error.message || 'Unknown error occurred' };
  }
};
