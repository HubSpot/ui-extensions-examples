import { Text } from '@hubspot/ui-extensions';
import React from 'react';

export interface StringValueProps {
  value: string | number;
  testId?: string;
}

export function StringValue({ value, testId }: StringValueProps) {
  return (
    <Text inline={true} testId={testId}>
      {value}
    </Text>
  );
}
