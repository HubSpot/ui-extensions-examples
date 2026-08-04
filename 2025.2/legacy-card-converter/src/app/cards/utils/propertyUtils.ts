import type { CardConfig, PropertyDataType } from '../types';
import type {
  CardObject,
  CardProperty,
  StatusProperty,
} from '../types/response';

const defaultExcluded = new Set<string>([
  'objectId',
  'title',
  'actions',
  'properties',
  'link',
]);
/**
 * Converts object key-value pairs to CardProperty array
 */
export const convertObjectToProperties = (
  obj: CardObject,
  config: CardConfig,
  excludePropertyNames: Set<string> = new Set()
): CardProperty[] => {
  const exclusionList = new Set<string>([
    ...excludePropertyNames,
    ...defaultExcluded,
  ]);
  return Object.entries(obj)
    .filter(
      ([key, value]) =>
        !exclusionList.has(key) &&
        value !== undefined &&
        value !== null &&
        config.getPropertyDefinition(key) !== undefined
    )
    .map(([key, value]) => {
      // we know it's defined
      const propDefinition = config.getPropertyDefinition(key)!;

      const label = propDefinition.label;
      const dataType = propDefinition.dataType.toUpperCase();

      const property: CardProperty = {
        name: key,
        label,
        dataType: dataType as PropertyDataType,
        value: String(value),
      };

      if (dataType === 'STATUS') {
        const valueForLookup =
          typeof value === 'string' || typeof value === 'number'
            ? value
            : String(value);
        const statusProp = config.getStatusProperty({
          parentPropertyName: key,
          statusPropertyName: valueForLookup,
        });
        if (statusProp) {
          (property as StatusProperty).optionType = statusProp.type;
        }
      }

      return property;
    });
};
