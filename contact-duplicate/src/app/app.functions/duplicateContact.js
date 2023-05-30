// Importing necessary libraries
const axios = require('axios');

// Mapping association type to IDs
const ASSOCIATION_TYPE_IDS = {
  company_collection__primary: 1,
  deal_collection__contact_to_deal: 4,
};

// Entry function of this module, it prepares and sends request to HubSpot
exports.main = async (context = {}, sendResponse) => {
  const { hs_object_id } = context.propertiesToSend;
  const PRIVATE_APP_TOKEN = context.secrets.PRIVATE_APP_ACCESS_TOKEN;
  const { associations, email } = context.parameters;

  try {
    // Fetch contact properties
    const { data } = await fetchProperties(
      query,
      PRIVATE_APP_TOKEN,
      hs_object_id
    );

    // Create contact on HubSpot
    const contact = await createContact(
      filterProperties({
        ...data.data.CRM.contact,
        email,
      }),
      PRIVATE_APP_TOKEN
    );

    const formattedAssociations = transformAssociations(
      associations,
      contact.data.id
    );

    if (
      Object.values(formattedAssociations).some((value) => value.length > 1)
    ) {
      // Update the associations on HubSpot
      await updateAssociations(
        formattedAssociations.company_collection__primary,
        '0-1',
        '0-2',
        PRIVATE_APP_TOKEN
      );

      await updateAssociations(
        formattedAssociations.deal_collection__contact_to_deal,
        '0-1',
        '0-3',
        PRIVATE_APP_TOKEN
      );
    }
    // Send successful response
    sendResponse(contact.data);
  } catch (e) {
    // Send error response
    sendResponse(e);
  }
};

// Function to fetch contact properties from HubSpot
const fetchProperties = (query, token, id) => {
  const body = {
    operationName: 'data',
    query,
    variables: { id: id },
  };

  return axios.post(
    'https://api.hubapi.com/collector/graphql',
    JSON.stringify(body),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Function to create contact on HubSpot
const createContact = (properties, token) => {
  return axios.post(
    'https://api.hubapi.com/crm/v3/objects/contacts',
    { properties: properties },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Function to update contact associations on HubSpot
const updateAssociations = (
  associations,
  fromObjectType,
  toObjectType,
  token
) => {
  return axios.post(
    `https://api.hubapi.com/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/create`,
    { inputs: associations },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Function to transform association data into required format
const transformAssociations = (associationsGQL, id) => {
  let result = {
    company_collection__primary: [],
    deal_collection__contact_to_deal: [],
  };

  // Loop through each association and transform its format
  Object.keys(associationsGQL).forEach((key) => {
    associationsGQL[key].items.forEach((item) => {
      result[key].push({
        from: { id },
        to: { id: item.hs_object_id.toString() },
        types: [
          {
            associationCategory: 'HUBSPOT_DEFINED',
            associationTypeId: ASSOCIATION_TYPE_IDS[key],
          },
        ],
      });
    });
  });

  return result;
};

// Function to filter the contact properties that we are interested in
const filterProperties = (obj) => {
  return Object.entries(obj).reduce((accumulator, [key, value]) => {
    if (key !== 'hs_object_id' && value !== null) {
      accumulator[key] = value;
    }
    return accumulator;
  }, {});
};

// GraphQL query to fetch contact data from HubSpot
const query = `query data($id: String!) {
  CRM {
    contact(uniqueIdentifier: "id", uniqueIdentifierValue: $id) {
      address
      work_email
      website
      zip
      state
      phone
      photo
      lastname
      mobilephone
      jobtitle
      industry
      hubspotscore
      hs_language
      firstname
      company
      city
      job_function
    }
  }
}`;
