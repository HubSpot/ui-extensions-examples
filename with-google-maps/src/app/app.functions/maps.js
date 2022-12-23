const axios = require('axios');
const { Client } = require('@googlemaps/google-maps-services-js');

exports.main = async (context = {}, sendResponse) => {
  const { latitude, longitude } = context.propertiesToSend;

  const coordinates = `${latitude},${longitude}`;

  try {
    const places = await getNearbyPlaces(coordinates);

    const markerList = places.map((place) => {
      return (
        place.geometry.location.lat.toString() +
        ',' +
        place.geometry.location.lng.toString()
      );
    });

    const markers = markerList.join('|');

    const mapImage = [
      {
        type: 'image',
        src:
          'https://maps.googleapis.com/maps/api/staticmap?center=' +
          coordinates +
          '&markers=color:0xfe7a59|' +
          markers +
          '&zoom=12&size=600x300&key=' +
          GOOGLE_MAPS,
        alt: 'Google map image',
        onClick: {
          type: 'IFRAME',
          width: 800,
          height: 400,
          uri: getMapUrl(coordinates),
        },
      },
      {
        type: 'text',
        format: 'markdown',
        text: '_Click the image to explore the area_',
      },
    ];

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
      sections: [...mapImage, ...body],
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

const { GOOGLE_MAPS } = process.env;

const googleMaps = new Client({});

const defaultOptions = { type: 'restaurant', radius: 2500 /* meters */ };

async function getNearbyPlaces(location, limit = 3, options = defaultOptions) {
  const places = await googleMaps.placesNearby({
    params: { location, key: GOOGLE_MAPS, ...options },
  });

  return places.data.results.slice(0, limit);
}

function getMapUrl(location) {
  return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS}&q=${encodeURIComponent(
    location
  )}`;
}
