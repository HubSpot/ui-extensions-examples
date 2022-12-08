exports.main = async (context, sendResponse) => {
  // Displays a button that will call the action-feedback-banner function when clicked
  sendResponse({
    sections: [
      {
        type: 'text',
        text: "This button will display a success or error banner to indicate the result of the button's action.",
      },
      {
        type: 'button',
        text: 'Show feedback message',
        onClick: {
          type: 'SERVERLESS_ACTION_HOOK',
          serverlessFunction: 'action-feedback-banner',
        },
      },
    ],
  });
};
