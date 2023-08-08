const axios = require('axios');

exports.main = async (context = {}, sendResponse) => {
  const { hs_object_id } = context.propertiesToSend;
  const PRIVATE_APP_TOKEN = context.secrets.PRIVATE_APP_ACCESS_TOKEN;

  try {
    // Fetch associations
    const { data } = await fetchAssociations(
      query,
      PRIVATE_APP_TOKEN,
      hs_object_id
    );

    // Send the response data
    sendResponse(data);
  } catch (e) {
    sendResponse(e);
  }
};

const fetchAssociations = (query, token, id) => {
  const body = {
    operationName: 'data',
    query,
    variables: { id: id }
  };

  return axios.post(
    'https://api.hubapi.com/collector/graphql',
    JSON.stringify(body),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  );
};

// GraphQL query to fetch associations
const query = `
    query data ($id: String!) {
      CRM {
        contact(uniqueIdentifier: "id", uniqueIdentifierValue: $id) {
          associations {
            deal_collection__contact_to_deal {
              total
              items {
                hs_object_id
              }
            }
            company_collection__primary {
              total
              items {
                hs_object_id
              }
            }
          }
        }
      }
    }
`;
