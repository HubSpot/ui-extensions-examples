import React from 'react';
import {
  ModalBody,
  ModalFooter,
  Modal,
  Heading,
  Button,
  Flex,
} from '@hubspot/ui-extensions';

export const ModalDanger = ({ actions }) => {
  return (
    <Modal id="danger-modal" title="Delete contact" variant="danger">
      <ModalBody>
        <Flex direction="column">
          <Heading> Are you sure you want to delete your contact?</Heading>
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => actions.closeOverlay('danger-modal')}>
          Cancel
        </Button>
        <Button
          variant="destructive"
          type="submit"
          onClick={() => actions.closeOverlay('danger-modal')}
        >
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};
