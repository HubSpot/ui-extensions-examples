import React from 'react';
import {
  Button,
  Divider,
  Flex,
  hubspot,
  logger,
  Text,
} from '@hubspot/ui-extensions';

logger.warn('Warning in the sidebar, before my extension');

hubspot.extend(({ context }) => <SidebarLogging context={context} />);

const SidebarLogging = ({ context }) => {
  logger.debug(JSON.stringify(context, null, 2));

  const callServerlessSuccess = () => {
    return hubspot
      .serverless('serverless-success')
      .then((result) => logger.info(result))
      .catch((error) => logger.error(error.message));
  };

  const callServerlessFail = () => {
    return hubspot
      .serverless('serverless-error')
      .then((result) => logger.info(result))
      .catch((error) => logger.error(error.message));
  };

  return (
    <Flex direction="column" align="start" gap="small">
      <Text>Test out the logger with the following buttons.</Text>
      <Text variant="microcopy">
        The browser's developer console will show your events in local dev.
      </Text>
      <Divider />
      <Text>Test serverless functions</Text>
      <Flex gap="small" wrap="wrap">
        <Button onClick={callServerlessSuccess}>Serverless success ✅</Button>
        <Button onClick={callServerlessFail}>Serverless error ❌</Button>
      </Flex>
      <Divider />
      <Flex direction="column" gap="small">
        <Text>Test different log levels.</Text>
        <Flex gap="small" wrap="wrap">
          <Button onClick={() => logger.info('Logging an info!')}>
            logger.info()
          </Button>
          <Button onClick={() => logger.debug('Logging a debug!')}>
            logger.debug()
          </Button>
          <Button onClick={() => logger.warn('Logging a warning!')}>
            logger.warn()
          </Button>
          <Button onClick={() => logger.error('Logging an error!')}>
            logger.error()
          </Button>
        </Flex>
      </Flex>
      <Divider />
      <Text>
        Deploy the app and crash the card. Use the Trace ID to see what happened
        in the Log Traces tab in your private app's dashboard.
      </Text>
      <Button
        variant="destructive"
        onClick={() => {
          throw new Error('Card crashed');
        }}
      >
        Crash the card
      </Button>
    </Flex>
  );
};
