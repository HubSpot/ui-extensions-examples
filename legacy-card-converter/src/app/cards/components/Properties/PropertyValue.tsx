import { Text } from '@hubspot/ui-extensions';

import type { CardProperty } from '../../types/response';
import { CurrencyValue } from './CurrencyValue';
import { DateTimeValue } from './DateTimeValue';
import { DateValue } from './DateValue';
import { EmailValue } from './EmailValue';
import { LinkValue } from './LinkValue';
import { NumericValue } from './NumericValue';
import { StatusValue } from './StatusValue';
import { StringValue } from './StringValue';

export interface PropertyValueProps {
  property: CardProperty;
  locale?: string;
  timezone?: string;
}

function renderValue(
  property: CardProperty,
  locale?: string,
  timezone?: string
) {
  const normalizedProperty = {
    ...property,
    dataType: property.dataType.toUpperCase(),
  } as CardProperty;

  const displayValueTestId = property.name
    ? `propertyDisplayValue-${property.name}`
    : `propertyDisplayValue-${property.label.replace(/\s+/g, '-').toLowerCase()}`;

  const dataType = normalizedProperty.dataType;

  switch (dataType) {
    case 'CURRENCY':
      return (
        <CurrencyValue
          value={normalizedProperty.value}
          currencyCode={normalizedProperty.currencyCode}
          locale={locale}
          testId={displayValueTestId}
        />
      );

    case 'EMAIL':
      return (
        <EmailValue
          value={normalizedProperty.value}
          testId={displayValueTestId}
        />
      );

    case 'LINK':
      return (
        <LinkValue
          value={normalizedProperty.value}
          linkLabel={normalizedProperty.linkLabel}
          testId={displayValueTestId}
        />
      );

    case 'DATE':
      return (
        <DateValue
          value={normalizedProperty.value}
          locale={locale}
          testId={displayValueTestId}
        />
      );

    case 'DATETIME':
      return (
        <DateTimeValue
          value={normalizedProperty.value}
          locale={locale}
          timezone={timezone}
          testId={displayValueTestId}
        />
      );

    case 'NUMERIC':
      return (
        <NumericValue
          value={normalizedProperty.value}
          locale={locale}
          testId={displayValueTestId}
        />
      );

    case 'STATUS':
      return (
        <StatusValue
          value={normalizedProperty.value}
          name={normalizedProperty.name}
          optionType={normalizedProperty.optionType}
          testId={displayValueTestId}
        />
      );

    case 'STRING':
    default:
      return (
        <StringValue
          value={normalizedProperty.value}
          testId={displayValueTestId}
        />
      );
  }
}

export function PropertyValue({
  property,
  locale,
  timezone,
}: PropertyValueProps) {
  const labelTestId = property.name
    ? `propertyLabel-${property.name}`
    : `propertyLabel-${property.label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <Text inline={true}>
      <Text testId={labelTestId} format={{ fontWeight: 'bold' }} inline={true}>
        {property.label}:{' '}
      </Text>
      {renderValue(property, locale, timezone)}
    </Text>
  );
}
