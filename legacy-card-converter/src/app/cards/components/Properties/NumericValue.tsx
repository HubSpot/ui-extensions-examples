import { Text } from '@hubspot/ui-extensions';
import React from 'react';

import { formatNumeric } from '../../utils/propertyFormatters';

export interface NumericValueProps {
  value: string | number;
  locale?: string;
  testId?: string;
}

export function NumericValue({ value, locale, testId }: NumericValueProps) {
  return (
    <Text inline={true} testId={testId}>
      {formatNumeric(value, locale)}
    </Text>
  );
}
