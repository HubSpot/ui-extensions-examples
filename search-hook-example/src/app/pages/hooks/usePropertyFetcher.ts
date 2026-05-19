import { useState, useEffect, useMemo } from "react";
import { hubspot, logger } from "@hubspot/ui-extensions";
import { getDefaults, getDefaultPropLabels } from "../utils/objectTypes";
import type { PropertyInfo, PropertyOption } from "../types";

export const usePropertyFetcher = (objectType: string) => {
  const [availableProperties, setAvailableProperties] = useState<PropertyInfo[]>([]);
  const [propertiesLoading, setPropertiesLoading] = useState(false);
  const [propertyFetchError, setPropertyFetchError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProperties = async () => {
      setPropertiesLoading(true);
      setPropertyFetchError(null);
      try {
        const result = await hubspot.serverless('search_hook_app_function', {
          parameters: { objectType },
        });
        if (controller.signal.aborted) return;
        if (result.error) {
          logger.error(`Error fetching properties: ${result.error}`);
          setPropertyFetchError(new Error(result.error));
        } else if (result.properties) {
          setAvailableProperties(result.properties);
        }
      } catch (e) {
        if (!controller.signal.aborted) {
          logger.error(`Error fetching properties: ${e}`);
          setPropertyFetchError(e instanceof Error ? e : new Error(String(e)));
        }
      } finally {
        if (!controller.signal.aborted) {
          setPropertiesLoading(false);
        }
      }
    };
    fetchProperties();
    return () => controller.abort();
  }, [objectType]);

  const propertyOptions: PropertyOption[] = useMemo(
    () =>
      propertiesLoading
        ? getDefaults(objectType).map((p) => ({ label: p.label, value: p.name }))
        : availableProperties.map((p) => ({ label: p.label, value: p.name })),
    [propertiesLoading, objectType, availableProperties]
  );

  const propertyLabels: Record<string, string> = useMemo(
    () => ({
      ...getDefaultPropLabels(objectType),
      ...Object.fromEntries(availableProperties.map((p) => [p.name, p.label])),
    }),
    [objectType, availableProperties]
  );

  return { propertiesLoading, propertyOptions, propertyLabels, propertyFetchError };
};
