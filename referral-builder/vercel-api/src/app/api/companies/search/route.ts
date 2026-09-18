import { NextResponse } from "next/server";
import { hsPost } from "../../../../lib/hubspot";
import { HS_OBJECTS } from "../../../../lib/config";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = (searchParams.get("q") || "").trim();
    const limit = Number(searchParams.get("limit") || "20");

    if (!q) return NextResponse.json({ results: [] });

    const body = {
      query: q,
      limit,
      properties: ["name"],
    };

    const data: any = await hsPost(`/crm/v3/objects/${HS_OBJECTS.COMPANY_V3}/search`, body);

    const results = (data?.results || []).map((c: any) => ({
      id: String(c.id),
      name: c?.properties?.name || `Company ${c.id}`,
    }));

    return NextResponse.json({ results });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Company search failed" }, { status: 500 });
  }
}
