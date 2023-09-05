import React from 'react';
import { Button, Box, Divider } from '@hubspot/ui-extensions';
import { CrmAssociationTable } from '@hubspot/ui-extensions/crm';

export const QuotesView = ({ onNext }) => {
  return (
    <>
      <Box>
        <Button onClick={onNext} type="button">
          Create Quote
        </Button>
      </Box>
      <Divider />
      <CrmAssociationTable
        objectTypeId="0-14"
        propertyColumns={['hs_title', 'hs_quote_amount']}
        quickFilterProperties={['hs_title', 'hs_quote_amount']}
        pageSize={10}
        sort={[
          {
            direction: 0,
            columnName: 'hs_createdate',
          },
        ]}
        searchable={true}
        pagination={true}
      />
    </>
  );
};
