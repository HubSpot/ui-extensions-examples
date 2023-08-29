// For HubSpot API calls
const hubspot = require('@hubspot/api-client');
// For obtaining geocoding data
const MapboxClient = require('@mapbox/mapbox-sdk/services/geocoding');
// For calculating the distance between two points
const turf = require('@turf/turf');

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
      ({ properties }) =>
        properties.hs_object_id != currentCompanyProperties.hs_object_id
    ),
    currentCompanyProperties,
  });

  sendResponse({
    companies: companiesWithDistance,
  });
};

async function getCompaniesBatch({ hubspotClient, batchSize }) {
  const apiResponse = await hubspotClient.crm.companies.basicApi.getPage(
    batchSize,
    undefined,
    PROPERTIES_TO_FETCH
  );

  return apiResponse.results;
}

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

async function getCoordinates({ address }) {
  const mapboxClient = MapboxClient({
    accessToken: process.env.MAPBOX_ACCESS_TOKEN,
  });
  const response = await mapboxClient.forwardGeocode({ query: address }).send();

  return response.body.features[0].geometry.coordinates;
}

function getDistance({ coordinatesFrom, coordinatesTo }) {
  return turf.distance(turf.point(coordinatesFrom), turf.point(coordinatesTo), {
    units: 'miles',
  });
}
