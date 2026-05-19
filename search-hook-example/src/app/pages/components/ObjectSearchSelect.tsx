import { useMemo, useState } from "react";
import { Alert, Select, useDebounce } from "@hubspot/ui-extensions";
import { useCrmSearch } from "@hubspot/ui-extensions";
import { ASSOCIATION_DISPLAY_PROPERTIES, ASSOCIATION_LABEL_CONFIG } from "../constants/associations";
import type { CrmSearchResult } from "../types.ts";

const buildLabel = (result: CrmSearchResult, objectType: string): string => {
  const props = result.properties;
  const config = ASSOCIATION_LABEL_CONFIG[objectType];

  if (!config) {
    const firstPropValue = Object.values(props).find((v) => v && v.trim());
    return firstPropValue || `Record ${result.objectId}`;
  }

  let name = config.nameProps
    .map((p) => props[p])
    .filter(Boolean)
    .join(' ');

  if (config.truncate && name) {
    name = name.slice(0, config.truncate);
  }

  const suffix = config.suffix?.(props) ?? '';

  if (name) return `${name}${suffix}`;
  return `${config.fallback} ${result.objectId}`;
};

const getPropertiesToFetch = (objectType: string): string[] =>
  ASSOCIATION_DISPLAY_PROPERTIES[objectType] ?? ['hs_object_id'];

interface ObjectSearchSelectProps {
  objectType: string;
  onSelect: (objectId: string, displayLabel: string) => void;
  selectedValue?: string;
}

const ObjectSearchSelect = ({ objectType, onSelect, selectedValue }: ObjectSearchSelectProps) => {
  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, 300);

  const propertiesToFetch = useMemo(() => getPropertiesToFetch(objectType), [objectType]);

  const { results, isLoading, error } = useCrmSearch({
    objectType,
    properties: propertiesToFetch,
    query: debouncedSearch,
    pageSize: 20,
  });

  const options: { label: string; value: string }[] = useMemo(
    () => results.map((r: CrmSearchResult) => ({
      label: buildLabel(r, objectType),
      value: `${r.objectId}`,
    })),
    [results, objectType]
  );

  if (error) {
    return <Alert variant="danger" title="Error searching records">{error.message}</Alert>;
  }

  return (
    <Select
      label={isLoading ? `Object Value (searching...)` : 'Object Value'}
      description="Type to search records by name or other properties"
      placeholder="Search for a record..."
      options={options}
      value={selectedValue}
      onChange={(val: string | number | boolean) => {
        const selected = options.find((o) => o.value === `${val}`);
        onSelect(`${val}`, selected?.label ?? `${val}`);
      }}
      onInput={(val: string) => setSearchText(val)}
    />
  );
};

export default ObjectSearchSelect;
