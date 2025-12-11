import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalFooter,
  Text,
  useExtensionActions,
} from '@hubspot/ui-extensions';

import { useCardLocation } from '../contexts';
import type { CardAction } from '../types/response';

export interface ConfirmationModalProps {
  action: CardAction;
  onConfirm: () => void;
  onCancel?: () => void;
}

export function ConfirmationModal({
  action,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  const cardLocation = useCardLocation();
  const hubspotActions = useExtensionActions<typeof cardLocation>();
  const confirmationMessage =
    action.confirmationMessage || 'Are you sure you want to proceed?';
  const confirmButtonText = action.confirmButtonText || 'Yes';
  const cancelButtonText = action.cancelButtonText || 'No';
  const isDangerous = action.httpMethod === 'DELETE';
  const modalId = `confirmation-modal-${action.label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <Modal
      id={modalId}
      title={action.label}
      width='sm'
      variant={isDangerous ? 'danger' : 'default'}
      testId={modalId}
    >
      <ModalBody>
        <Text>{confirmationMessage}</Text>
      </ModalBody>
      <ModalFooter>
        <Flex gap='sm' justify={isDangerous ? 'start' : 'end'}>
          {isDangerous ? (
            <>
              <Button
                variant='destructive'
                onClick={() => {
                  onConfirm();
                  if (hubspotActions?.closeOverlay) {
                    hubspotActions.closeOverlay(modalId);
                  }
                }}
              >
                {confirmButtonText}
              </Button>
              <Button
                variant='secondary'
                onClick={() => {
                  onCancel?.();
                  if (hubspotActions?.closeOverlay) {
                    hubspotActions.closeOverlay(modalId);
                  }
                }}
              >
                {cancelButtonText}
              </Button>
            </>
          ) : (
            <>
              <Button
                variant='secondary'
                onClick={() => {
                  onCancel?.();
                  if (hubspotActions?.closeOverlay) {
                    hubspotActions.closeOverlay(modalId);
                  }
                }}
              >
                {cancelButtonText}
              </Button>
              <Button
                variant='primary'
                onClick={() => {
                  onConfirm();
                  if (hubspotActions?.closeOverlay) {
                    hubspotActions.closeOverlay(modalId);
                  }
                }}
              >
                {confirmButtonText}
              </Button>
            </>
          )}
        </Flex>
      </ModalFooter>
    </Modal>
  );
}
