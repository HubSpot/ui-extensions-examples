import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  TableCell,
  TableRow,
  Text
} from '@hubspot/ui-extensions';
import React from 'react';
import type { CartItemRowProps } from '../types';
import { formatPrice, capitalizeFirstLetter } from '../utils';

export const CartItemRow = ({ item, onRemoveClick }: CartItemRowProps) => {
  return (
    <Flex gap='md'>
      <Box flex={2}>
        <Text format={{ fontWeight: 'bold' }}>{item.name}</Text>
      </Box>
      <Box flex={8}>
        <Flex justify='around'>
          <Box flex={6}>
            <Text>
              {item.bases && capitalizeFirstLetter(item.bases.join(', '))}
              {item.bases && (item.toppings || item.premiums || item.dressing) && ', '}
              {item.toppings && capitalizeFirstLetter(item.toppings.join(', '))}
              {item.toppings && (item.premiums || item.dressing) && ', '}
              {item.premiums && capitalizeFirstLetter(item.premiums.join(', '))}
              {item.premiums && item.dressing && ', '}
              {item.dressing && capitalizeFirstLetter(item.dressing)}.
            </Text>
          </Box>
          <Box flex={1}>
            <Text>{formatPrice(item.price)}</Text>
          </Box>
          <Box flex={1}>
            <Button size='xs' onClick={onRemoveClick}>Remove</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
