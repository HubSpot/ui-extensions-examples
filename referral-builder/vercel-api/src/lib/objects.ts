import { hsPost } from "./hubspot";

export async function batchRead(objectType: string, ids: string[], properties?: string[]) {
  if (!ids.length) return [];

  const body: any = {
    inputs: ids.map((id) => ({ id: String(id) })),
  };
  if (properties?.length) body.properties = properties;

  const data: any = await hsPost(`/crm/v3/objects/${encodeURIComponent(objectType)}/batch/read`, body);
  return data?.results || [];
}
