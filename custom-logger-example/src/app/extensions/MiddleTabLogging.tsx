import React from 'react';
import {
  Box,
  Button,
  CrmContext,
  Divider,
  Flex,
  GenericContext,
  Heading,
  hubspot,
  logger,
  Text,
} from '@hubspot/ui-extensions';

logger.warn('Warning in the middle tab, before my extension');

hubspot.extend(({ context }) => <MiddleTabLogging context={context} />);

type Props = { context: GenericContext | CrmContext };

const MiddleTabLogging = ({ context }: Props) => {
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
      <Heading>Test out the logger with the following buttons.</Heading>
      <Text>Check out the browser's developer console in local dev.</Text>
      <Flex gap="small" wrap="wrap">
        <Button onClick={callServerlessSuccess}>Call serverless success</Button>
        <Button onClick={callServerlessFail}>Call serverless error</Button>
      </Flex>
      <Divider />
      <Box>
        <Flex direction="column" gap="small">
          <Heading>Test serverless functions</Heading>
          <Text>The developer console will show your events in local dev.</Text>
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
      </Box>
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
