export const HS_OBJECTS = {
  // Standard objects: v3 uses plural, v4 uses singular
  DEAL_V3: "deals",
  COMPANY_V3: "companies",
  DEAL_V4: "deal",
  COMPANY_V4: "company",

  // Custom objects: set these in Vercel env, or use p_{object_name}
  PROGRAM: process.env.HS_PROGRAM_OBJECT_TYPE || "p_program",
  SESSION: process.env.HS_SESSION_OBJECT_TYPE || "p_session",
  REFERRAL: process.env.HS_REFERRAL_OBJECT_TYPE || "p_referral",
};

// Referral properties (adjust if your internal property names differ)
export const HS_REFERRAL_PROPS = {
  KEY: process.env.HS_REFERRAL_KEY_PROP || "referral_key",
  OUTREACH: process.env.HS_REFERRAL_OUTREACH_PROP || "referral_outreach_status",
  INTEREST: process.env.HS_REFERRAL_INTEREST_PROP || "referral_client_interest",
  NOTE: process.env.HS_REFERRAL_NOTE_PROP || "referral_note_to_company",
};

// Common display properties (usually safe)
export const HS_NAME_PROP = "name";
