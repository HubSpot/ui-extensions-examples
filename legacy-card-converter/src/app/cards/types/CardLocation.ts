/**
 * Valid locations for legacy CRM Cards
 */
export const CardLocation = {
  CRM_RECORD_SIDEBAR: 'crm.record.sidebar',
  HELPDESK_SIDEBAR: 'helpdesk.sidebar',
} as const;

export type CardLocationValue =
  (typeof CardLocation)[keyof typeof CardLocation];
