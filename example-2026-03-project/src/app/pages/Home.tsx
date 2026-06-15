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
import {
  HeaderActions,
  PrimaryHeaderActionButton,
  SecondaryHeaderActionButton,
} from '@hubspot/ui-extensions/pages/home';

hubspot.extend<'home'>(({ context, actions }) => (
  <AppHomePage context={context} actions={actions} />
));

interface AppHomePageProps {
  context: ExtensionPointApiContext<'home'>;
  actions: ExtensionPointApiActions<'home'>;
}

const AppHomePage = ({ context, actions }: AppHomePageProps) => {
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
    <>
      <HeaderActions>
        <PrimaryHeaderActionButton
          onClick={() =>
            actions.addAlert({
              type: 'info',
              message: `Welcome, ${context.user.firstName}!`,
            })
          }
        >
          Greet Me
        </PrimaryHeaderActionButton>
        <SecondaryHeaderActionButton
          onClick={() =>
            actions.addAlert({
              type: 'tip',
              message: `You are in portal ${context.portal.id} (${context.portal.timezone})`,
            })
          }
        >
          Portal Info
        </SecondaryHeaderActionButton>
      </HeaderActions>
      <Flex direction="column" gap="md">
        <Heading>
          Welcome, {context.user.firstName} {context.user.lastName}!
        </Heading>
        <Text>
          This is the home page for {context.extension?.appName ?? 'your app'}.
          Use the buttons above to explore the actions API.
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
    </>
  );
};
