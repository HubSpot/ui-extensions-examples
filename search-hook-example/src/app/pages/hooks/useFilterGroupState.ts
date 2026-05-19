import { useState, useCallback } from "react";
import type { CrmFilter, CrmFilterGroup } from "../types";
import { emptyFormState, toFilter, type FilterFormState } from "../utils/filterForm";

export const useFilterGroupState = (
  filterGroups: CrmFilterGroup[],
  onChange: (groups: CrmFilterGroup[]) => void
) => {
  const [addFormStates, setAddFormStates] = useState<Record<string, FilterFormState>>({});
  const [editFormStates, setEditFormStates] = useState<Record<string, FilterFormState>>({});

  const getAddFormState = (modalId: string): FilterFormState =>
    addFormStates[modalId] ?? emptyFormState();

  const getEditFormState = (filterId: string): FilterFormState =>
    editFormStates[filterId] ?? emptyFormState();

  const setAddFormState = useCallback(
    (modalId: string, updater: FilterFormState | ((prev: FilterFormState) => FilterFormState)) =>
      setAddFormStates((prev) => ({
        ...prev,
        [modalId]: typeof updater === 'function' ? updater(prev[modalId] ?? emptyFormState()) : updater,
      })),
    []
  );

  const setEditFormState = useCallback(
    (filterId: string, updater: FilterFormState | ((prev: FilterFormState) => FilterFormState)) =>
      setEditFormStates((prev) => ({
        ...prev,
        [filterId]: typeof updater === 'function' ? updater(prev[filterId] ?? emptyFormState()) : updater,
      })),
    []
  );

  const addFilter = useCallback(
    (groupIndex: number, filter: CrmFilter) => {
      const updated = [...filterGroups];
      updated[groupIndex] = {
        ...updated[groupIndex],
        filters: [...updated[groupIndex].filters, filter],
      };
      onChange(updated);
    },
    [filterGroups, onChange]
  );

  const updateFilter = useCallback(
    (groupIndex: number, filterIndex: number, filter: CrmFilter) => {
      const updated = [...filterGroups];
      const newFilters = [...updated[groupIndex].filters];
      newFilters[filterIndex] = filter;
      updated[groupIndex] = { ...updated[groupIndex], filters: newFilters };
      onChange(updated);
    },
    [filterGroups, onChange]
  );

  const removeFilter = useCallback(
    (groupIndex: number, filterIndex: number) => {
      const filterId = filterGroups[groupIndex].filters[filterIndex].id;
      setEditFormStates((prev) => {
        const next = { ...prev };
        delete next[filterId];
        return next;
      });
      const updated = [...filterGroups];
      const newFilters = updated[groupIndex].filters.filter((_, i) => i !== filterIndex);
      if (newFilters.length === 0) {
        const groupId = filterGroups[groupIndex].id;
        setAddFormStates((prev) => {
          const next = { ...prev };
          delete next[`add-filter-${groupId}`];
          return next;
        });
        onChange(updated.filter((_, i) => i !== groupIndex));
      } else {
        updated[groupIndex] = { ...updated[groupIndex], filters: newFilters };
        onChange(updated);
      }
    },
    [filterGroups, onChange]
  );

  const removeGroup = useCallback(
    (groupIndex: number) => {
      const group = filterGroups[groupIndex];
      const filterIds = group.filters.map((f) => f.id);
      const groupId = group.id;
      setAddFormStates((prev) => {
        const next = { ...prev };
        delete next[`add-filter-${groupId}`];
        return next;
      });
      setEditFormStates((prev) => {
        const next = { ...prev };
        filterIds.forEach((id) => delete next[id]);
        return next;
      });
      onChange(filterGroups.filter((_, i) => i !== groupIndex));
    },
    [filterGroups, onChange]
  );

  const handleAddFilterSubmit = (groupIndex: number, groupId: string) => {
    const modalId = `add-filter-${groupId}`;
    const filter = toFilter(getAddFormState(modalId));
    if (filter) {
      addFilter(groupIndex, filter);
      setAddFormState(modalId, emptyFormState());
    }
  };

  const handleAddFilterGroupSubmit = () => {
    const modalId = 'add-filter-group-modal';
    const filter = toFilter(getAddFormState(modalId));
    if (filter) {
      onChange([...filterGroups, { id: crypto.randomUUID(), filters: [filter] }]);
      setAddFormState(modalId, emptyFormState());
    }
  };

  const handleEditFilterSubmit = (groupIndex: number, filterIndex: number) => {
    const filterId = filterGroups[groupIndex].filters[filterIndex].id;
    const filter = toFilter(getEditFormState(filterId));
    if (filter) {
      updateFilter(groupIndex, filterIndex, { ...filter, id: filterId });
      setEditFormState(filterId, emptyFormState());
    }
  };

  return {
    getAddFormState,
    getEditFormState,
    setAddFormState,
    setEditFormState,
    handleAddFilterSubmit,
    handleAddFilterGroupSubmit,
    handleEditFilterSubmit,
    removeFilter,
    removeGroup,
  };
};
