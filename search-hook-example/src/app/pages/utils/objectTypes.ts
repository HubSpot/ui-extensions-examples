import { OBJECT_TYPE_CONFIGS } from "../constants/objectTypes";
import type { DefaultProp } from "../types";

export const OBJECT_TYPES = OBJECT_TYPE_CONFIGS.map(({ label, value }) => ({ label, value }));

const DEFAULT_PROPERTIES: Record<string, DefaultProp[]> =
  Object.fromEntries(OBJECT_TYPE_CONFIGS.map(({ value, defaultProperties }) => [value, defaultProperties]));

export const getDefaults = (objectType: string): DefaultProp[] => DEFAULT_PROPERTIES[objectType] ?? [];

export const getDefaultPropNames = (objectType: string): string[] =>
  getDefaults(objectType).map((p) => p.name);

export const getDefaultPropLabels = (objectType: string): Record<string, string> =>
  Object.fromEntries(getDefaults(objectType).map((p) => [p.name, p.label]));
