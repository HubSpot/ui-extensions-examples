import { NextResponse } from "next/server";
import { HS_OBJECTS } from "../../../../../lib/config";
import { readObject } from "../../../../../lib/objects";
import { listAssociatedIds } from "../../../../../lib/associations";

/**
 * GET /api/deals/[dealId]/context
 *
 * Returns context information for a deal, including its associated companyId.
 * This is used by the UI to reliably get the companyId for referral creation.
 */
export async function GET(_req: Request, { params }: { params: { dealId: string } }) {
  try {
    const dealId = params.dealId;

    // Read basic deal properties
    const deal = await readObject(HS_OBJECTS.DEAL_V3, dealId, ["dealname", "dealstage"]);

    // Get associated company IDs
    const companyIds = await listAssociatedIds(HS_OBJECTS.DEAL_V4, dealId, HS_OBJECTS.COMPANY_V4);

    // Get the first associated company (deals typically have one primary company)
    const companyId = companyIds.length > 0 ? companyIds[0] : null;

    return NextResponse.json({
      dealId,
      dealName: deal?.properties?.dealname || null,
      dealStage: deal?.properties?.dealstage || null,
      companyId,
      hasCompany: !!companyId,
    });
  } catch (e: any) {
    console.error("Error in GET /api/deals/[dealId]/context:", e);
    return NextResponse.json(
      { error: e?.message || "Failed to load deal context" },
      { status: 500 }
    );
  }
}
