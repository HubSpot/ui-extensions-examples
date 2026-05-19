import type { SortState } from "../types";

export const buildSortState = (properties: string[], idColumn = 'objectId'): SortState =>
  [idColumn, ...properties].reduce<SortState>(
    (acc, prop) => ({ ...acc, [prop]: 'none' }),
    {}
  );

export const mergeSortState = (existing: SortState, newProperties: string[], idColumn = 'objectId'): SortState => {
  const merged: SortState = { [idColumn]: existing[idColumn] ?? 'none' };
  for (const prop of newProperties) {
    merged[prop] = existing[prop] ?? 'none';
  }
  return merged;
};

export const buildSortParam = (sortState: SortState): { propertyName: string; direction: 'ASCENDING' | 'DESCENDING' }[] =>
  Object.entries(sortState)
    .filter((entry): entry is [string, 'ascending' | 'descending'] => entry[1] !== 'none')
    .map(([property, direction]) => ({
      propertyName: property,
      direction: (direction === 'ascending' ? 'ASCENDING' : 'DESCENDING') as 'ASCENDING' | 'DESCENDING',
    }));
