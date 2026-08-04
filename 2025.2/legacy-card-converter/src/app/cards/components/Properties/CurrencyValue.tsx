import { Text } from '@hubspot/ui-extensions';

import { formatCurrency } from '../../utils/propertyFormatters';

export interface CurrencyValueProps {
  value: string | number;
  currencyCode?: string;
  locale?: string;
  testId?: string;
}

export function CurrencyValue({
  value,
  currencyCode,
  locale,
  testId,
}: CurrencyValueProps) {
  return (
    <Text inline={true} testId={testId}>
      {formatCurrency(value, currencyCode, locale)}
    </Text>
  );
}
