import { useState, useEffect } from "react";
import { hubspot } from "@hubspot/ui-extensions";

interface CustomObjectType { label: string; value: string }

export const useCustomObjectTypes = () => {
  const [customObjectTypes, setCustomObjectTypes] = useState<CustomObjectType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchCustomObjects = async () => {
      try {
        const result = await hubspot.serverless('fetch_custom_objects', {});
        if (controller.signal.aborted) return;
        if (result.error) {
          setError(new Error(result.error));
        } else if (result.customObjects) {
          setCustomObjectTypes(result.customObjects);
        }
      } catch (e) {
        if (!controller.signal.aborted) {
          setError(e instanceof Error ? e : new Error('Failed to fetch custom object types'));
        }
      }
    };
    fetchCustomObjects();
    return () => controller.abort();
  }, []);

  return { customObjectTypes, error };
};
