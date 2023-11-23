import React, { useState } from "react";
import { Link, Button, Text, Box, Flex, hubspot } from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend((
  { context, actions } // serverless function is not required for simply displaying an iframe
) => <Extension context={context} openIframe={actions.openIframeModal} />);

// Define the Extension component, taking in runServerless, context, & openIframe as props
const Extension = ({ context, runServerless, openIframe }) => {
  const handleClick = () => {
    openIframe({
      uri: "https://wikipedia.com/", // this is a relative link. Some links will be blocked since they don't allow iframing
      height: 1000,
      width: 1000,
    });
  };

  return (
    <>
      <Flex direction="column" align="start" gap="medium">
        <Flex direction="row" gap="medium">
          <Text format={{ fontWeight: "bold" }} inline="true">
            How to open a popup iframe:
          </Text>
          <Text>
            Clicking the button will open a modal dialog with an iframe that
            displays the content at the provided URL. Get more info on how to do
            this here{" "}
            <Link href="https://developers.hubspot.com/docs/platform/create-ui-extensions#open-an-iframe-in-a-modal">
              here
            </Link>
          </Text>
        </Flex>
        <Box>
          <Button type="submit" onClick={handleClick}>
            Click me
          </Button>
        </Box>
      </Flex>
    </>
  );
};
