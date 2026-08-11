import React, { useState } from 'react';
import {
  Button,
  Box,
  Select,
  Tile,
  Text,
  Link,
  Flex,
  hubspot
} from '@hubspot/ui-extensions';
import {
  Setting,
  defaultSettings,
  settingsOptions
} from './enums/flexPlayground';

const FlexPlayground = () => {
  const [settings, setSettings] = useState({ ...defaultSettings });

  const handleSettingChange = (key: string, value: any) => {
    setSettings({ ...settings, [key]: value });
  };

  const handleRestoreDefaultSettings = () => {
    setSettings({ ...defaultSettings });
  };

  const settingsAreDefault = Object.keys(settings).some(
    key => settings[key] !== defaultSettings[key]
  );

  return (
    <Flex direction={'column'} gap="xl">
      <Box>
        <Flex direction={'column'} gap="lg">
          <Text>
            Use this card to explore and try out the{' '}
            <Link
              href={
                'https://developers.hubspot.com/docs/platform/ui-extension-components#layout-flex'
              }
            >
              {'Flex'} component
            </Link>
            .
          </Text>

          <Flex
            justify={settings[Setting.Justify]}
            align={settings[Setting.Align]}
            direction={settings[Setting.Direction]}
            gap={settings[Setting.Gap]}
            wrap={settings[Setting.Wrap]}
          >
            {Array.from({ length: settings[Setting.Tiles] }, (_, i) => (
              <Tile key={i}>
                <Text>{`Tile ${i + 1}`}</Text>
              </Tile>
            ))}
          </Flex>

          <Flex gap={'md'}>
            <Box flex={3}>
              <Select
                label="Justify"
                value={settings[Setting.Justify]}
                onChange={value => handleSettingChange(Setting.Justify, value)}
                options={settingsOptions[Setting.Justify]}
              />
              <Select
                label="Align"
                value={settings[Setting.Align]}
                onChange={value => handleSettingChange(Setting.Align, value)}
                options={settingsOptions[Setting.Align]}
              />
              <Select
                label="Direction"
                value={settings[Setting.Direction]}
                onChange={value =>
                  handleSettingChange(Setting.Direction, value)
                }
                options={settingsOptions[Setting.Direction]}
              />
            </Box>
            <Box flex={3}>
              <Select
                label="Gap"
                value={settings[Setting.Gap]}
                onChange={value => handleSettingChange(Setting.Gap, value)}
                options={settingsOptions[Setting.Gap]}
              />
              <Select
                label="Wrap"
                value={settings[Setting.Wrap]}
                onChange={value => handleSettingChange(Setting.Wrap, value)}
                options={settingsOptions[Setting.Wrap]}
              />
            </Box>
            {/* Added an empty Box component to regulate the space taken up by components. */}
            <Box flex={3}>{''}</Box>
          </Flex>
        </Flex>
      </Box>

      <Box>
        <Button
          onClick={() => {
            handleSettingChange(Setting.Tiles, settings[Setting.Tiles] + 1);
          }}
          variant="primary"
        >
          Add tile
        </Button>
        <Button
          onClick={() => {
            handleSettingChange(Setting.Tiles, settings[Setting.Tiles] - 1);
          }}
          variant="primary"
          disabled={settings[Setting.Tiles] <= 0}
        >
          Remove tile
        </Button>
        <Button
          onClick={handleRestoreDefaultSettings}
          variant="primary"
          disabled={!settingsAreDefault}
        >
          Restore default properties
        </Button>
      </Box>
    </Flex>
  );
};

hubspot.extend(() => <FlexPlayground />);
