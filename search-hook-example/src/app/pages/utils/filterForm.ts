import type { CrmFilter, FilterType } from "../types.ts";
import { ASSOCIATION_OBJECT_TYPES } from "../constants/associations";
import { getOperatorConfig } from "../constants/operators";

export interface FilterFormState {
  filterType: FilterType;
  propertyName: string;
  operator: string;
  value: string;
  highValue: string;
  valuesRaw: string;
  associationObjectType: string;
  displayValue: string;
}

export const emptyFormState = (): FilterFormState => ({
  filterType: 'property',
  propertyName: '',
  operator: 'EQ',
  value: '',
  highValue: '',
  valuesRaw: '',
  associationObjectType: ASSOCIATION_OBJECT_TYPES[0]?.value ?? 'contact',
  displayValue: '',
});

export const fromCrmFilter = (filter: CrmFilter): FilterFormState => ({
  filterType: filter.filterType,
  propertyName: filter.filterType === 'association'
    ? ''
    : filter.propertyName,
  operator: filter.operator,
  value: filter.value ?? '',
  highValue: filter.highValue ?? '',
  valuesRaw: filter.values?.join(', ') ?? '',
  associationObjectType: filter.filterType === 'association'
    ? filter.propertyName.replace('associations.', '')
    : ASSOCIATION_OBJECT_TYPES[0]?.value ?? 'contact',
  displayValue: filter.displayValue ?? '',
});

export const toFilter = (form: FilterFormState): CrmFilter | null => {
  const config = getOperatorConfig(form.operator);
  if (!config) return null;

  if (form.filterType === 'property' && !form.propertyName) return null;

  const filter: CrmFilter = {
    id: crypto.randomUUID(),
    filterType: form.filterType,
    propertyName: form.filterType === 'association'
      ? `associations.${form.associationObjectType}`
      : form.propertyName,
    operator: form.operator,
  };

  if (config.fields.includes('value') && form.value) filter.value = form.value;
  if (config.fields.includes('highValue') && form.highValue) filter.highValue = form.highValue;
  if (config.fields.includes('values') && form.valuesRaw) {
    filter.values = form.valuesRaw.split(',').map((v) => v.trim()).filter(Boolean);
  }
  if (form.displayValue) filter.displayValue = form.displayValue;
  return filter;
};
