import React, { useEffect, useState } from 'react';
import {
  hubspot,
  DescriptionList,
  DescriptionListItem,
  Heading,
  Divider,
  Tile,
  Flex,
  Select,
  Text,
} from '@hubspot/ui-extensions';

hubspot.extend<'crm.record.tab'>(({ actions }) => (
  <Extension actions={actions} />
));

const Extension = ({ actions }) => {
  const {
    fetchCrmObjectProperties,
    onCrmPropertiesUpdate,
    refreshObjectProperties,
  } = actions;
  const [properties, setProperties] = useState<Record<string, string>>({});
  const [lifecycleStage, setLifecycleStage] = useState<{ options } | null>(
    null
  );

  useEffect(() => {
    fetchCrmObjectProperties(['firstname', 'lastname']).then((properties) => {
      setProperties(properties);
    });
  }, []);

  onCrmPropertiesUpdate(['firstname', 'lastname'], (properties) => {
    setProperties(properties);
  });

  useEffect(() => {
    hubspot
      .serverless('getLifecycleStage')
      .then((response) => {
        setLifecycleStage(response);
      })
      .catch((err) => {
        console.error(err.message);
        setLifecycleStage(null);
      });
  }, []);

  const onChange = (stage) => {
    console.log(stage);
    hubspot
      .serverless('updateLifecycleStage', {
        parameters: { stage },
        propertiesToSend: ['hs_object_id'],
      })
      .then(() => {
        refreshObjectProperties();
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <>
      <Tile>
        <Flex direction="column" gap="sm">
          <Heading>
            Property refreshed on custom card when changes happen on CRM
          </Heading>
          <Text variant="microcopy">
            The firstname and lastname properties are displayed using
            `fetchCrmObjectProperties`. Custom cards listens for changes made to
            these using `onCrmPropertiesUpdate`, and refreshes the values using
            `refreshObjectProperties` without manual page reload by the user.
            Try to update firstname or lastname from anywhere on the record page
            to see it in action.
          </Text>
          <DescriptionList direction="row">
            {Object.entries(properties).map(([key, value]) => (
              <DescriptionListItem label={key}>
                <Text format={{ fontWeight: 'bold' }}>{value}</Text>
              </DescriptionListItem>
            ))}
          </DescriptionList>
        </Flex>
      </Tile>

      <Tile>
        <Flex direction="column" gap="sm">
          <Heading>
            Property refreshed on CRM pages when changes happen on custom card
          </Heading>
          <Text variant="microcopy">
            The lifecycle stage property below is displayed using HubSpot's
            public API. When you make changes, the card refreshes properties on
            the page using `refreshObjectProperties`, so that users don't have
            to manually reload the page. Change lifecycle stage to see it in
            action.
          </Text>
          <Divider />
          <Select
            onChange={onChange}
            options={lifecycleStage && lifecycleStage.options}
            label="Lifecycle stage"
            placeholder="Update lifecycle stage"
          />
        </Flex>
      </Tile>
    </>
  );
};
