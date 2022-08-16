exports.main = async (context, sendResponse) => {
  sendResponse({
    sections: [
      {
        type: 'text',
        text: 'Clicking the button will open a modal dialog with an iframe that displays the content at the provided URL.',
      },
      {
        type: 'button',
        text: 'Open iframe',
        onClick: {
          type: 'IFRAME',
          // Width and height of the iframe (in pixels)
          width: 1000,
          height: 800,
          uri: 'https://product.hubspot.com/blog',
        },
      },
    ],
  });
};
