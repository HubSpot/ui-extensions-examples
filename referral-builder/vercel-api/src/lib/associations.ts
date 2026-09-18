import { hsGet, hsPost, hsPut } from "./hubspot";

const associationTypeCache = new Map<string, number>();

export async function listAssociatedIds(fromType: string, fromId: string, toType: string): Promise<string[]> {
  const ids: string[] = [];
  let after: string | null = null;

  while (true) {
    const qs = new URLSearchParams({ limit: "500" });
    if (after) qs.set("after", after);

    const path = `/crm/v4/objects/${encodeURIComponent(fromType)}/${encodeURIComponent(fromId)}/associations/${encodeURIComponent(toType)}?${qs.toString()}`;
    const data: any = await hsGet(path);

    for (const r of data?.results || []) {
      if (r?.toObjectId != null) ids.push(String(r.toObjectId));
    }

    after = data?.paging?.next?.after ? String(data.paging.next.after) : null;
    if (!after) break;
  }

  return ids;
}

export async function getAssociationTypeId(fromType: string, toType: string): Promise<number> {
  const cacheKey = `${fromType}->${toType}`;
  const cached = associationTypeCache.get(cacheKey);
  if (cached !== undefined) return cached;

  const path = `/crm/v4/associations/${encodeURIComponent(fromType)}/${encodeURIComponent(toType)}/labels`;
  const data: any = await hsGet(path);

  const defaultAssoc = data?.results?.find((r: any) => r?.category === "HUBSPOT_DEFINED");
  const typeId = defaultAssoc?.typeId;

  if (typeId === undefined) {
    throw new Error(`No default association type found for ${fromType} -> ${toType}`);
  }

  associationTypeCache.set(cacheKey, typeId);
  return typeId;
}

export async function createAssociation(fromType: string, fromId: string, toType: string, toId: string): Promise<void> {
  const typeId = await getAssociationTypeId(fromType, toType);

  await hsPut(
    `/crm/v4/objects/${encodeURIComponent(fromType)}/${encodeURIComponent(fromId)}/associations/${encodeURIComponent(toType)}/${encodeURIComponent(toId)}`,
    [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: typeId }]
  );
}

export async function ensureAssociation(fromType: string, fromId: string, toType: string, toId: string): Promise<void> {
  const existingIds = await listAssociatedIds(fromType, fromId, toType);
  if (!existingIds.includes(String(toId))) {
    await createAssociation(fromType, fromId, toType, toId);
  }
}
