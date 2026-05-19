import type { DefaultProp } from "../types.ts";

export const DEFAULT_OBJECT_TYPE = '0-1';

export interface ObjectTypeConfig {
  label: string;
  value: string;
  defaultProperties: DefaultProp[];
}

export const OBJECT_TYPE_CONFIGS: ObjectTypeConfig[] = [
  { label: 'Appointments', value: '0-421', defaultProperties: [{name: 'hs_appointment_name', label: 'Appointment Name'}, {name: 'hs_appointment_start', label: 'Appointment Start'}, {name: 'hs_appointment_end', label: 'Appointment End'}] },
  { label: 'Calls', value: '0-48', defaultProperties: [{name: 'hs_timestamp', label: 'Activity date'}, {name: 'hs_call_title', label: 'Call Title'}] },
  { label: 'Carts', value: '0-142', defaultProperties: [{name: 'hs_external_cart_id', label: 'Cart ID'}, {name: 'hs_cart_name', label: 'Name'}, {name: 'hs_total_price', label: 'Total Price'}] },
  { label: 'Communications', value: '0-18', defaultProperties: [{name: 'hs_timestamp', label: 'Activity Date'}, {name: 'hs_communication_channel_type', label: 'Channel Type'}] },
  { label: 'Companies', value: '0-2', defaultProperties: [{name: 'name', label: 'Company Name'}, {name: 'industry', label: 'Industry'}] },
  { label: 'Contacts', value: '0-1', defaultProperties: [{name: 'firstname', label: 'First Name'}, {name: 'lastname', label: 'Last Name'}, {name: 'email', label: 'Email'}, {name: 'phone', label: 'Phone Number'}, {name: 'createdate', label: 'Create Date'}] },
  { label: 'Courses', value: '0-410', defaultProperties: [{name: 'hs_course_name', label: 'Course Name'}, {name: 'hs_course_id', label: 'Course ID'}, {name: 'hs_course_description', label: 'Course Description'}] },
  { label: 'Deals', value: '0-3', defaultProperties: [{name: 'dealname', label: 'Deal Name'}, {name: 'dealstage', label: 'Deal Stage'}, {name: 'closedate', label: 'Close Date'}, {name: 'pipeline', label: 'Pipeline'}] },
  { label: 'Discounts', value: '0-84', defaultProperties: [{name: 'hs_label', label: 'Label'}, {name: 'hs_value', label: 'Value'}, {name: 'hs_type', label: 'Type'}] },
  { label: 'Emails', value: '0-49', defaultProperties: [{name: 'hs_email_subject', label: 'Email Subject'}, {name: 'hs_email_status', label: 'Email Status'}, {name: 'hs_timestamp', label: 'Activity Date'}] },
  { label: 'Feedback submissions', value: '0-19', defaultProperties: [{name: 'hs_survey_name', label: 'Survey Name'}, {name: 'hs_survey_type', label: 'Survey Type'}, {name: 'hs_sentiment', label: 'Sentiment'}, {name: 'hs_submission_timestamp', label: 'Submission Timestamp'}] },
  { label: 'Fees', value: '0-85', defaultProperties: [{name: 'hs_label', label: 'Label'}, {name: 'hs_value', label: 'Value'}, {name: 'hs_type', label: 'Type'}] },
  { label: 'Goals', value: '0-74', defaultProperties: [{name: 'hs_goal_name', label: 'Goal Name'}, {name: 'hs_goal_type', label: 'Goal Type'}, {name: 'hs_target_amount', label: 'Target Amount'}, {name: 'hs_status', label: 'Status'}] },
  { label: 'Invoices', value: '0-53', defaultProperties: [{name: 'hs_title', label: 'Invoice Title'}, {name: 'hs_number', label: 'Invoice Number'}, {name: 'hs_invoice_status', label: 'Invoice Status'}, {name: 'hs_due_date', label: 'Due Date'}] },
  { label: 'Leads', value: '0-136', defaultProperties: [{name: 'hs_lead_name', label: 'Lead Name'}, {name: 'hs_lead_type', label: 'Lead Type'}, {name: 'hs_pipeline_stage', label: 'Lead Status'}] },
  { label: 'Line items', value: '0-8', defaultProperties: [{name: 'name', label: 'Name'}, {name: 'quantity', label: 'Quantity'}, {name: 'price', label: 'Unit Price'}, {name: 'amount', label: 'Amount'}] },
  { label: 'Listings', value: '0-420', defaultProperties: [{name: 'hs_name', label: 'Listing Name'}, {name: 'hs_listing_type', label: 'Listing Type'}, {name: 'hs_price', label: 'Price'}, {name: 'hs_city', label: 'City'}] },
  { label: 'Marketing events', value: '0-54', defaultProperties: [{name: 'hs_event_name', label: 'Event Name'}, {name: 'hs_event_description', label: 'Event Description'}] },
  { label: 'Meetings', value: '0-47', defaultProperties: [{name: 'hs_meeting_title', label: 'Meeting Title'}, {name: 'hs_meeting_body', label: 'Description'}, {name: 'hs_timestamp', label: 'Activity Date'}] },
  { label: 'Notes', value: '0-46', defaultProperties: [{name: 'hs_note_body', label: 'Note Body'}, {name: 'hs_timestamp', label: 'Activity Date'}] },
  { label: 'Orders', value: '0-123', defaultProperties: [{name: 'hs_order_name', label: 'Order Name'}, {name: 'hs_total_price', label: 'Total Price'}, {name: 'hs_currency_code', label: 'Currency Code'}, {name: 'hs_external_order_status', label: 'Order Status'}] },
  { label: 'Payments', value: '0-101', defaultProperties: [{name: 'hs_initial_amount', label: 'Amount'}, {name: 'hs_latest_status', label: 'Latest Status'}, {name: 'hs_payment_method', label: 'Payment Method'}, {name: 'hs_customer_email', label: 'Customer Email'}] },
  { label: 'Postal mail', value: '0-116', defaultProperties: [{name: 'hs_postal_mail_body', label: 'Body'}, {name: 'hs_timestamp', label: 'Activity Date'}] },
  { label: 'Products', value: '0-7', defaultProperties: [{name: 'name', label: 'Name'}, {name: 'price', label: 'Price'}, {name: 'hs_sku', label: 'SKU'}, {name: 'description', label: 'Description'}] },
  { label: 'Projects', value: '0-970', defaultProperties: [{name: 'hs_name', label: 'Project Name'}, {name: 'hs_start_date', label: 'Start Date'}, {name: 'hs_close_date', label: 'Close Date'}, {name: 'hs_priority', label: 'Priority'}] },
  { label: 'Quotes', value: '0-14', defaultProperties: [{name: 'hs_title', label: 'Quote Title'}, {name: 'hs_status', label: 'Quote Status'}, {name: 'hs_quote_amount', label: 'Quote Amount'}, {name: 'hs_expiration_date', label: 'Expiration Date'}] },
  { label: 'Services', value: '0-162', defaultProperties: [{name: 'hs_name', label: 'Service Name'}, {name: 'hs_status', label: 'Status'}, {name: 'hs_start_date', label: 'Start Date'}, {name: 'hs_category', label: 'Category'}] },
  { label: 'Subscriptions', value: '0-69', defaultProperties: [{name: 'hs_name', label: 'Name'}, {name: 'hs_status', label: 'Status'}, {name: 'hs_mrr', label: 'Monthly Recurring Revenue'}, {name: 'hs_currency_code', label: 'Currency Code'}] },
  { label: 'Tasks', value: '0-27', defaultProperties: [{name: 'hs_task_subject', label: 'Title'}, {name: 'hs_task_status', label: 'Task Status'}, {name: 'hs_task_priority', label: 'Priority'}] },
  { label: 'Taxes', value: '0-86', defaultProperties: [{name: 'hs_label', label: 'Label'}, {name: 'hs_value', label: 'Value'}, {name: 'hs_type', label: 'Type'}] },
  { label: 'Tickets', value: '0-5', defaultProperties: [{name: 'subject', label: 'Ticket Name'}, {name: 'hs_pipeline_stage', label: 'Ticket Status'}, {name: 'hs_ticket_priority', label: 'Priority'}, {name: 'createdate', label: 'Create Date'}] },
  { label: 'Users', value: '0-115', defaultProperties: [{name: 'hs_searchable_calculated_name', label: 'Name'}, {name: 'hs_email', label: 'Email'}, {name: 'hs_job_title', label: 'Job Title'}] },
];
