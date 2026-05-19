const hubspot = require('@hubspot/api-client');

exports.main = async (context) => {
  const { parameters } = context;
  const { objectType } = parameters;

  if (!objectType) {
    return { error: 'Missing required parameter: objectType' };
  }

  try {
    const accessToken = process.env.PRIVATE_APP_ACCESS_TOKEN;
    const hubspotClient = new hubspot.Client({ accessToken });

    const response = await hubspotClient.crm.properties.coreApi.getAll(objectType);

    const properties = response.results
      .filter((p) => !p.hidden && !p.name.startsWith('hs_v2_'))
      .map((p) => ({
        name: p.name,
        label: p.label,
        type: p.type,
        groupName: p.groupName,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));

    return { properties };
  } catch (error) {
    console.error('Error fetching properties:', error.message, error.stack);
    return { error: error.message || 'Unknown error occurred' };
  }
};
