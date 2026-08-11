import { Text } from '@hubspot/ui-extensions';

import { formatDateTime } from '../../utils/propertyFormatters';

export interface DateTimeValueProps {
  value: string | number;
  locale?: string;
  timezone?: string;
  testId?: string;
}

export function DateTimeValue({
  value,
  locale,
  timezone,
  testId,
}: DateTimeValueProps) {
  return (
    <Text inline={true} testId={testId}>
      {formatDateTime(value, locale, timezone)}
    </Text>
  );
}
