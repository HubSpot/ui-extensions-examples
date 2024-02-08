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
// import { formatPrice } from '../utils';

export const Checkout = ({
  // deliveryCost,
  // subtotal,
  onCheckoutClick
}: CheckoutProps) => {
  const [message, setMessage] = useState('');
  // const delivery = deliveryCost || 0;

  return (
  <Flex direction="column" gap="sm">
    {/* <Table>
      <TableBody>
        <TableRow>
          <TableCell width="min">
            <Flex direction="column" gap="sm">
              <Text format={{ fontWeight: 'bold' }}>
                Subtotal: {formatPrice(subtotal)}
              </Text>
              <Text format={{ fontWeight: 'bold' }}>
                Delivery fee: {formatPrice(delivery)}
              </Text>
            </Flex>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Text format={{ fontWeight: 'bold' }}>
              TOTAL: {formatPrice(subtotal + delivery)}
            </Text>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table> */}

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
