import { hsGet } from "./hubspot";

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
