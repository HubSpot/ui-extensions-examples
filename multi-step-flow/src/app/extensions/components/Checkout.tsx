import {
  Button,
  ButtonRow,
  Divider,
  Flex,
  Heading,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Text,
  TextArea,
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
    <Table>
      <TableRow>
      <TableCell width="min">
        <Heading>
          <Text>Subtotal: {formatPrice(subtotal)}</Text>
          <Text>Delivery fee: {formatPrice(delivery)}</Text>
          </Heading>
        </TableCell>
        </TableRow>
        <TableCell>
        <Heading>
          <Text>TOTAL: {formatPrice(subtotal + delivery)}</Text>
        </Heading>
      </TableCell>
      </Table>

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
          Place order
        </Button>
      </ButtonRow>
    </Flex>
  );
};
