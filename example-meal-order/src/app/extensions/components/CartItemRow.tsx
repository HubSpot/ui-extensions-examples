import {
  Button,
  Flex,
  Heading,
  TableCell,
  TableRow
} from '@hubspot/ui-extensions';
import React from 'react';
import type { CartItemRowProps } from '../types';
import { formatPrice } from '../utils';
import { Addons } from './Addons';

export const CartItemRow = ({ item, onRemoveClick }: CartItemRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <Flex direction="column" gap="sm">
          <Heading inline={true}>{item.name}</Heading>
          <Flex gap="xs">
            <Addons label="Bases">{item.bases.join(', ')}</Addons>
            {item.toppings && item.toppings.length > 0 && (
              <Addons label="Toppings">{item.toppings.join(', ')}</Addons>
            )}
            {item.premiums && item.premiums.length > 0 && (
              <Addons label="Premiums">{item.premiums.join(', ')}</Addons>
            )}
            <Addons label="Dressing">{item.dressing}</Addons>
          </Flex>
        </Flex>
      </TableCell>
      <TableCell align="right" width="min">
        {formatPrice(item.price)}
      </TableCell>
      <TableCell>
        <Button onClick={onRemoveClick}>Remove</Button>
      </TableCell>
    </TableRow>
  );
};
