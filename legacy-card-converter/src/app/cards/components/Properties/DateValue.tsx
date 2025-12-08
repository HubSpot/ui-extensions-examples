import { Text } from '@hubspot/ui-extensions';

import { formatDate } from '../../utils/propertyFormatters';

export interface DateValueProps {
  value: string | number;
  locale?: string;
  testId?: string;
}

export function DateValue({ value, locale, testId }: DateValueProps) {
  return (
    <Text inline={true} testId={testId}>
      {formatDate(value, locale)}
    </Text>
  );
}
