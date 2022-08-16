// For external API calls
const axios = require('axios');

exports.main = async (context, sendResponse) => {
  // Randomly choose between a valid and invalid URL to display for success and error demonstration purposes
  const isValidEndpoint = Math.round(Math.random());
  const endpoint = isValidEndpoint
    ? 'https://www.hubspot.com'
    : 'https://www.hubspot.com/doesnotexist';

  try {
    // Arbitrary request against an endpoint
    await axios.get(endpoint);

    // Creates a transient, successful feedback banner when request is successful
    sendResponse({
      message: {
        type: 'SUCCESS',
        body: 'Action was successful',
      },
    });
  } catch (error) {
    // Creates an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: 'ERROR',
        body: `Error: ${error.message}`,
      },
    });
  }
};
