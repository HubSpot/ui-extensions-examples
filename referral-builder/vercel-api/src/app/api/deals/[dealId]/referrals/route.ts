import { NextResponse } from "next/server";
import { HS_OBJECTS, HS_REFERRAL_PROPS } from "../../../../../lib/config";
import { listAssociatedIds } from "../../../../../lib/associations";
import { batchRead } from "../../../../../lib/objects";

export async function GET(_req: Request, { params }: { params: { dealId: string } }) {
  try {
    const dealId = params.dealId;

    // 1) Referral IDs associated to this Deal
    const referralIds = await listAssociatedIds(HS_OBJECTS.DEAL_V4, dealId, HS_OBJECTS.REFERRAL);
    if (!referralIds.length) return NextResponse.json({ results: [] });

    // 2) Load referral properties
    let referrals: any[] = [];
    try {
      referrals = await batchRead(HS_OBJECTS.REFERRAL, referralIds, [
        HS_REFERRAL_PROPS.KEY,
        HS_REFERRAL_PROPS.OUTREACH,
        HS_REFERRAL_PROPS.INTEREST,
        HS_REFERRAL_PROPS.NOTE,
      ]);
    } catch {
      referrals = await batchRead(HS_OBJECTS.REFERRAL, referralIds);
    }

    // 3) For each referral, fetch its associated Company/Program/Session IDs (simple & ok for small volumes)
    const byReferral: Record<string, { companyId?: string; programId?: string; sessionId?: string }> = {};
    const companyIds = new Set<string>();
    const programIds = new Set<string>();
    const sessionIds = new Set<string>();

    for (const r of referrals) {
      const rid = String(r.id);

      const cIds = await listAssociatedIds(HS_OBJECTS.REFERRAL, rid, HS_OBJECTS.COMPANY_V4);
      const pIds = await listAssociatedIds(HS_OBJECTS.REFERRAL, rid, HS_OBJECTS.PROGRAM);
      const sIds = await listAssociatedIds(HS_OBJECTS.REFERRAL, rid, HS_OBJECTS.SESSION);

      const companyId = cIds[0] ? String(cIds[0]) : undefined;
      const programId = pIds[0] ? String(pIds[0]) : undefined;
      const sessionId = sIds[0] ? String(sIds[0]) : undefined;

      byReferral[rid] = { companyId, programId, sessionId };

      if (companyId) companyIds.add(companyId);
      if (programId) programIds.add(programId);
      if (sessionId) sessionIds.add(sessionId);
    }

    // 4) Batch read associated objects for names
    const companies = await batchRead(HS_OBJECTS.COMPANY_V3, Array.from(companyIds), ["name"]);
    const programs = await batchRead(HS_OBJECTS.PROGRAM, Array.from(programIds), ["name"]);
    const sessions = await batchRead(HS_OBJECTS.SESSION, Array.from(sessionIds), ["name", "start_date", "end_date", "price"]);

    const companyNameById: Record<string, string> = {};
    for (const c of companies) companyNameById[String(c.id)] = c?.properties?.name || `Company ${c.id}`;

    const programNameById: Record<string, string> = {};
    for (const p of programs) programNameById[String(p.id)] = p?.properties?.name || `Program ${p.id}`;

    const sessionById: Record<string, any> = {};
    for (const s of sessions) {
      sessionById[String(s.id)] = {
        id: String(s.id),
        name: s?.properties?.name || `Session ${s.id}`,
        startDate: s?.properties?.start_date || null,
        endDate: s?.properties?.end_date || null,
        price: s?.properties?.price || null,
      };
    }

    // 5) Build response
    const results = referrals.map((r: any) => {
      const rid = String(r.id);
      const assoc = byReferral[rid] || {};

      const companyId = assoc.companyId;
      const programId = assoc.programId;
      const sessionId = assoc.sessionId;

      return {
        id: rid,
        referralKey: r?.properties?.[HS_REFERRAL_PROPS.KEY] || null,
        outreachStatus: r?.properties?.[HS_REFERRAL_PROPS.OUTREACH] || null,
        clientInterest: r?.properties?.[HS_REFERRAL_PROPS.INTEREST] || null,
        note: r?.properties?.[HS_REFERRAL_PROPS.NOTE] || null,
        company: companyId ? { id: companyId, name: companyNameById[companyId] } : null,
        program: programId ? { id: programId, name: programNameById[programId] } : null,
        session: sessionId ? sessionById[sessionId] : null,
      };
    });

    return NextResponse.json({ results });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to load referrals" }, { status: 500 });
  }
}
