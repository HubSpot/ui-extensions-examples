import { Flex, Icon } from '@hubspot/ui-extensions';

import type { CardAction } from '../types/response';
import { ActionButton } from './ActionButton';
import { ActionsDropdown } from './ActionsDropdown';

export interface ActionsBelowObjectsProps {
  settingsAction?: CardAction;
  primaryAction?: CardAction;
  secondaryActions?: CardAction[];
}

export function ActionsBelowObjects({
  settingsAction,
  primaryAction,
  secondaryActions,
}: ActionsBelowObjectsProps) {
  if (
    !settingsAction &&
    !primaryAction &&
    (!secondaryActions || secondaryActions.length === 0)
  ) {
    return null;
  }

  return (
    <Flex gap='md' justify='center' testId='actions-below-objects'>
      {primaryAction && <ActionButton action={primaryAction} />}

      {secondaryActions && secondaryActions.length > 0 && (
        <ActionsDropdown
          actions={secondaryActions}
          buttonSize='sm'
          variant='secondary'
        />
      )}

      {settingsAction && (
        <ActionButton action={settingsAction}>
          <Icon name='settings' screenReaderText={settingsAction.label} />
        </ActionButton>
      )}
    </Flex>
  );
}
