import React from 'react';
import {
  hubspot,
  logger,
  Button,
  Divider,
  Flex,
  Text,
  GenericContext,
  CrmContext,
} from '@hubspot/ui-extensions';

logger.warn('Warning in the middle tab, before my extension');

hubspot.extend(({ context }) => <MiddleTabLogging context={context} />);

type Props = { context: GenericContext | CrmContext }

const MiddleTabLogging = ({ context }: Props) => {
  logger.debug(JSON.stringify(context, null, 2));

  const callServerlessSuccess = () => {
    return hubspot.serverless('serverless-success')
      .then(result => logger.info(result))
      .catch(error => logger.error(error.message));
  }

  const callServerlessFail = () => {
    return hubspot.serverless('serverless-error')
      .then(result => logger.info(result))
      .catch(error => logger.error(error.message));
  }

  return (
    <Flex direction="column" align="start" gap='sm'>
      <Text>
        Test out the logger with the following buttons. In local dev it will log to the browser console.
      </Text>
      <Divider />
      <Button variant="primary" onClick={callServerlessSuccess}>
        Call serverless success
      </Button>
      <Button variant="destructive" onClick={callServerlessFail}>
        Call serverless error
      </Button>
      <Divider />
      <Button
        variant="primary"
        onClick={() => logger.info('Logging an info!')}
      >
        info
      </Button>
      <Button
        variant="primary"
        onClick={() => logger.debug('Logging a debug!')}
      >
        debug
      </Button>
      <Button
        onClick={() => logger.warn('Logging a warning!')}
      >
        warn
      </Button>
      <Button
        variant="destructive"
        onClick={() => logger.error('Logging an error!')}
      >
        error
      </Button>
      <Divider />
      <Text>
        Deploy the app and crash the card. Use the Trace ID to see what happened in the Log Traces tab in your private app's dashboard.
      </Text>
      <Button
        variant="destructive"
        onClick={() => { throw new Error('Card crashed') }}
      >
        Crash the card
      </Button>
    </Flex>
  )
};
