// Importing necessary libraries
const axios = require('axios');

// Entry function of this module, it prepares and sends request to HubSpot
exports.main = (context = {}, sendResponse) => {
  const { hs_object_id } = context.propertiesToSend;
  const { associations, email } = context.parameters;
  const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];

  return fetchProperties(token, hs_object_id)
    .then((properties) => filterProperties({ ...properties, email }))
    .then((properties) => createContact(token, properties))
    .then((contact) => setAssociations(token, contact, associations))
    .then((contact) => sendResponse(contact));
};

// Function to fetch existing contact properties from HubSpot
const fetchProperties = (token, id) => {
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

// Function to create contact on HubSpot
const createContact = (token, properties) => {
  return axios
    .post(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      { properties: properties },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((res) => res.data)
    .catch((err) => {
      if (err.response && err.response.status === 409) {
        throw new Error('An existing contact already has this email');
      } else if (error.response && err.response.status === 401) {
        throw new Error('You do not have permission to duplicate this contact');
      } else {
        throw err;
      }
    });
};

// Function to set associations for the given contact and return the contact
const setAssociations = (token, contact, associations) => {
  const formattedAssociations = transformAssociations(associations, contact.id);

  const associationsPromises = [];

  if (formattedAssociations.company_collection__primary) {
    associationsPromises.push(
      updateAssociations(
        token,
        formattedAssociations.company_collection__primary,
        '0-1',
        '0-2',
      ),
    );
  }

  if (formattedAssociations.deal_collection__contact_to_deal) {
    associationsPromises.push(
      updateAssociations(
        token,
        formattedAssociations.deal_collection__contact_to_deal,
        '0-1',
        '0-3',
      ),
    );
  }

  return Promise.all(associationsPromises).then(() => contact);
};

// Function to update contact associations on HubSpot
const updateAssociations = (
  token,
  associations,
  fromObjectType,
  toObjectType,
) => {
  return axios.post(
    `https://api.hubapi.com/crm/v4/associations/${fromObjectType}/${toObjectType}/batch/create`,
    { inputs: associations },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
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

// Mapping association type to IDs
const ASSOCIATION_TYPE_IDS = {
  company_collection__primary: 1,
  deal_collection__contact_to_deal: 4,
};

// GraphQL query to fetch contact data from HubSpot
const QUERY = `query data($id: String!) {
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
