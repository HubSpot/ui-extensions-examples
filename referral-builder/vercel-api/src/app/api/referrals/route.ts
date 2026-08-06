import { NextResponse } from "next/server";
import { HS_OBJECTS, HS_REFERRAL_PROPS, HS_DEAL_PROPS } from "../../../lib/config";
import { hsPost, hsPatch } from "../../../lib/hubspot";
import { searchByProperty, readObject } from "../../../lib/objects";
import { ensureAssociation } from "../../../lib/associations";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const dealId = body?.dealId ? String(body.dealId) : null;
    const companyId = body?.companyId ? String(body.companyId) : null;
    const programId = body?.programId ? String(body.programId) : null;
    const sessionId = body?.sessionId ? String(body.sessionId) : null;
    const note = body?.note ? String(body.note) : null;
    const outreachStatus = body?.outreachStatus ? String(body.outreachStatus) : null;
    const clientInterest = body?.clientInterest ? String(body.clientInterest) : null;
    const previouslySent = body?.previouslySent ? String(body.previouslySent) : null;

    if (!dealId || !companyId) {
      return NextResponse.json({ error: "dealId and companyId are required" }, { status: 400 });
    }

    // Compute stable unique key: 1 referral per Deal x Company
    const referralKey = `${dealId}-${companyId}`;

    // Search for existing referral by key
    const existing = await searchByProperty(
      HS_OBJECTS.REFERRAL,
      HS_REFERRAL_PROPS.KEY,
      referralKey,
      [HS_REFERRAL_PROPS.KEY, HS_REFERRAL_PROPS.NAME]
    );

    let referralId: string;
    let isUpdate = false;

    if (existing?.id) {
      // Update existing referral
      referralId = String(existing.id);
      isUpdate = true;

      const updateProps: Record<string, any> = {};
      if (note !== null) updateProps[HS_REFERRAL_PROPS.NOTE] = note;
      if (outreachStatus !== null) updateProps[HS_REFERRAL_PROPS.OUTREACH] = outreachStatus;
      if (clientInterest !== null) updateProps[HS_REFERRAL_PROPS.INTEREST] = clientInterest;
      if (previouslySent !== null) updateProps[HS_REFERRAL_PROPS.PREVIOUSLY_SENT] = previouslySent;

      if (Object.keys(updateProps).length > 0) {
        await hsPatch(`/crm/v3/objects/${encodeURIComponent(HS_OBJECTS.REFERRAL)}/${encodeURIComponent(referralId)}`, {
          properties: updateProps,
        });
      }

      // Ensure associations exist
      await ensureAssociation(HS_OBJECTS.REFERRAL, referralId, HS_OBJECTS.DEAL_V4, dealId);
      await ensureAssociation(HS_OBJECTS.REFERRAL, referralId, HS_OBJECTS.COMPANY_V4, companyId);
      if (programId) await ensureAssociation(HS_OBJECTS.REFERRAL, referralId, HS_OBJECTS.PROGRAM, programId);
      if (sessionId) await ensureAssociation(HS_OBJECTS.REFERRAL, referralId, HS_OBJECTS.SESSION, sessionId);
    } else {
      // Create new referral
      const properties: Record<string, any> = {
        [HS_REFERRAL_PROPS.KEY]: referralKey,
      };

      // Set referral_name
      let companyName = "Company";
      try {
        const companyData = await readObject(HS_OBJECTS.COMPANY_V3, companyId, ["name"]);
        companyName = companyData?.properties?.name || "Company";
      } catch {
        // Ignore if company name can't be fetched
      }
      properties[HS_REFERRAL_PROPS.NAME] = `${companyName} – Deal ${dealId}`;

      // Set optional fields
      if (note !== null) properties[HS_REFERRAL_PROPS.NOTE] = note;
      if (outreachStatus !== null) properties[HS_REFERRAL_PROPS.OUTREACH] = outreachStatus;
      if (clientInterest !== null) properties[HS_REFERRAL_PROPS.INTEREST] = clientInterest;
      if (previouslySent !== null) properties[HS_REFERRAL_PROPS.PREVIOUSLY_SENT] = previouslySent;

      // Set copied-from fields
      const currentYear = new Date().getFullYear();
      let copiedFromDealKey = dealId;
      let copiedFromYear = currentYear;

      // Try to read from Deal if custom properties are configured
      if (HS_DEAL_PROPS.KEY || HS_DEAL_PROPS.YEAR) {
        try {
          const propsToRead = [];
          if (HS_DEAL_PROPS.KEY) propsToRead.push(HS_DEAL_PROPS.KEY);
          if (HS_DEAL_PROPS.YEAR) propsToRead.push(HS_DEAL_PROPS.YEAR);

          const dealData = await readObject(HS_OBJECTS.DEAL_V3, dealId, propsToRead);

          if (HS_DEAL_PROPS.KEY && dealData?.properties?.[HS_DEAL_PROPS.KEY]) {
            copiedFromDealKey = String(dealData.properties[HS_DEAL_PROPS.KEY]);
          }
          if (HS_DEAL_PROPS.YEAR && dealData?.properties?.[HS_DEAL_PROPS.YEAR]) {
            const yearValue = dealData.properties[HS_DEAL_PROPS.YEAR];
            copiedFromYear = typeof yearValue === "number" ? yearValue : parseInt(String(yearValue), 10) || currentYear;
          }
        } catch {
          // Use defaults if reading fails
        }
      }

      properties[HS_REFERRAL_PROPS.COPIED_FROM_DEAL_KEY] = copiedFromDealKey;
      properties[HS_REFERRAL_PROPS.COPIED_FROM_YEAR] = copiedFromYear;

      const created: any = await hsPost(`/crm/v3/objects/${encodeURIComponent(HS_OBJECTS.REFERRAL)}`, {
        properties,
      });

      referralId = String(created.id);

      // Create associations with proper type IDs
      await ensureAssociation(HS_OBJECTS.REFERRAL, referralId, HS_OBJECTS.DEAL_V4, dealId);
      await ensureAssociation(HS_OBJECTS.REFERRAL, referralId, HS_OBJECTS.COMPANY_V4, companyId);
      if (programId) await ensureAssociation(HS_OBJECTS.REFERRAL, referralId, HS_OBJECTS.PROGRAM, programId);
      if (sessionId) await ensureAssociation(HS_OBJECTS.REFERRAL, referralId, HS_OBJECTS.SESSION, sessionId);
    }

    return NextResponse.json({
      ok: true,
      referralId,
      created: !isUpdate,
      updated: isUpdate,
    });
  } catch (e: any) {
    console.error("Error in POST /api/referrals:", e);
    return NextResponse.json({ error: e?.message || "Failed to create/update referral" }, { status: 500 });
  }
}
