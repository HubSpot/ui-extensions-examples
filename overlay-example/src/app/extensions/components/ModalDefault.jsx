import React from 'react';
import {
  ModalBody,
  ModalFooter,
  Modal,
  Heading,
  Button,
  Input,
  Flex,
  Form,
} from '@hubspot/ui-extensions';

export const ModalDefault = ({ actions }) => {
  return (
    <Modal id="default-modal" title="Contact information">
      <ModalBody>
        <Flex direction="column">
          <Heading>Add details of your customer</Heading>
          <Form>
            <Input label="Enter name" name="name"></Input>
            <Input label="Enter email" name="email"></Input>
          </Form>
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => actions.closeOverlay('default-modal')}>
          Cancel
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={() => actions.closeOverlay('default-modal')}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};
