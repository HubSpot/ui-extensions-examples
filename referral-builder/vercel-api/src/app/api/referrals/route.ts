import { NextResponse } from "next/server";
import { HS_OBJECTS, HS_REFERRAL_PROPS } from "../../../lib/config";
import { hsPost, hsPut } from "../../../lib/hubspot";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const dealId = body?.dealId ? String(body.dealId) : null;
    const companyId = body?.companyId ? String(body.companyId) : null;
    const programId = body?.programId ? String(body.programId) : null;
    const sessionId = body?.sessionId ? String(body.sessionId) : null;
    const note = body?.note ? String(body.note) : null;

    if (!dealId || !companyId) {
      return NextResponse.json({ error: "dealId and companyId are required" }, { status: 400 });
    }

    // Simple unique key: 1 referral per Deal x Company
    const referralKey = `${dealId}-${companyId}`;

    const properties: Record<string, any> = {
      [HS_REFERRAL_PROPS.KEY]: referralKey,
    };
    if (note) properties[HS_REFERRAL_PROPS.NOTE] = note;

    const created: any = await hsPost(`/crm/v3/objects/${encodeURIComponent(HS_OBJECTS.REFERRAL)}`, {
      properties,
    });

    const referralId = String(created.id);

    // Associations (default)
    await hsPut(
      `/crm/v4/objects/${encodeURIComponent(HS_OBJECTS.REFERRAL)}/${encodeURIComponent(referralId)}/associations/default/${HS_OBJECTS.DEAL_V4}/${encodeURIComponent(dealId)}`
    );

    await hsPut(
      `/crm/v4/objects/${encodeURIComponent(HS_OBJECTS.REFERRAL)}/${encodeURIComponent(referralId)}/associations/default/${HS_OBJECTS.COMPANY_V4}/${encodeURIComponent(companyId)}`
    );

    if (programId) {
      await hsPut(
        `/crm/v4/objects/${encodeURIComponent(HS_OBJECTS.REFERRAL)}/${encodeURIComponent(referralId)}/associations/default/${encodeURIComponent(HS_OBJECTS.PROGRAM)}/${encodeURIComponent(programId)}`
      );
    }

    if (sessionId) {
      await hsPut(
        `/crm/v4/objects/${encodeURIComponent(HS_OBJECTS.REFERRAL)}/${encodeURIComponent(referralId)}/associations/default/${encodeURIComponent(HS_OBJECTS.SESSION)}/${encodeURIComponent(sessionId)}`
      );
    }

    return NextResponse.json({ ok: true, referralId });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to create referral" }, { status: 500 });
  }
}
