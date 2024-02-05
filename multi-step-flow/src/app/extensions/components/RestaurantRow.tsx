import React from 'react';
import {
  Heading,
  Button,
  Text,
  TableRow,
  TableCell
} from '@hubspot/ui-extensions';
import type { RestaurantRowProps } from '../types';
import { Rating } from './Rating';

const timeRange = (minutes: number) => `${minutes - 5}-${minutes + 5} min`;

export const RestaurantRow = ({ restaurant, onClick }: RestaurantRowProps) => {
  const {
    name,
    category,
    deliveryCost,
    deliveryInMinutes,
    rating
  } = restaurant;

  return (
    <TableRow>
      <TableCell width="min">
        <Heading>{name}</Heading>
        <Text variant="microcopy">{category}</Text>
        <Rating value={rating} />
      </TableCell>
      <TableCell width="min">
        <Text>{timeRange(deliveryInMinutes)}</Text>
      </TableCell>
      <TableCell width="min">
        <Text>${deliveryCost} delivery</Text>
      </TableCell>
      <TableCell width="min">
        <Button onClick={onClick}>Menu</Button>
      </TableCell>
    </TableRow>
  );
};
