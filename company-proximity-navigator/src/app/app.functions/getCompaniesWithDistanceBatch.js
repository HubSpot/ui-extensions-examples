// For HubSpot API calls
const hubspot = require('@hubspot/api-client');
// For obtaining geocoding data
const MapboxClient = require('@mapbox/mapbox-sdk/services/geocoding');
// For calculating the distance between two points
const turf = require('@turf/turf');

// To fetch only needed company properties
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
exports.main = async (context = {}, sendResponse) => {
  const { batchSize } = context.event.payload;

  const companies = await getCompaniesBatch({
    hubspotClient: new hubspot.Client({
      accessToken: process.env['PRIVATE_APP_ACCESS_TOKEN'],
    }),
    batchSize,
  });

  const currentCompanyProperties = context.propertiesToSend;
  const companiesWithDistance = await extendWithDistance({
    companies: companies.filter(
      // Exclude current company recored from list
      ({ properties }) =>
        properties.hs_object_id != currentCompanyProperties.hs_object_id
    ),
    currentCompanyProperties,
  });

  sendResponse({
    companies: companiesWithDistance,
  });
};

// Function to fetch companies batch using HubSpot API client
async function getCompaniesBatch({ hubspotClient, batchSize }) {
  const apiResponse = await hubspotClient.crm.companies.basicApi.getPage(
    batchSize,
    undefined,
    PROPERTIES_TO_FETCH
  );

  return apiResponse.results;
}

// Function to calculate the distance from current company record
async function extendWithDistance({ companies, currentCompanyProperties }) {
  const coordinatesFrom = await getCoordinates({
    address: buildFullAdress(currentCompanyProperties),
  });
  return Promise.all(
    companies.map(async (company) => {
      const coordinates = await getCoordinates({
        address: buildFullAdress(company.properties),
      });
      const distance = getDistance({
        coordinatesFrom,
        coordinatesTo: coordinates,
      });
      // Return existing company properties together with calculated distance
      return {
        ...company,
        distance,
      };
    })
  );
}

function buildFullAdress({ city, state, address }) {
  return `${city} ${state} ${address}`;
}

// Function to obtain geographic coordinates for specified address
async function getCoordinates({ address }) {
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
