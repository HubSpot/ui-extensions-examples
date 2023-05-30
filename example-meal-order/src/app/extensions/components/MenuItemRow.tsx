import React from 'react';
import {
  Heading,
  Button,
  Text,
  TableRow,
  TableCell,
} from '@hubspot/ui-extensions';
import { MenuItemRowProps } from '../types';
import { formatPrice } from '../utils';

export const MenuItemRow = ({ item, onClick }: MenuItemRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <Heading>{item.name}</Heading>
        <Text variant="microcopy">{item.description}</Text>
      </TableCell>
      <TableCell>
        <Button onClick={onClick}>{formatPrice(item.price)}</Button>
      </TableCell>
    </TableRow>
  );
};
