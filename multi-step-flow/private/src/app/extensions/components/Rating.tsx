import React from 'react';
import { Text } from '@hubspot/ui-extensions';
import type { RatingProps } from '../types';

export const Rating = ({ value }: RatingProps) => {
  return (
    <Text>
      {Array.from(Array(value))
        .map(() => '⭑')
        .join('')}
    </Text>
  );
};
