import { NextResponse } from "next/server";
import { HS_OBJECTS, HS_REFERRAL_PROPS } from "../../../../lib/config";
import { hsGet } from "../../../../lib/hubspot";

type PropertyOption = {
  label: string;
  value: string;
};

type PropertyDefinition = {
  name: string;
  label: string;
  options: PropertyOption[];
};

export async function GET(_req: Request) {
  try {
    // Fetch property definitions for the referral object
    const propertyNames = [
      HS_REFERRAL_PROPS.OUTREACH,
      HS_REFERRAL_PROPS.INTEREST,
      HS_REFERRAL_PROPS.PREVIOUSLY_SENT,
    ];

    const definitions: Record<string, PropertyDefinition> = {};

    for (const propName of propertyNames) {
      try {
        const path = `/crm/v3/properties/${encodeURIComponent(HS_OBJECTS.REFERRAL)}/${encodeURIComponent(propName)}`;
        const data: any = await hsGet(path);

        const options: PropertyOption[] = [];

        if (data?.options && Array.isArray(data.options)) {
          for (const opt of data.options) {
            options.push({
              label: opt.label || opt.value || "",
              value: opt.value || "",
            });
          }
        }

        definitions[propName] = {
          name: data?.name || propName,
          label: data?.label || propName,
          options,
        };
      } catch (e) {
        console.error(`Failed to fetch property definition for ${propName}:`, e);
        // Continue with other properties even if one fails
      }
    }

    return NextResponse.json({ properties: definitions });
  } catch (e: any) {
    console.error("Error in GET /api/referrals/properties:", e);
    return NextResponse.json({ error: e?.message || "Failed to fetch property definitions" }, { status: 500 });
  }
}
