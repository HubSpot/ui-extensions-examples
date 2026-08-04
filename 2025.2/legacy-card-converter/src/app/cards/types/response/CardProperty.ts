import type { PropertyDataType } from '../PropertyDataType';
import type { StatusOptionTypeValue } from '../StatusOptionType';

export interface BaseProperty {
  label: string;
  name?: string;
  value: string | number;
}

export interface StringProperty extends BaseProperty {
  dataType: Extract<PropertyDataType, 'STRING'>;
}

export interface StatusProperty extends BaseProperty {
  dataType: Extract<PropertyDataType, 'STATUS'>;
  optionType?: StatusOptionTypeValue;
}

export interface NumericProperty extends BaseProperty {
  dataType: Extract<PropertyDataType, 'NUMERIC'>;
}

export interface DateTimeProperty extends BaseProperty {
  dataType: Extract<PropertyDataType, 'DATETIME'>;
}

export interface DateProperty extends BaseProperty {
  dataType: Extract<PropertyDataType, 'DATE'>;
}

export interface LinkProperty extends BaseProperty {
  dataType: Extract<PropertyDataType, 'LINK'>;
  linkLabel?: string;
}

export interface CurrencyProperty extends BaseProperty {
  dataType: Extract<PropertyDataType, 'CURRENCY'>;
  currencyCode?: string;
}

export interface EmailProperty extends BaseProperty {
  dataType: Extract<PropertyDataType, 'EMAIL'>;
}

export type CardProperty =
  | StringProperty
  | StatusProperty
  | NumericProperty
  | DateTimeProperty
  | DateProperty
  | LinkProperty
  | CurrencyProperty
  | EmailProperty;
