import { Tag, Text } from '@hubspot/ui-extensions';

import { useCardConfig } from '../../contexts';
import { getStatusVariant } from '../../utils/propertyFormatters';

export interface StatusValueProps {
  value: string | number;
  name?: string;
  optionType?: string;
  testId?: string;
}

export function StatusValue({ value, name, testId }: StatusValueProps) {
  const config = useCardConfig();
  const statusPropFromConfig = config.getStatusProperty({
    parentPropertyName: name,
    statusPropertyName: value,
  });

  if (!statusPropFromConfig) {
    return (
      <Text variant='microcopy' inline={true} testId={testId}>
        Invalid property
      </Text>
    );
  }

  return (
    <Tag
      variant={getStatusVariant(statusPropFromConfig.type)}
      inline={true}
      testId={testId}
    >
      {statusPropFromConfig.label}
    </Tag>
  );
}
