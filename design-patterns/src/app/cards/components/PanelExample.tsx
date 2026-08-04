import React from 'react';
import {
  Button,
  Flex,
  Input,
  Panel,
  PanelSection,
  PanelBody,
  PanelFooter,
  Text,
} from '@hubspot/ui-extensions';

export const PanelExample = ({ actions }) => {
  return (
    <Panel id="default-panel" title="Dialog Header">
      <PanelBody>
        <PanelSection>
          <Text>
            When we get all the 0's and 1's line up, a link will show in your{' '}
            <Text
              inline={true}
              format={{ fontWeight: 'bold', lineDecoration: 'underline' }}
            >
              Notification Center
            </Text>
            . Also, just to be sure, you're gonna get a confirmation email.
          </Text>
        </PanelSection>
        <PanelSection>
          <Input label="Label *" name="label" placeholder="Placeholder" />
          <Input label="Label *" name="label" placeholder="Placeholder" />
          <Input label="Label" name="label" placeholder="Placeholder" />
          <Input
            label="Label"
            name="label"
            description="Description"
            placeholder="Placeholder"
          />
        </PanelSection>
      </PanelBody>
      <PanelFooter>
        <Flex direction="row" gap="small">
          <Button
            variant="primary"
            type="submit"
            onClick={() => actions.closeOverlay('default-panel')}
          >
            Create
          </Button>
          <Button onClick={() => actions.closeOverlay('default-panel')}>
            Cancel
          </Button>
        </Flex>
      </PanelFooter>
    </Panel>
  );
};
