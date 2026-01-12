import { NextResponse } from "next/server";
import { HS_OBJECTS } from "../../../../../lib/config";
import { listAssociatedIds } from "../../../../../lib/associations";
import { batchRead } from "../../../../../lib/objects";

const SESSION_PROPS_CANDIDATES = ["name", "start_date", "end_date", "price", "weeks"];

export async function GET(_req: Request, { params }: { params: { programId: string } }) {
  try {
    const programId = params.programId;

    const sessionIds = await listAssociatedIds(HS_OBJECTS.PROGRAM, programId, HS_OBJECTS.SESSION);
    if (!sessionIds.length) return NextResponse.json({ results: [] });

    let sessions: any[] = [];
    try {
      sessions = await batchRead(HS_OBJECTS.SESSION, sessionIds, SESSION_PROPS_CANDIDATES);
    } catch {
      sessions = await batchRead(HS_OBJECTS.SESSION, sessionIds, ["name"]);
    }

    const results = sessions.map((s: any) => ({
      id: String(s.id),
      name: s?.properties?.name || `Session ${s.id}`,
      startDate: s?.properties?.start_date || null,
      endDate: s?.properties?.end_date || null,
      price: s?.properties?.price || null,
      weeks: s?.properties?.weeks || null,
    }));

    return NextResponse.json({ results });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to load sessions" }, { status: 500 });
  }
}
