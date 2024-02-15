import {
  Button,
  ButtonRow,
  Flex,
  Heading,
  Table,
  TableRow,
  TableCell,
  Text,
  TextArea,
  TableBody,
} from '@hubspot/ui-extensions';
import React, { useState } from 'react';
import type { CheckoutProps } from '../types';

export const Checkout = ({
  onCheckoutClick
}: CheckoutProps) => {
  const [message, setMessage] = useState('');

  return (
  <Flex direction="column" gap="sm">
      <TextArea
        required={true}
        name="message"
        label="Leave a message"
        onInput={setMessage}
        validationMessage={
          !message ? 'Please add a nice message for your contact.' : ''
        }
      />
      <ButtonRow>
        <Button
          disabled={!message}
          variant="primary"
          onClick={() => {
            onCheckoutClick(message);
          }}
        >
          Place order
        </Button>
      </ButtonRow>
    </Flex>
  );
};
