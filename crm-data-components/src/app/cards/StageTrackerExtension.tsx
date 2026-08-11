import React, { useState, useEffect, useCallback } from 'react';
import {
  hubspot,
  Button,
  Form,
  Select,
  Accordion,
  Flex,
  Text,
  Heading,
  Alert,
} from '@hubspot/ui-extensions';
import {
  CrmStageTracker,
  CrmAssociationPivot,
} from '@hubspot/ui-extensions/crm';

hubspot.extend<'crm.record.tab'>(({ context, actions }) => (
  <Extension
    context={context}
    fetchCrmObjectProperties={actions.fetchCrmObjectProperties}
    addAlert={actions.addAlert}
  />
));

const Extension = ({ context, fetchCrmObjectProperties, addAlert }) => {
  const [stage, setStage] = useState<string | null>(null);
  const [showProperties, setShowProperties] = useState(true);
  const [dealId, setDealId] = useState<string | null>(null);
  const [dealname, setDealname] = useState<string | null>(null);
  const [error, setError] = useState('');

  const stageToPropertiesMap: { [key: string]: string[] } = {
    appointmentscheduled: [
      'dealname',
      'engagements_last_meeting_booked',
      'dealtype',
    ],
    qualifiedtobuy: ['hubspot_owner_id', 'amount', 'dealtype', 'hs_priority'],
    presentationscheduled: [
      'hs_priority',
      'hs_deal_stage_probability',
      'hs_forecast_amount',
    ],
    decisionmakerboughtin: [
      'hs_deal_stage_probability',
      'hs_tcv',
      'amount',
      'notes_last_contacted',
    ],
    contractsent: ['createdate', 'hs_acv', 'hs_deal_stage_probability'],
    closedwon: ['closed_won_reason', 'closedate', 'amount'],
    closedlost: ['closedate', 'closed_lost_reason', 'amount'],
  };

  const options: Array<{ label: string; value: string }> = [
    { label: 'Appointment Scheduled', value: 'appointmentscheduled' },
    { label: 'Qualified to Buy', value: 'qualifiedtobuy' },
    { label: 'Presentation Scheduled', value: 'presentationscheduled' },
    { label: 'Decision Maker Bought In', value: 'decisionmakerboughtin' },
    { label: 'Contract Sent', value: 'contractsent' },
    { label: 'Closed Won', value: 'closedwon' },
    { label: 'Closed Lost', value: 'closedlost' },
  ];

  useEffect(() => {
    fetchCrmObjectProperties(['dealname', 'dealstage', 'hs_object_id']).then(
      (properties: { [propertyName: string]: any }) => {
        setStage(properties.dealstage);
        setDealId(properties.hs_object_id);
        setDealname(properties.dealname);
      },
    );
  }, [stage]);

  const handleStageChange = useCallback(
    (newStage: string) => {
      hubspot
        .serverless('updateDeal', {
          parameters: {
            dealId: dealId!,
            dealStage: newStage,
          },
        })
        .then(() => {
          addAlert({
            type: 'success',
            message: 'Deal stage updated successfully',
          });
          setStage(newStage);
        })
        .catch((error) => {
          setError(error?.message || 'An error occurred');
        });
    },
    [dealId, addAlert],
  );

  const handlePropertyToggle = useCallback(() => {
    setShowProperties((current) => !current);
  }, []);

  if (error !== '') {
    return <Alert title="Error">{error}</Alert>;
  }

  return (
    <Flex direction={'column'} gap={'lg'}>
      <Text variant="microcopy">
        This is example is a card for deal records to view and update pipeline
        stage progress.
      </Text>
      <Flex direction={'column'} justify={'start'} gap={'medium'}>
        <Heading>Deal status : {dealname}</Heading>
        <Flex direction={'row'} justify={'start'} align={'end'} gap={'medium'}>
          <Form>
            <Select
              label="Update Deal Stage"
              name="deal-stage"
              tooltip="Please choose"
              value={stage}
              onChange={handleStageChange}
              options={options}
            />
          </Form>
          <Button
            variant={showProperties ? 'primary' : 'secondary'}
            onClick={handlePropertyToggle}
          >
            {showProperties ? 'Hide' : 'Show'} Properties
          </Button>
        </Flex>
        <CrmStageTracker
          properties={stageToPropertiesMap[stage || '']}
          showProperties={showProperties}
        />
        <Accordion title="Association Labels" size="small" defaultOpen={true}>
          <CrmAssociationPivot
            objectTypeId="0-1"
            associationLabels={['CEO']}
            maxAssociations={10}
            sort={[
              {
                columnName: 'createdate',
                direction: -1,
              },
            ]}
          />
        </Accordion>
      </Flex>
    </Flex>
  );
};
