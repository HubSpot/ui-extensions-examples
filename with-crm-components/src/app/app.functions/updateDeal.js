const axios = require('axios');

exports.main = async (context = {}, sendResponse) => {
  const { dealId, dealStage } = context.parameters;
  const PRIVATE_APP_TOKEN = context.secrets.PRIVATE_APP_ACCESS_TOKEN;
  try {
    await updateDeal(dealId, dealStage, PRIVATE_APP_TOKEN);
    sendResponse({ status: 'success' });
  } catch (e) {
    sendResponse({ status: 'error', message: e.message });
  }
};

const updateDeal = async (dealId, stage, token) => {
  try {
    const response = await axios.patch(
      `https://api.hubapiqa.com/crm/v3/objects/deals/${dealId}`,
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
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
