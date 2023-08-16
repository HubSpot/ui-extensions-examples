import React from 'react';
import { hubspot, Text } from '@hubspot/ui-extensions';
import { CrmAssociationTable } from '@hubspot/ui-extensions/crm';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context }) => <Extension context={context} />);

const Extension = ({ context }) => {
  return (
    <>
      <Text format={{ fontWeight: 'bold' }}>Open Deals worth more than $1000 sorted by deal value</Text>
      <CrmAssociationTable
        objectTypeId="0-3"
        propertyColumns={[
          'dealname',
          'hubspot_owner_id',
          'amount',
          'dealstage',
        ]}
        quickFilterProperties={['hubspot_owner_id', 'dealstage', 'amount']}
        pageSize={10}
        preFilters={[
          {
            operator: 'NOT_IN',
            property: 'dealstage',
            values: ['closedwon', 'closedlost'],
          },
          {
            operator: 'GT',
            property: 'amount',
            value: 1000,
          },
        ]}
        sort={[
          {
            direction: 1,
            columnName: 'amount',
          },
        ]}
        searchable={true}
        pagination={true}
      />
    </>
  );
};
