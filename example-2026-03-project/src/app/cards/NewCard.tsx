import { useState } from 'react';
import {
  Alert,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  LoadingSpinner,
  Text,
  hubspot,
} from '@hubspot/ui-extensions';
import type {
  ExtensionPointApiActions,
  ExtensionPointApiContext,
} from '@hubspot/ui-extensions';

hubspot.extend<'crm.record.tab'>(({ context, actions }) => (
  <Extension context={context} actions={actions} />
));

interface ExtensionProps {
  context: ExtensionPointApiContext<'crm.record.tab'>;
  actions: ExtensionPointApiActions<'crm.record.tab'>;
}

const Extension = ({ context, actions }: ExtensionProps) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverlessResponse, setServerlessResponse] = useState<string | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const { firstName, lastName, email } = context.user;

  const handleCallServerless = async () => {
    setLoading(true);
    setError(null);
    setServerlessResponse(null);

    try {
      const result = await hubspot.serverless<{ message: string }>(
        'app_function',
        {
          parameters: { text, firstName, lastName, email },
        },
      );
      setServerlessResponse(JSON.stringify(result, null, 2));
      actions.addAlert({
        type: 'success',
        message: 'Serverless function executed successfully!',
      });
    } catch (e) {
      const message =
        e instanceof Error ? e.message : 'Serverless function failed';
      setError(message);
      actions.addAlert({ type: 'danger', message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex direction="column" gap="md">
      <Heading>Hello, {context.user.firstName}!</Heading>
      <Text>
        You are viewing contact record {context.crm.objectId} in portal{' '}
        {context.portal.id}.
      </Text>

      <Divider />

      <Heading>Call Serverless Function</Heading>
      <Text>
        Send a message to the serverless function using{' '}
        <Text format={{ fontWeight: 'bold' }} inline>
          hubspot.serverless
        </Text>
        . The function receives both your input and the contact&apos;s CRM
        properties.
      </Text>
      <Flex direction="row" align="end" gap="sm">
        <Input name="text" label="Message" onInput={(t) => setText(t)} />
        <Button onClick={handleCallServerless} disabled={loading}>
          Send
        </Button>
      </Flex>

      {loading && (
        <Flex direction="row" align="center" gap="sm">
          <LoadingSpinner label="Loading..." />
        </Flex>
      )}

      {serverlessResponse && (
        <Alert title="Serverless Response" variant="success">
          <Text>{serverlessResponse}</Text>
        </Alert>
      )}

      {error && (
        <Alert title="Error" variant="error">
          {error}
        </Alert>
      )}
    </Flex>
  );
};
