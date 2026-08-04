import React from 'react';
import { hubspot } from '@hubspot/ui-extensions';
import { OrderMealCard } from './components/OrderMealCard';

hubspot.extend<'crm.record.tab'>(({ actions }) => (
  <OrderMealCard
    fetchCrmObjectProperties={actions.fetchCrmObjectProperties}
    sendAlert={actions.addAlert}
    closeOverlay={actions.closeOverlay}
  />
));
