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
  Tag,
  Text,
} from '@hubspot/ui-extensions';

export const ModalExample = ({ actions }) => {
  return (
    <Modal id="default-modal" title="Dialog Header" width="md">
      <ModalBody>
        <Flex direction="column" gap="small">
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
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="primary"
          type="submit"
          onClick={() => actions.closeOverlay('default-modal')}
        >
          Create
        </Button>
        <Button onClick={() => actions.closeOverlay('default-modal')}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
