const axios = require('axios');

exports.main = async (context = {}) => {
  const { dealId, dealStage } = context.parameters;
  const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];

  try {
    await updateDeal(token, dealId, dealStage);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message }
  }
};

const updateDeal = async (token, id, stage) => {
  return axios.patch(
    `https://api.hubapi.com/crm/v3/objects/deals/${id}`,
    {
      properties: {
        dealstage: stage,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};
