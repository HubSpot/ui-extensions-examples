import React from 'react';
import { hubspot } from '@hubspot/ui-extensions';
import { OrderMealCard } from './components/OrderMealCard';

hubspot.extend<'crm.record.tab'>(({ runServerlessFunction, actions }) => (
  <OrderMealCard
    fetchCrmObjectProperties={actions.fetchCrmObjectProperties}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
    closeOverlay={actions.closeOverlay}
  />
));
