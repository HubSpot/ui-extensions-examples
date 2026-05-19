import { useState, useMemo, useCallback } from "react";
import { Alert, Box, Divider, Flex, Heading, hubspot, Input, MultiSelect, Select, Text, useDebounce } from "@hubspot/ui-extensions";
import { useCrmSearch } from "@hubspot/ui-extensions";
import { DEFAULT_OBJECT_TYPE } from "./constants/objectTypes";
import { OBJECT_TYPES, getDefaultPropNames } from "./utils/objectTypes";
import { toHookFilterGroups } from "./utils/filterGroups";
import { buildSortState, mergeSortState, buildSortParam } from "./utils/sort";
import type { CrmFilterGroup } from "./types";
import FilterGroupsBuilder from "./components/FilterGroupsBuilder";
import Results from "./components/Results";
import HookUsageDisplay from "./components/HookUsageDisplay";
import { useCustomObjectTypes } from "./hooks/useCustomObjectTypes";
import { usePropertyFetcher } from "./hooks/usePropertyFetcher";
import { useSortState } from "./hooks/useSortState";

const SEARCH_OPTIONS = {
  propertiesToFormat: "all" as const,
  formattingOptions: {
    currency: { addSymbol: true },
    date: { format: 'MM/DD/YYYY' },
  },
} as const;

const initialDefaults = getDefaultPropNames(DEFAULT_OBJECT_TYPE);

hubspot.extend<"home">(() => {
  return <AppHomePage />;
});

const AppHomePage = () => {
  const { customObjectTypes, error: customObjectError } = useCustomObjectTypes();
  const [objectType, setObjectType] = useState(DEFAULT_OBJECT_TYPE);
  const [propertiesToFetch, setPropertiesToFetch] = useState<string[]>(initialDefaults);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGroups, setFilterGroups] = useState<CrmFilterGroup[]>([]);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { propertiesLoading, propertyOptions, propertyLabels, propertyFetchError } = usePropertyFetcher(objectType);
  const { sortState, handleSortChange, resetSort, setSortState } = useSortState(initialDefaults);

  const handleResetSort = useCallback(
    () => resetSort(propertiesToFetch),
    [resetSort, propertiesToFetch]
  );

  const allObjectTypes = useMemo(
    () => [...OBJECT_TYPES, ...customObjectTypes],
    [customObjectTypes]
  );

  const handleObjectTypeChange = useCallback((value: string) => {
    setObjectType(value);
    const defaultProps = getDefaultPropNames(value);
    setPropertiesToFetch(defaultProps);
    setFilterGroups([]);
    setSearchQuery('');
    setSortState(buildSortState(defaultProps));
  }, [setSortState]);

  const handlePropertiesChange = useCallback((values: (string | number | boolean)[]) => {
    const stringValues = values.map(String);
    setPropertiesToFetch(stringValues);
    setSortState((prev) => mergeSortState(prev, stringValues));
  }, [setSortState]);

  const hookFilterGroups = useMemo(
    () => toHookFilterGroups(filterGroups),
    [filterGroups]
  );

  const hookArgs = useMemo(() => ({
    objectType,
    properties: propertiesToFetch,
    sorts: buildSortParam(sortState),
    query: debouncedSearchQuery,
    filterGroups: hookFilterGroups.length > 0 ? hookFilterGroups : undefined,
  }), [objectType, propertiesToFetch, sortState, debouncedSearchQuery, hookFilterGroups]);

  const { results, isLoading, error, pagination, refetch, isRefetching } = useCrmSearch(
    hookArgs,
    SEARCH_OPTIONS
  );

  const resetAll = useCallback(() => {
    handleObjectTypeChange(DEFAULT_OBJECT_TYPE);
    pagination.reset();
  }, [handleObjectTypeChange, pagination]);

  return (
    <Flex direction="column" gap="md">
      <Heading>CRM Search Results</Heading>
      <Flex gap="md">
        <Box flex={1}>
          <Flex direction="column" gap="sm">
            <Text format={{ fontWeight: 'bold' }}>Customize Search Results</Text>
            <Select
              label="Object Type"
              options={allObjectTypes}
              value={objectType}
              onChange={(value: string | number | boolean) => handleObjectTypeChange(`${value}`)}
            />
            {customObjectError && (
              <Alert variant="danger" title="Failed to load custom object types">{customObjectError.message}</Alert>
            )}
            <MultiSelect
              label={propertiesLoading ? "Properties (loading...)" : "Properties"}
              options={propertyOptions}
              value={propertiesToFetch}
              onChange={handlePropertiesChange}
            />
            {propertyFetchError && (
              <Alert variant="danger" title="Failed to load properties">{propertyFetchError.message}</Alert>
            )}
            <Input label="Search Query" name="searchQuery" onInput={setSearchQuery} />
            <Divider />
            <FilterGroupsBuilder
              filterGroups={filterGroups}
              onChange={setFilterGroups}
              availableProperties={propertyOptions}
            />
          </Flex>
        </Box>
        <Box flex={3}>
          <Flex direction="column" gap="sm">
            <Results
              results={results}
              loading={isLoading}
              error={error}
              pagination={pagination}
              refetch={refetch}
              refetching={isRefetching}
              sortState={sortState}
              handleSortChange={handleSortChange}
              resetSort={handleResetSort}
              resetAll={resetAll}
              properties={propertiesToFetch}
              propertyLabels={propertyLabels}
            />
          </Flex>
        </Box>
      </Flex>
      <HookUsageDisplay hookArgs={hookArgs} options={SEARCH_OPTIONS} />
    </Flex>
  );
};
