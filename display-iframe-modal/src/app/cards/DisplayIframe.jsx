import { Link, Button, Text, Box, Flex, hubspot } from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend((
  { actions } // serverless function is not required for simply displaying an iframe
) => <Extension openIframe={actions.openIframeModal} />);

// Define the Extension component, taking in openIframe as a prop
const Extension = ({ openIframe }) => {
  const handleClick = () => {
    openIframe({
      uri: "https://wikipedia.com/", // this is a relative link. Some links will be blocked since they don't allow iframing
      height: 1000,
      width: 1000,
      title: 'Wikipedia in an Iframe',
      flush: true,
    });
  };

  return (
    <>
      <Flex direction="column" align="start" gap="medium">
        <Text>
          Clicking the button will open a modal dialog with an iframe that
          displays the content at the provided URL. Get more info on how to do this {" "}.
          <Link href="https://developers.hubspot.com/docs/platform/create-ui-extensions#open-an-iframe-in-a-modal">
            here
          </Link>
        </Text>

        <Box>
          <Button type="submit" onClick={handleClick}>
            Click me
          </Button>
        </Box>
      </Flex>
    </>
  );
};
