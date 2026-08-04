const axios = require('axios');

exports.main = async (context = {}) => {
  const { hs_object_id } = context.propertiesToSend;
  const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];

  return await fetchAssociations(token, hs_object_id);
};

// Function to fetch associations for the object by id
const fetchAssociations = async (token, id) => {
  const requestBody = {
    operationName: 'data',
    query: QUERY,
    variables: { id },
  };

  const response = await axios
    .post('https://api.hubapi.com/collector/graphql', JSON.stringify(requestBody), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseBody = response.data;

    return responseBody.data.CRM.contact;
};

// GraphQL query to fetch associations
const QUERY = `
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
