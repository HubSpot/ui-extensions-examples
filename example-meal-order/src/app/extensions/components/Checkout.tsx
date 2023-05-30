import {
  Button,
  ButtonRow,
  Divider,
  Heading,
  Stack,
  Text,
  Textarea,
} from '@hubspot/ui-extensions';
import React, { useState } from 'react';
import { CheckoutProps } from '../types';
import { formatPrice } from '../utils';

export const Checkout = ({
  deliveryCost,
  subtotal,
  onCheckoutClick,
}: CheckoutProps) => {
  const [message, setMessage] = useState('');
  const delivery = deliveryCost || 0;

  return (
    <Stack>
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
      <Textarea
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
    </Stack>
  );
};
