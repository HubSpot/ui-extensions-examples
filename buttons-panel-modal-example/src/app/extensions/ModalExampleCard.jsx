import React from 'react';
import { Button, hubspot } from '@hubspot/ui-extensions';
import { ModalExample } from './components/ModalExample';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ actions }) => <ModalExampleCard actions={actions} />);

const ModalExampleCard = ({ actions }) => {
  return (
    <Button overlay={<ModalExample actions={actions} />}>Open Modal</Button>
  );
};
