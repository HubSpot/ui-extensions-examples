import {
  Button,
  ButtonRow,
  Divider,
  Flex,
  Heading,
  Text,
  TextArea
} from '@hubspot/ui-extensions';
import React, { useState } from 'react';
import type { CheckoutProps } from '../types';
import { formatPrice } from '../utils';

export const Checkout = ({
  deliveryCost,
  subtotal,
  onCheckoutClick
}: CheckoutProps) => {
  const [message, setMessage] = useState('');
  const delivery = deliveryCost || 0;

  return (
    <Flex direction="column" gap="sm">
      <Heading>
        <Text format={{ fontWeight: 'demibold' }}>
          Subtotal: {formatPrice(subtotal)}
        </Text>
        <Text format={{ fontWeight: 'demibold' }}>
          Delivery: {formatPrice(delivery)}
        </Text>
        <Divider />
        <Text format={{ fontWeight: 'bold' }}>
          Total: {formatPrice(subtotal + delivery)}
        </Text>
      </Heading>
      <TextArea
        required={true}
        name="message"
        label="Message"
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
          Checkout
        </Button>
      </ButtonRow>
    </Flex>
  );
};
