import React, { useEffect, useState } from 'react';
import {
  hubspot,
  DescriptionList,
  DescriptionListItem,
  Heading,
  Divider,
  Tile,
  Flex,
  Select
} from '@hubspot/ui-extensions';

import { CrmStageTracker, CrmPropertyList } from '@hubspot/ui-extensions/crm';

hubspot.extend<'crm.record.tab'>(({ actions, runServerlessFunction }) => (
  <Extension actions={actions} runServerlessFunction={runServerlessFunction} />
));

const Extension = ({ actions, runServerlessFunction }) => {
  const {
    fetchCrmObjectProperties,
    onCrmPropertiesUpdate,
    refreshObjectProperties
  } = actions;
  const [properties, setProperties] = useState<Record<string, string>>({});
  const [lifecycleStage, setLifecycleStage] = useState<{ options } | null>(
    null
  );

  useEffect(() => {
    fetchCrmObjectProperties(['firstname', 'lastname']).then(properties => {
      setProperties(properties);
    });
  }, []);

  onCrmPropertiesUpdate(['firstname', 'lastname'], properties => {
    setProperties(properties);
  });

  useEffect(() => {
    runServerlessFunction({ name: 'getLifecycleStage' }).then(
      serverlessResponse => {
        if (serverlessResponse.status == 'SUCCESS') {
          setLifecycleStage(serverlessResponse.response);
        }
      }
    );
  }, []);

  const onChange = stage => {
    console.log(stage);
    runServerlessFunction({
      name: 'updateLifecycleStage',
      parameters: { stage },
      propertiesToSend: ['hs_object_id']
    }).then(() => {
      refreshObjectProperties();
    });
  };

  return (
    <>
      <Tile>
        <Heading>Components using properties actions</Heading>
        <Divider />
        <Flex justify="between" direction="column">
          <DescriptionList>
            {Object.entries(properties).map(([key, value]) => (
              <DescriptionListItem label={key}>{value}</DescriptionListItem>
            ))}
          </DescriptionList>
          <Select
            onChange={onChange}
            options={lifecycleStage && lifecycleStage.options}
            label="Lifecycle stage"
            placeholder="Update lifecycle stage"
          />
        </Flex>
      </Tile>

      <Tile>
        <Heading>CRM components</Heading>
        <Divider />
        <Flex justify="between" direction="column">
          <CrmStageTracker />
          <CrmPropertyList properties={['firstname', 'lastname']} />
        </Flex>
      </Tile>
    </>
  );
};
