import { hsPost, hsGet } from "./hubspot";

export async function batchRead(objectType: string, ids: string[], properties?: string[]) {
  if (!ids.length) return [];

  const body: any = {
    inputs: ids.map((id) => ({ id: String(id) })),
  };
  if (properties?.length) body.properties = properties;

  const data: any = await hsPost(`/crm/v3/objects/${encodeURIComponent(objectType)}/batch/read`, body);
  return data?.results || [];
}

export async function searchByProperty(
  objectType: string,
  propertyName: string,
  propertyValue: string,
  properties?: string[]
): Promise<any | null> {
  const body: any = {
    filterGroups: [
      {
        filters: [
          {
            propertyName,
            operator: "EQ",
            value: propertyValue,
          },
        ],
      },
    ],
    properties: properties || [],
    limit: 1,
  };

  const data: any = await hsPost(`/crm/v3/objects/${encodeURIComponent(objectType)}/search`, body);
  const results = data?.results || [];
  return results[0] || null;
}

export async function readObject(objectType: string, objectId: string, properties?: string[]): Promise<any> {
  const qs = new URLSearchParams();
  if (properties?.length) {
    for (const prop of properties) {
      qs.append("properties", prop);
    }
  }

  const path = `/crm/v3/objects/${encodeURIComponent(objectType)}/${encodeURIComponent(objectId)}${qs.toString() ? `?${qs.toString()}` : ""}`;
  return await hsGet(path);
}
