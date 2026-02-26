import { NextResponse } from "next/server";
import { HS_OBJECTS } from "../../../../lib/config";
import { hsPatch } from "../../../../lib/hubspot";

export async function PATCH(req: Request, { params }: { params: { referralId: string } }) {
  try {
    const referralId = params.referralId;
    const body = await req.json();
    const properties = body?.properties || {};

    await hsPatch(`/crm/v3/objects/${encodeURIComponent(HS_OBJECTS.REFERRAL)}/${encodeURIComponent(referralId)}`, {
      properties,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to update referral" }, { status: 500 });
  }
}
