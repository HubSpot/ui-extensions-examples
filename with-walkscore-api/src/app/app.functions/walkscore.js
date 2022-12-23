const axios = require('axios');

exports.main = async (context = {}, sendResponse) => {
  const { latitude, longitude, address, city, state, country } =
    context.propertiesToSend;

  const fullAddress = [address, city, state, country].join(', ');

  try {
    const { modes, logo_url } = await getWalkScores(
      fullAddress,
      latitude,
      longitude
    );
    const walkscoreSections = [
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
    ];

    sendResponse({
      sections: [...walkscoreSections],
    });
  } catch (error) {
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: 'ERROR',
        body: `Error: ${error.message}`,
      },
      sections: [],
    });
  }
};

// ================== vvvv  Helper functions  vvvv =====================
const { WALKSCORE } = process.env;
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
