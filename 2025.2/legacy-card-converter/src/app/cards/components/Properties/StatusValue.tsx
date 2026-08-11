import { Tag, Text } from '@hubspot/ui-extensions';

import { useCardConfig } from '../../contexts';
import { getStatusVariant } from '../../utils/propertyFormatters';

export interface StatusValueProps {
  value: string | number;
  name?: string;
  optionType?: string;
  testId?: string;
}

export function StatusValue({ value, name, optionType, testId }: StatusValueProps) {
  const config = useCardConfig();
  const statusPropFromConfig = config.getStatusProperty({
    parentPropertyName: name,
    statusPropertyName: value,
  });

  // For dynamic properties in the response `properties` array, a config lookup
  // isn't possible (no matching name in DEFINITION.json). Use the optionType
  // sent directly in the response as a fallback.
  const variant = statusPropFromConfig
    ? getStatusVariant(statusPropFromConfig.type)
    : optionType
      ? getStatusVariant(optionType)
      : null;

  if (!variant) {
    return (
      <Text variant='microcopy' inline={true} testId={testId}>
        Invalid property
      </Text>
    );
  }

  const label = statusPropFromConfig?.label ?? String(value);

  return (
    <Tag variant={variant} inline={true} testId={testId}>
      {label}
    </Tag>
  );
}
