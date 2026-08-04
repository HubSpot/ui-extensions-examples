import { hubspot } from '@hubspot/ui-extensions';

import { LegacyCardContent } from './components/LegacyCardContent';
import { ValidationErrorUI } from './components/ValidationErrorUI';
import { CardConfigProvider, CardLocationProvider } from './contexts';
import { createCardConfig } from './definition';
// To switch to another definition, replace this import with your own definition file.
// To have more than one legacy CRM Card, you can copy this file, update the import to a secondary defintion, then create a new hsmeta config file to point to the secondary entrypoint.
import definitionData from './definition/DEFINITION.json';
import type { CardDefinition, CardLocationValue } from './types';

hubspot.extend<'crm.record.sidebar' | 'helpdesk.sidebar'>(({ context }) => (
  <LegacyCardConverter cardLocation={context.location as CardLocationValue} />
));

interface LegacyCardConverterProps {
  cardLocation: CardLocationValue;
  cardConfigResult?: ReturnType<typeof createCardConfig>;
}

export const LegacyCardConverter = ({
  cardLocation,
  cardConfigResult = createCardConfig(definitionData as CardDefinition),
}: LegacyCardConverterProps) => {
  if (!cardConfigResult.success) {
    return <ValidationErrorUI errorMessages={cardConfigResult.errorMessages} />;
  }

  return (
    <CardLocationProvider cardLocation={cardLocation}>
      <CardConfigProvider cardConfig={cardConfigResult.cardConfig}>
        <LegacyCardContent />
      </CardConfigProvider>
    </CardLocationProvider>
  );
};
