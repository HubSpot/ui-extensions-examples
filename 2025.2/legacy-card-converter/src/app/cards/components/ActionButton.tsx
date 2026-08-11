import {
  Button,
  useExtensionActions,
  useExtensionContext,
} from '@hubspot/ui-extensions';
import type { ReactNode } from 'react';

import { useCardConfig, useCardLocation } from '../contexts';
import { ActionType } from '../types';
import type { CardAction } from '../types/response';
import { handleActionOnClick } from '../utils/handleActionOnClick';
import { ConfirmationModal } from './ConfirmationModal';

export interface ActionButtonProps {
  action: CardAction;
  objectTitle?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'small' | 'xs' | 'extra-small' | 'medium';
  children?: ReactNode;
}

function DirectActionButton({
  action,
  objectTitle,
  variant = 'secondary',
  size = 'sm',
  children,
}: ActionButtonProps) {
  const config = useCardConfig();
  const cardLocation = useCardLocation();
  const hubspotContext = useExtensionContext<typeof cardLocation>();
  const hubspotActions = useExtensionActions<typeof cardLocation>();
  const handleClick = () => {
    handleActionOnClick(
      action,
      hubspotContext,
      hubspotActions,
      objectTitle,
      config
    );
  };

  return (
    <Button variant={variant} size={size} onClick={handleClick}>
      {children || action.label}
    </Button>
  );
}

function ConfirmationActionButton({
  action,
  objectTitle,
  variant = 'secondary',
  size = 'sm',
  children,
}: ActionButtonProps) {
  const config = useCardConfig();
  const cardLocation = useCardLocation();
  const hubspotContext = useExtensionContext<typeof cardLocation>();
  const hubspotActions = useExtensionActions<typeof cardLocation>();
  const handleConfirm = () => {
    handleActionOnClick(
      action,
      hubspotContext,
      hubspotActions,
      objectTitle,
      config
    );
  };

  const overlay = (
    <ConfirmationModal action={action} onConfirm={handleConfirm} />
  );

  return (
    <Button variant={variant} size={size} overlay={overlay}>
      {children || action.label}
    </Button>
  );
}

export function ActionButton(props: ActionButtonProps) {
  if (props.action.type === ActionType.CONFIRMATION_ACTION_HOOK) {
    return <ConfirmationActionButton {...props} />;
  }

  return <DirectActionButton {...props} />;
}
