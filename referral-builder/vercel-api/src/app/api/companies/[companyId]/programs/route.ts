import { NextResponse } from "next/server";
import { HS_OBJECTS, HS_NAME_PROP } from "../../../../../lib/config";
import { listAssociatedIds } from "../../../../../lib/associations";
import { batchRead } from "../../../../../lib/objects";

export async function GET(_req: Request, { params }: { params: { companyId: string } }) {
  try {
    const companyId = params.companyId;

    const programIds = await listAssociatedIds(HS_OBJECTS.COMPANY_V4, companyId, HS_OBJECTS.PROGRAM);

    if (!programIds.length) return NextResponse.json({ results: [] });

    let programs: any[] = [];
    try {
      programs = await batchRead(HS_OBJECTS.PROGRAM, programIds, [HS_NAME_PROP]);
    } catch {
      programs = await batchRead(HS_OBJECTS.PROGRAM, programIds);
    }

    const results = programs.map((p: any) => ({
      id: String(p.id),
      name: p?.properties?.[HS_NAME_PROP] || p?.properties?.name || `Program ${p.id}`,
    }));

    return NextResponse.json({ results });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to load programs" }, { status: 500 });
  }
}
