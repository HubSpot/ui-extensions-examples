import { useState, useCallback } from "react";
import type { SortDirection, SortState } from "../types";
import { buildSortState } from "../utils/sort";

export const useSortState = (initialProperties: string[]) => {
  const [sortState, setSortState] = useState<SortState>(() => buildSortState(initialProperties));

  const handleSortChange = useCallback(
    (property: string, sortDirection: SortDirection) => {
      // Default click cycle is none -> descending -> ascending. Override to none -> ascending -> descending
      setSortState((prev) => {
        const overridden =
          prev[property] === 'none' && sortDirection === 'descending'
            ? 'ascending'
            : sortDirection;
        return { ...prev, [property]: overridden };
      });
    },
    []
  );

  const resetSort = useCallback(
    (properties: string[]) => {
      setSortState(buildSortState(properties));
    },
    []
  );

  return { sortState, handleSortChange, resetSort, setSortState };
};
