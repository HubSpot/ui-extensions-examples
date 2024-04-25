import React, { useState } from "react";
import {
  Divider,
  Text,
  Flex,
  hubspot,
  Form,
  Select,
} from "@hubspot/ui-extensions";
import {
  CrmPropertyList,
  CrmCardActions,
  CrmActionButton,
} from "@hubspot/ui-extensions/crm";

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));

const scenariosToPropertiesMap: { [key: string]: string[] } = {
  contact: [
    "jobtitle",
    "industry",
    "date_of_birth",
    "hs_language",
    "favorite_color",
  ],
  engagement: [
    "hs_sa_first_engagement_date",
    "hs_latest_source_data_1",
    "engagements_last_meeting_booked",
    "hs_email_sends_since_last_engagement",
    "hs_time_to_first_engagement",
  ],
  deals: [
    "hs_buying_role",
    "num_associated_deals",
    "recent_deal_amount",
    "recent_deal_close_date",
  ],
  nps: [
    "hs_feedback_show_nps_web_survey",
    "hs_feedback_last_survey_date",
    "hs_feedback_last_nps_rating",
    "hs_feedback_last_nps_follow_up",
  ],
};

const options: Array<{ label: string; value: string }> = [
  { label: "Contact", value: "contact" },
  { label: "Engagement", value: "engagement" },
  { label: "Deal Summary", value: "deals" },
  { label: "NPS", value: "nps" },
];

const Extension = ({ context, runServerless, sendAlert }) => {
  const [scenario, setScenario] = useState<any>("engagement");

  const currentObjectId = context.crm.objectId;
  const currentObjectTypeId = context.crm.objectTypeId;

  const actionsToPropertiesMap = {
    contact: {
      label: "View full record",
      actionType: "PREVIEW_OBJECT",
      actionContext: {
        objectTypeId: currentObjectTypeId,
        objectId: currentObjectId,
      },
    },
    engagement: {
      label: "Schedule an engagement call",
      actionType: "SCHEDULE_MEETING",
      actionContext: {
        objectTypeId: currentObjectTypeId,
        objectId: currentObjectId,
      },
    },
    deals: {
      label: "View the latest deal",
      actionType: "PREVIEW_OBJECT",
      actionContext: {
        objectTypeId: "0-3",
        objectId: 18899287678,
      },
    },
    nps: {
      label: "Email NPS Survey",
      actionType: "SEND_EMAIL",
      actionContext: {
        objectTypeId: currentObjectTypeId,
        objectId: currentObjectId,
      },
    },
  };

  const { label, actionContext, actionType } = actionsToPropertiesMap[scenario];

  return (
    <>
      <CrmCardActions
        actionConfigs={[
          {
            type: "dropdown",
            label: "More",
            options: [
              {
                type: "action-library-button",
                label: "Send email",
                actionType: "SEND_EMAIL",
                actionContext: {
                  objectTypeId: currentObjectTypeId,
                  objectId: currentObjectId,
                },
              },
              {
                type: "action-library-button",
                label: "Add Note",
                actionType: "ADD_NOTE",
                actionContext: {
                  objectTypeId: currentObjectTypeId,
                  objectId: currentObjectId,
                },
              },
            ],
          },
        ]}
      />

      <Text variant="microcopy">
        This is example is a card to show different groups of properties based
        on the selected scenario.
      </Text>

      <Flex direction="row" align="end" gap="small">
        <Form>
          <Select
            label="Property Group"
            name="property-group"
            tooltip="Please select a property group to view."
            value={scenario}
            onChange={(value) => setScenario(value)}
            options={options}
          />
        </Form>
        <CrmActionButton
          actionType={actionType}
          actionContext={actionContext}
          variant="primary"
          type="button"
        >
          {label}
        </CrmActionButton>
      </Flex>

      <Divider />

      <CrmPropertyList
        properties={scenariosToPropertiesMap[scenario]}
        direction="row"
      />
    </>
  );
};
