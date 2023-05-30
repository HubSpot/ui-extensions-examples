import {
  Button,
  Heading,
  Stack,
  TableCell,
  TableRow,
} from '@hubspot/ui-extensions';
import React from 'react';
import { CartItemRowProps } from '../types';
import { formatPrice } from '../utils';
import { Addons } from './Addons';

export const CartItemRow = ({ item, onRemoveClick }: CartItemRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <Stack>
          <Heading inline={true}>{item.name}</Heading>
          <Stack distance="extra-small">
            <Addons label="Bases">{item.bases.join(', ')}</Addons>
            {item.toppings && item.toppings.length > 0 && (
              <Addons label="Toppings">{item.toppings.join(', ')}</Addons>
            )}
            {item.premiums && item.premiums.length > 0 && (
              <Addons label="Premiums">{item.premiums.join(', ')}</Addons>
            )}
            <Addons label="Dressing">{item.dressing}</Addons>
          </Stack>
        </Stack>
      </TableCell>
      <TableCell>{formatPrice(item.price)}</TableCell>
      <TableCell>
        <Button onClick={onRemoveClick}>Remove</Button>
      </TableCell>
    </TableRow>
  );
};
