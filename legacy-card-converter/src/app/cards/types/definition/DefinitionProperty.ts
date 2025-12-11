import type { PropertyDataType } from '../PropertyDataType';
import { StatusOptionTypeValue } from '../StatusOptionType';

export interface StatusPropertyOption {
  name: string;
  label: string;
  type: StatusOptionTypeValue;
}

interface BaseProperty {
  name: string;
  label: string;
}

interface GenericProperty extends BaseProperty {
  dataType: Exclude<PropertyDataType, 'STATUS'>;
  // only status properties have an options array. It's an empty array for all other props
  options: never[];
}
interface StatusProperty extends BaseProperty {
  dataType: Extract<PropertyDataType, 'STATUS'>;
  options: StatusPropertyOption[];
}

export type DefinitionProperty = GenericProperty | StatusProperty;
