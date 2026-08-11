import {
  Dropdown,
  useExtensionActions,
  useExtensionContext,
} from '@hubspot/ui-extensions';

import { useCardConfig, useCardLocation } from '../contexts';
import { ActionType } from '../types';
import type { CardAction } from '../types/response';
import { handleActionOnClick } from '../utils/handleActionOnClick';
import { ConfirmationModal } from './ConfirmationModal';

export interface ActionsDropdownProps {
  actions: CardAction[];
  objectTitle?: string;
  buttonSize?: 'sm' | 'md' | 'lg';
  variant?: 'transparent' | 'primary' | 'secondary';
}

export function ActionsDropdown({
  actions,
  objectTitle,
  buttonSize,
  variant = 'transparent',
}: ActionsDropdownProps) {
  const config = useCardConfig();
  const cardLocation = useCardLocation();
  const hubspotContext = useExtensionContext<typeof cardLocation>();
  const hubspotActions = useExtensionActions<typeof cardLocation>();

  if (!actions || actions.length === 0) {
    return null;
  }

  return (
    <Dropdown buttonText='Actions' variant={variant} buttonSize={buttonSize}>
      {actions.map((action, index) => {
        const handleClick = () => {
          if (action.type !== ActionType.CONFIRMATION_ACTION_HOOK) {
            handleActionOnClick(
              action,
              hubspotContext,
              hubspotActions,
              objectTitle,
              config
            );
          }
        };

        const handleConfirm = () => {
          handleActionOnClick(
            action,
            hubspotContext,
            hubspotActions,
            objectTitle,
            config
          );
        };

        const overlay =
          action.type === ActionType.CONFIRMATION_ACTION_HOOK ? (
            <ConfirmationModal action={action} onConfirm={handleConfirm} />
          ) : undefined;

        return (
          <Dropdown.ButtonItem
            key={index}
            overlay={overlay}
            onClick={handleClick}
          >
            {action.label}
          </Dropdown.ButtonItem>
        );
      })}
    </Dropdown>
  );
}
