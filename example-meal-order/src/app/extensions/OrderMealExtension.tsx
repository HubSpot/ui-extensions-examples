import React from 'react';
import { hubspot } from '@hubspot/ui-extensions';
import { OrderMealCard } from './components/OrderMealCard';

hubspot.extend<'crm.record.tab'>(({ context, actions }) => (
  <OrderMealCard
    fetchCrmObjectProperties={actions.fetchCrmObjectProperties}
    context={context}
    sendAlert={actions.addAlert}
  />
));
