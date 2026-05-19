export type FilterType = 'property' | 'association';

export interface CrmFilter {
  id: string;
  filterType: FilterType;
  propertyName: string;
  operator: string;
  value?: string;
  highValue?: string;
  values?: string[];
  // For display only — not sent to the API
  displayValue?: string;
}

export interface CrmFilterGroup {
  id: string;
  filters: CrmFilter[];
}

export type SortDirection = 'ascending' | 'descending' | 'none';

export type SortState = Record<string, SortDirection>;

export interface PropertyInfo {
  name: string;
  label: string;
  type: string;
  groupName: string;
}

export interface PropertyOption { label: string; value: string }

export interface DefaultProp { name: string; label: string }

export interface CrmSearchResult {
  objectId: number;
  properties: Record<string, string | null>;
}

export interface PaginationState {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage: () => void;
  previousPage: () => void;
  reset: () => void;
}
