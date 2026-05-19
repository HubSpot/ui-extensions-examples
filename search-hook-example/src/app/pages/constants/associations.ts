export interface LabelConfig {
  nameProps: string[];
  suffix?: (props: Record<string, string | null>) => string;
  fallback: string;
  truncate?: number;
}

export const ASSOCIATION_OBJECT_TYPES = [
  { label: 'Contacts', value: 'contact' },
  { label: 'Companies', value: 'company' },
  { label: 'Deals', value: 'deal' },
  { label: 'Tickets', value: 'ticket' },
  { label: 'Calls', value: 'call' },
  { label: 'Emails', value: 'email' },
  { label: 'Meetings', value: 'meeting' },
  { label: 'Notes', value: 'note' },
  { label: 'Tasks', value: 'task' },
  { label: 'Products', value: 'product' },
  { label: 'Line Items', value: 'line_item' },
  { label: 'Quotes', value: 'quote' },
  { label: 'Feedback Submissions', value: 'feedback_submission' },
];

export const ASSOCIATION_DISPLAY_PROPERTIES: Record<string, string[]> = {
  contact: ['firstname', 'lastname', 'email'],
  company: ['name', 'domain'],
  deal: ['dealname', 'dealstage', 'amount'],
  ticket: ['subject', 'hs_pipeline_stage'],
  call: ['hs_call_title', 'hs_timestamp'],
  email: ['hs_email_subject', 'hs_timestamp'],
  meeting: ['hs_meeting_title', 'hs_timestamp'],
  note: ['hs_note_body'],
  task: ['hs_task_subject', 'hs_task_status'],
  product: ['name', 'price'],
  line_item: ['name', 'quantity', 'amount'],
  quote: ['hs_title', 'hs_status'],
  feedback_submission: ['hs_survey_name', 'hs_sentiment'],
};

export const ASSOCIATION_LABEL_CONFIG: Record<string, LabelConfig> = {
  contact: {
    nameProps: ['firstname', 'lastname'],
    suffix: (props) => props.email ? ` (${props.email})` : '',
    fallback: 'Contact',
  },
  company: { nameProps: ['name'], fallback: 'Company' },
  deal: {
    nameProps: ['dealname'],
    suffix: (props) => props.amount ? ` — $${props.amount}` : '',
    fallback: 'Deal',
  },
  ticket: { nameProps: ['subject'], fallback: 'Ticket' },
  call: { nameProps: ['hs_call_title'], fallback: 'Call' },
  email: { nameProps: ['hs_email_subject'], fallback: 'Email' },
  meeting: { nameProps: ['hs_meeting_title'], fallback: 'Meeting' },
  note: { nameProps: ['hs_note_body'], fallback: 'Note', truncate: 60 },
  task: { nameProps: ['hs_task_subject'], fallback: 'Task' },
  product: {
    nameProps: ['name'],
    suffix: (props) => props.price ? ` — $${props.price}` : '',
    fallback: 'Product',
  },
  line_item: { nameProps: ['name'], fallback: 'Line Item' },
  quote: { nameProps: ['hs_title'], fallback: 'Quote' },
  feedback_submission: { nameProps: ['hs_survey_name'], fallback: 'Feedback' },
};
