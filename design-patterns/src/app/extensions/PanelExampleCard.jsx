import React from 'react';
import { Button, hubspot } from '@hubspot/ui-extensions';
import { PanelExample } from './components/PanelExample';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ actions }) => <PanelExampleCard actions={actions} />);

const PanelExampleCard = ({ actions }) => {
  return (
    <Button overlay={<PanelExample actions={actions} />}>Open Panel</Button>
  );
};
