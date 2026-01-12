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

// Referral properties (2025.02 schema - adjust via env vars if your internal property names differ)
export const HS_REFERRAL_PROPS = {
  // Editable in UI
  KEY: process.env.HS_REFERRAL_KEY_PROP || "referral_key",
  OUTREACH: process.env.HS_REFERRAL_OUTREACH_PROP || "referral_status",
  INTEREST: process.env.HS_REFERRAL_INTEREST_PROP || "client_interest",
  NOTE: process.env.HS_REFERRAL_NOTE_PROP || "referral_note_to_company",
  PREVIOUSLY_SENT: process.env.HS_REFERRAL_PREVIOUSLY_SENT_PROP || "previously_sent_to_camp",

  // Auto-managed (not edited in UI)
  NAME: process.env.HS_REFERRAL_NAME_PROP || "referral_name",
  COPIED_FROM_DEAL_KEY: process.env.HS_REFERRAL_COPIED_DEAL_KEY_PROP || "copied_from_deal_key",
  COPIED_FROM_YEAR: process.env.HS_REFERRAL_COPIED_YEAR_PROP || "copied_from_year",
  EMAIL_SEND_COUNT: process.env.HS_REFERRAL_EMAIL_COUNT_PROP || "email_send_count",
  EMAIL_LAST_SENT: process.env.HS_REFERRAL_EMAIL_LAST_SENT_PROP || "email_last_sent_datetime",
};

// Deal properties for copying metadata (optional - defaults to current year and deal ID)
export const HS_DEAL_PROPS = {
  KEY: process.env.HS_DEAL_KEY_PROP || null, // If set, read this deal property for copied_from_deal_key
  YEAR: process.env.HS_DEAL_YEAR_PROP || null, // If set, read this deal property for copied_from_year
};

// Common display properties (usually safe)
export const HS_NAME_PROP = "name";
