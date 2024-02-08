import {
  EmptyState,
  Flex,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Text,
} from '@hubspot/ui-extensions';
import React from 'react';
import type { CartProps } from '../types';
import { CartItemRow } from './CartItemRow';
import { formatPrice } from '../utils';

export const Cart = ({
  cart,
  deliveryCost,
  subtotal,
  onRemoveClick,
}: CartProps) => {
  const delivery = deliveryCost || 0;

  if (!cart.length) {
    return (
      <Flex justify="center">
        <EmptyState
          layout="vertical"
          reverseOrder={true}
          title="Nothing in the cart yet"
        >
          Add some food to send to your contact!
        </EmptyState>
      </Flex>
    );
  }

  return (
    <Flex direction="column" gap="sm">
      <Text format={{ fontWeight: 'bold' }}>Cart</Text>
      <Text format={{ fontWeight: 'bold' }}>Your order</Text>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
            {cart.map(item => (
              <CartItemRow
                item={item}
                key={item.id}
                onRemoveClick={() => onRemoveClick(item.id)}
              />
            ))}
            </TableCell>
          </TableRow>
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
      </Table>
    </Flex>
  );
};
