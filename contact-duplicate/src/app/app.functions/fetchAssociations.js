const axios = require('axios');

exports.main = (context = {}, sendResponse) => {
  const { hs_object_id } = context.propertiesToSend;
  const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];

  return fetchAssociations(token, hs_object_id).then(sendResponse);
};

// Function to fetch associations for the object by id
const fetchAssociations = (token, id) => {
  const body = {
    operationName: 'data',
    query: QUERY,
    variables: { id },
  };

  return axios
    .post('https://api.hubapi.com/collector/graphql', JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      const body = res.data;
      return body.data.CRM.contact;
    });
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
