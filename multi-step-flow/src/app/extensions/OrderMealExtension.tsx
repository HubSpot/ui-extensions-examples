import React from 'react';
import { hubspot } from '@hubspot/ui-extensions';
import { OrderMealCard } from './components/OrderMealCard';

hubspot.extend<'crm.record.tab'>(
  ({ context, runServerlessFunction, actions }) => (
    <OrderMealCard
      fetchCrmObjectProperties={actions.fetchCrmObjectProperties}
      context={context}
      runServerless={runServerlessFunction}
      sendAlert={actions.addAlert}
    />
  )
);
