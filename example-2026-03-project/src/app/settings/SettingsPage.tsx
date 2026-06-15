import { useState } from 'react';
import {
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Text,
  hubspot,
} from '@hubspot/ui-extensions';
import type {
  ExtensionPointApiActions,
  ExtensionPointApiContext,
} from '@hubspot/ui-extensions';

hubspot.extend<'settings'>(({ context, actions }) => (
  <SettingsPage context={context} actions={actions} />
));

interface SettingsPageProps {
  context: ExtensionPointApiContext<'settings'>;
  actions: ExtensionPointApiActions<'settings'>;
}

const SettingsPage = ({ context, actions }: SettingsPageProps) => {
  const [apiKey, setApiKey] = useState('');

  const handleSave = () => {
    actions.addAlert({
      type: 'success',
      message: 'Settings saved successfully!',
    });
  };

  return (
    <Flex direction="column" gap="md">
      <Heading>App Settings</Heading>
      <Text>
        Configure settings for {context.extension?.appName ?? 'this app'}.
        Logged in as {context.user.firstName} {context.user.lastName} (Portal{' '}
        {context.portal.id}).
      </Text>

      <Divider />

      <Heading>Configuration</Heading>
      <Input
        name="apiKey"
        label="API Key"
        description="Enter your third-party API key"
        onInput={(value) => setApiKey(value)}
      />
      <Button onClick={handleSave} disabled={!apiKey}>
        Save Settings
      </Button>
    </Flex>
  );
};
