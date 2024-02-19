// For HubSpot API calls
const hubspot = require('@hubspot/api-client');
// For obtaining geocoding data
const MapboxClient = require('@mapbox/mapbox-sdk/services/geocoding');
// For calculating the distance between two points
const turf = require('@turf/turf');

// To fetch needed company properties
const PROPERTIES_TO_FETCH = [
  'hs_object_id',
  'city',
  'state',
  'address',
  'domain',
  'phone',
  'name',
  'annualrevenue',
];

// Entry function of this module, it fetches batch of companies and calculates distance to the current company record
exports.main = async (context = {}) => {
  let currentCompany = await extendWithGeoCoordinates(context.propertiesToSend);
  if (!currentCompany.coordinates) {
    throw new Error(
      'Unable to calculate geo coordintes. Please specify an address for the record.'
    );
  }

  const { batchSize } = context.event.payload;
  let otherCompanies = await getOtherCompaniesBatch({
    hubspotClient: new hubspot.Client({
      accessToken: process.env['PRIVATE_APP_ACCESS_TOKEN'],
    }),
    batchSize,
    currentCompany,
  });

  // Extend companies records with geo coordinates and distance to the current company
  otherCompanies = await Promise.all(
    otherCompanies.map((company) => extendWithGeoCoordinates(company))
  );
  otherCompanies = await extendWithDistance({
    coordinatesFrom: currentCompany.coordinates,
    companies: otherCompanies.filter(({ coordinates }) => !!coordinates),
  });

  return {
    companies: otherCompanies,
  };
};

// Function to fetch companies batch using HubSpot API client
async function getOtherCompaniesBatch({
  hubspotClient,
  batchSize,
  currentCompany,
}) {
  const apiResponse = await hubspotClient.crm.companies.basicApi.getPage(
    batchSize,
    undefined,
    PROPERTIES_TO_FETCH
  );

  return apiResponse.results
    .map((company) => ({
      ...company,
      ...company.properties,
    }))
    .filter(
      // Exclude current company recored from list
      ({ hs_object_id }) => hs_object_id != currentCompany.hs_object_id
    );
}

// Function to queery geo coordinates based on company address
async function extendWithGeoCoordinates(company) {
  try {
    return {
      ...company,
      coordinates: await getGeoCoordinates({
        address: buildFullAdress(company),
      }),
    };
  } catch (e) {
    return company;
  }
}

// Function to calculate the distance from current company record
async function extendWithDistance({ coordinatesFrom, companies }) {
  return Promise.all(
    companies.map(async (company) => {
      const distance = getDistance({
        coordinatesFrom,
        coordinatesTo: company.coordinates,
      });
      // Return existing company properties together with calculated distance
      return {
        ...company,
        distance,
      };
    })
  );
}

const buildFullAdress = ({ city, state, address }) => {
  return `${city} ${state} ${address}`;
};

// Function to obtain geographic coordinates for specified address
async function getGeoCoordinates({ address }) {
  // Use Mapbox Geocoding API
  // See https://docs.mapbox.com/api/search/geocoding/
  const mapboxClient = MapboxClient({
    accessToken: process.env.MAPBOX_ACCESS_TOKEN,
  });
  // Use JS SDK for working with Mapbox APIs: https://www.npmjs.com/package/@mapbox/mapbox-sdk
  const response = await mapboxClient.forwardGeocode({ query: address }).send();

  return response.body.features[0].geometry.coordinates;
}

// Function to calculate the distance between 2 points
function getDistance({ coordinatesFrom, coordinatesTo }) {
  // Use JS SDK for Turf project: https://www.npmjs.com/package/@turf/turf
  return turf.distance(turf.point(coordinatesFrom), turf.point(coordinatesTo), {
    units: 'miles',
  });
}
