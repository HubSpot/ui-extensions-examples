import {
  Flex,
  Input,
  Select,
  Text,
} from "@hubspot/ui-extensions";
import ObjectSearchSelect from "./ObjectSearchSelect";
import {
  FILTER_TYPE_OPTIONS,
  getOperatorConfig,
  OPERATOR_OPTIONS,
} from "../constants/operators";
import { ASSOCIATION_OBJECT_TYPES } from "../constants/associations";
import type { PropertyOption } from "../types";
import type { FilterFormState } from "../utils/filterForm";

const FilterForm = ({
  formState,
  setFormState,
  availableProperties,
}: {
  formState: FilterFormState;
  setFormState: (s: FilterFormState | ((prev: FilterFormState) => FilterFormState)) => void;
  availableProperties: PropertyOption[];
}) => {
  const config = getOperatorConfig(formState.operator);
  const isAssociation = formState.filterType === 'association';

  return (
    <Flex direction="column" gap="sm">
      <Select
        label="Type"
        options={FILTER_TYPE_OPTIONS}
        value={formState.filterType}
        onChange={(val: string | number | boolean) => {
          const newType = `${val}` as FilterFormState['filterType'];
          setFormState((prev) => ({
            ...prev,
            filterType: newType,
            operator: newType === 'association' ? 'EQ' : prev.operator,
            propertyName: '',
            value: '',
          }));
        }}
      />

      {isAssociation ? (
        <>
          <Select
            label="Object Type"
            options={ASSOCIATION_OBJECT_TYPES}
            value={formState.associationObjectType}
            onChange={(val: string | number | boolean) =>
              setFormState((prev) => ({ ...prev, associationObjectType: `${val}`, value: '' }))
            }
          />
          <ObjectSearchSelect
            objectType={formState.associationObjectType}
            selectedValue={formState.value}
            onSelect={(objectId, displayLabel) =>
              setFormState((prev) => ({ ...prev, value: objectId, displayValue: displayLabel }))
            }
          />
        </>
      ) : (
        <>
          <Select
            label="Property Name"
            description={`${availableProperties.length} properties available`}
            placeholder="Search for a property..."
            options={availableProperties}
            value={formState.propertyName}
            onChange={(val: string | number | boolean) => setFormState((prev) => ({ ...prev, propertyName: `${val}` }))}
          />
          <Select
            label="Operator"
            options={OPERATOR_OPTIONS}
            value={formState.operator}
            onChange={(val: string | number | boolean) => setFormState((prev) => ({ ...prev, operator: `${val}` }))}
          />
          {config?.fields.includes('value') && (
            <Input
              label="Value"
              name="filter-value"
              value={formState.value}
              onInput={(val: string) => setFormState((prev) => ({ ...prev, value: val }))}
              placeholder={formState.operator === 'CONTAINS_TOKEN' ? 'e.g. *@hubspot.com' : ''}
            />
          )}
          {config?.fields.includes('highValue') && (
            <Input
              label="High Value"
              name="filter-high-value"
              value={formState.highValue}
              onInput={(val: string) => setFormState((prev) => ({ ...prev, highValue: val }))}
            />
          )}
          {config?.fields.includes('values') && (
            <Input
              label="Values (comma-separated)"
              name="filter-values"
              value={formState.valuesRaw}
              onInput={(val: string) => setFormState((prev) => ({ ...prev, valuesRaw: val }))}
              placeholder="value1, value2, value3"
            />
          )}
          {config && config.fields.length === 0 && (
            <Text format={{ italic: true }}>{config.description}</Text>
          )}
        </>
      )}
    </Flex>
  );
};

export default FilterForm;
