const axios = require('axios');

exports.main = (context = {}, sendResponse) => {
  const { dealId, dealStage } = context.parameters;
  const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];
  return updateDeal(token, dealId, dealStage)
    .then(() => {
      sendResponse({ status: 'success' });
    })
    .catch((e) => {
      sendResponse({ status: 'error', message: e.message });
    });
};

const updateDeal = (token, id, stage) => {
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
