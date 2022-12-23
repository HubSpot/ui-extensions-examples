const dayjs = require('dayjs');

exports.main = async (context, sendResponse) => {
  sendResponse({
    sections: [
      {
        type: 'text',
        format: 'markdown',
        text: 'This project demonstrates how to include and use an npm dependency, using [day.js](https://www.npmjs.com/package/dayjs) as an example.',
      },
      {
        type: 'text',
        text: `Date formatting with day.js: ${dayjs().format('M/D/YYYY')}`,
      },
    ],
  });
};
