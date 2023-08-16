import { Text } from '@hubspot/ui-extensions';
import React from 'react';
import type { AddonsProps } from '../types';

export const Addons = ({ label, children }: AddonsProps) => {
  return (
    <Text inline={true}>
      <Text inline={true} format={{ fontWeight: 'demibold' }}>
        {`${label}: `}
      </Text>
      <Text inline={true}>{children}</Text>
    </Text>
  );
};
