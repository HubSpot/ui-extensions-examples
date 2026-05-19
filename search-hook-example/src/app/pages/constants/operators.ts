import type { FilterType } from "../types.ts";

export const FILTER_TYPE_OPTIONS: { label: string; value: FilterType }[] = [
  { label: 'Property', value: 'property' },
  { label: 'Association', value: 'association' },
];

export type OperatorFieldRequirement = 'value' | 'highValue' | 'values';

export interface OperatorConfig {
  label: string;
  value: string;
  fields: OperatorFieldRequirement[];
  description: string;
}

export const OPERATORS: OperatorConfig[] = [
  { label: 'Equals', value: 'EQ', fields: ['value'], description: 'Equal to value' },
  { label: 'Not Equal', value: 'NEQ', fields: ['value'], description: 'Not equal to value' },
  { label: 'Less Than', value: 'LT', fields: ['value'], description: 'Less than value' },
  { label: 'Less Than or Equal', value: 'LTE', fields: ['value'], description: 'Less than or equal to value' },
  { label: 'Greater Than', value: 'GT', fields: ['value'], description: 'Greater than value' },
  { label: 'Greater Than or Equal', value: 'GTE', fields: ['value'], description: 'Greater than or equal to value' },
  { label: 'Between', value: 'BETWEEN', fields: ['value', 'highValue'], description: 'Between two values (inclusive)' },
  { label: 'In', value: 'IN', fields: ['values'], description: 'Matches any value (comma-separated)' },
  { label: 'Not In', value: 'NOT_IN', fields: ['values'], description: 'Matches none of the values (comma-separated)' },
  { label: 'Has Property', value: 'HAS_PROPERTY', fields: [], description: 'Property has any value set' },
  { label: 'Not Has Property', value: 'NOT_HAS_PROPERTY', fields: [], description: 'Property has no value set' },
  { label: 'Contains Token', value: 'CONTAINS_TOKEN', fields: ['value'], description: 'Contains token (supports * wildcard)' },
  { label: 'Not Contains Token', value: 'NOT_CONTAINS_TOKEN', fields: ['value'], description: 'Does not contain token' },
];

export const OPERATOR_OPTIONS = OPERATORS.map((o) => ({ label: `${o.label} (${o.value})`, value: o.value }));

export const getOperatorConfig = (operator: string): OperatorConfig | undefined =>
  OPERATORS.find((o) => o.value === operator);
