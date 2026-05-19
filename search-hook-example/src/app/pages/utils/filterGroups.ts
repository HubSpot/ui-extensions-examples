import type { CrmFilterGroup } from "../types";
import { getOperatorConfig } from "../constants/operators";

export interface HookFilter {
  propertyName: string;
  operator: string;
  value?: string;
  highValue?: string;
  values?: string[];
}

export interface HookFilterGroup {
  filters: HookFilter[];
}

// Converts internal filter state to the shape useCrmSearch expects
export const toHookFilterGroups = (groups: CrmFilterGroup[]): HookFilterGroup[] =>
  groups
    .filter((g) => g.filters.length > 0)
    .map((g) => ({
      filters: g.filters.map((f) => {
        const filter: HookFilter = {
          propertyName: f.propertyName,
          operator: f.operator,
        };
        const config = getOperatorConfig(f.operator);
        if (config?.fields.includes('value') && f.value !== undefined) filter.value = f.value;
        if (config?.fields.includes('highValue') && f.highValue !== undefined) filter.highValue = f.highValue;
        if (config?.fields.includes('values') && f.values !== undefined) filter.values = f.values;
        return filter;
      }),
    }));
