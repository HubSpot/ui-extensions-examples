const axios = require('axios');
const { Client } = require('@googlemaps/google-maps-services-js');

exports.main = async (context = {}, sendResponse) => {
  const { latitude, longitude, address, city, state, country } =
    context.propertiesToSend;

  const fullAddress = [address, city, state, country].join(', ');
  const coordinates = `${latitude},${longitude}`;

  let header = [
    {
      type: 'heading',
      text: 'Nearby Attractions',
    },
  ];

  const footer = [
    {
      type: 'button',
      variant: 'primary',
      text: 'Explore local area',
      onClick: {
        type: 'IFRAME',
        width: 800,
        height: 400,
        uri: getMapUrl(coordinates),
      },
    },
  ];

  try {
    const { modes, logo_url } = await getWalkScores(
      fullAddress,
      latitude,
      longitude
    );
    header = [
      {
        type: 'image',
        src: logo_url,
        alt: 'Walkscore logo',
      },
      {
        type: 'statistics',
        items: modes.map((mode) => {
          return {
            label: mode.description,
            number: mode.score,
            description: {
              type: 'trend',
              value: mode.delta,
              direction: mode.trend,
            },
          };
        }),
      },
      ...header,
    ];

    const places = await getNearbyPlaces(coordinates);
    const body = places.map((place) => {
      return {
        type: 'tile',
        content: [
          {
            type: 'heading',
            text: place.name,
          },
          {
            type: 'stack',
            distance: 'flush',
            content: [
              {
                type: 'text',
                format: 'markdown',
                text: `**${place.rating} rating** | _${place.vicinity}_`,
              },
            ],
          },
          {
            type: 'tag',
            text: place.types[0],
            variant: 'default',
          },
        ],
      };
    });

    sendResponse({
      sections: [...header, ...body, ...footer],
    });
  } catch (error) {
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: 'ERROR',
        body: `Error: ${error.message}`,
      },
      sections: [...header],
    });
  }
};

// ================== vvvv  Helper functions  vvvv =====================

const { GOOGLE_MAPS_API_KEY, WALKSCORE } = process.env;

const googleMaps = new Client({});

const defaultOptions = { type: 'restaurant', radius: 2500 /* meters */ };

async function getNearbyPlaces(location, limit = 3, options = defaultOptions) {
  const places = await googleMaps.placesNearby({
    params: { location, key: GOOGLE_MAPS_API_KEY, ...options },
  });

  return places.data.results.slice(0, limit);
}

function getMapUrl(location) {
  return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
    location
  )}`;
}

/**
 * Return Walking, Biking and Transit scores for a given location
 *
 * @param {string} location - A search query in the form of an address
 * @param {number} latitude - Latitude coordinate
 * @param {number} longitude - Longitude coordinate
 */
async function getWalkScores(location, latitude, longitude) {
  const api = 'https://api.walkscore.com/score';
  const params = {
    format: 'json',
    address: location,
    lat: latitude,
    lon: longitude,
    transit: 1,
    bike: 1,
    wsapikey: WALKSCORE,
  };

  const data = await axios.get(api, { params }).then((response) => {
    return response.data;
  });

  let { walkscore, description, logo_url, bike = {}, transit = {} } = data;

  const walk = {
    name: 'Walking',
    description: description,
    score: walkscore,
  };
  bike.name = 'Biking';
  transit.name = 'Transit';

  // Benchmark scores for NYC
  const benchmarks = { Walking: 88, Transit: 89, Biking: 69 };

  [walk, bike, transit].forEach((mode) => {
    mode.description = mode.description || mode.name;
    mode.benchmark = benchmarks[mode.name];
    if (!mode.score) {
      mode.score = 'n/a';
      mode.delta = 'Score not found';
      mode.trend = 'decrease';
    } else {
      mode.delta = `${Math.abs(mode.benchmark - mode.score)} pts`;
      mode.trend = mode.score > mode.benchmark ? 'increase' : 'decrease';
      mode.score = `${mode.score}%`;
    }
  });

  return { logo_url, modes: [walk, bike, transit] };
}
