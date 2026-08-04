import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalFooter,
  Text,
} from '@hubspot/ui-extensions';
import { createRenderer } from '@hubspot/ui-extensions/testing';
import { describe, expect, it, vi } from 'vitest';

import type { CardAction } from '../../types/response';
import { ConfirmationModal } from '../ConfirmationModal';

const getModalId = (label: string) =>
  `confirmation-modal-${label.replace(/\s+/g, '-').toLowerCase()}`;

describe('ConfirmationModal', () => {
  it('renders modal with default values', () => {
    const { render, findByTestId, find } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Confirm Action',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const modal = findByTestId(Modal, getModalId(action.label));
    expect(modal).not.toBeNull();
    expect(modal.props.title).toEqual('Confirm Action');
    expect(modal.props.width).toEqual('sm');
    expect(modal.props.variant).toEqual('default');

    const text = find(Text);
    expect(text.text).toEqual('Are you sure you want to proceed?');
  });

  it('renders modal with custom confirmation message', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Delete Item',
      confirmationMessage: 'Are you sure you want to delete this item?',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const text = find(Text);
    expect(text.text).toEqual('Are you sure you want to delete this item?');
  });

  it('renders modal with custom button text', () => {
    const { render, findAll } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Save Changes',
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const buttons = findAll(Button);
    expect(buttons.length).toEqual(2);
    expect(buttons[0].text).toEqual('Cancel');
    expect(buttons[1].text).toEqual('Save');
  });

  it('renders dangerous modal for DELETE action', () => {
    const { render, findByTestId, find } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Delete Record',
      httpMethod: 'DELETE',
      confirmButtonText: 'Delete',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const modal = findByTestId(Modal, getModalId(action.label));
    expect(modal.props.variant).toEqual('danger');

    const flex = find(Flex);
    expect(flex.props.justify).toEqual('start');
  });

  it('renders default modal for non-DELETE action', () => {
    const { render, findByTestId, find } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Update Record',
      httpMethod: 'POST',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const modal = findByTestId(Modal, getModalId(action.label));
    expect(modal.props.variant).toEqual('default');

    const flex = find(Flex);
    expect(flex.props.justify).toEqual('end');
  });

  it('renders destructive button first for dangerous actions', () => {
    const { render, findAll } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Delete Record',
      httpMethod: 'DELETE',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const buttons = findAll(Button);
    expect(buttons.length).toEqual(2);
    expect(buttons[0].props.variant).toEqual('destructive');
    expect(buttons[0].text).toEqual('Delete');
    expect(buttons[1].props.variant).toEqual('secondary');
    expect(buttons[1].text).toEqual('Cancel');
  });

  it('renders cancel button first for non-dangerous actions', () => {
    const { render, findAll } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Save Record',
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const buttons = findAll(Button);
    expect(buttons.length).toEqual(2);
    expect(buttons[0].props.variant).toEqual('secondary');
    expect(buttons[0].text).toEqual('Cancel');
    expect(buttons[1].props.variant).toEqual('primary');
    expect(buttons[1].text).toEqual('Save');
  });

  it('calls onConfirm and closeOverlay when confirm button is clicked', () => {
    const { render, findAll, mocks } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Confirm Action',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const buttons = findAll(Button);
    const confirmButton = buttons[1];

    confirmButton.trigger('onClick');

    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(mocks.actions.closeOverlay.called).toBe(true);
    expect(mocks.actions.closeOverlay.calls[0][0]).toEqual(
      getModalId(action.label)
    );
  });

  it('calls onCancel and closeOverlay when cancel button is clicked', () => {
    const { render, findAll, mocks } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Confirm Action',
    };

    const onConfirm = vi.fn();
    const onCancel = vi.fn();

    render(
      <ConfirmationModal
        action={action}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    );

    const buttons = findAll(Button);
    const cancelButton = buttons[0];

    cancelButton.trigger('onClick');

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(mocks.actions.closeOverlay.called).toBe(true);
    expect(mocks.actions.closeOverlay.calls[0][0]).toEqual(
      getModalId(action.label)
    );
  });

  it('does not call onCancel when cancel button is clicked if onCancel is not provided', () => {
    const { render, findAll, mocks } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Confirm Action',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const buttons = findAll(Button);
    const cancelButton = buttons[0];

    cancelButton.trigger('onClick');

    expect(mocks.actions.closeOverlay.called).toBe(true);
    expect(mocks.actions.closeOverlay.calls[0][0]).toEqual(
      getModalId(action.label)
    );
  });

  it('calls onConfirm for dangerous action confirm button', () => {
    const { render, findAll, mocks } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Delete Record',
      httpMethod: 'DELETE',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const buttons = findAll(Button);
    const confirmButton = buttons[0];

    confirmButton.trigger('onClick');

    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(mocks.actions.closeOverlay.called).toBe(true);
    expect(mocks.actions.closeOverlay.calls[0][0]).toEqual(
      getModalId(action.label)
    );
  });

  it('renders modal body and footer', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Confirm Action',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const modalBody = find(ModalBody);
    expect(modalBody).toBeDefined();

    const modalFooter = find(ModalFooter);
    expect(modalFooter).toBeDefined();
  });

  it('uses default button text when not provided', () => {
    const { render, findAll } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Confirm Action',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const buttons = findAll(Button);
    expect(buttons[0].text).toEqual('No');
    expect(buttons[1].text).toEqual('Yes');
  });

  it('renders Flex with correct gap', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: 'Confirm Action',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const flex = find(Flex);
    expect(flex.props.gap).toEqual('sm');
  });

  it('handles action with empty label', () => {
    const { render, findByTestId, find } = createRenderer('crm.record.sidebar');

    const action: CardAction = {
      type: 'CONFIRMATION_ACTION_HOOK',
      label: '',
    };

    const onConfirm = vi.fn();

    render(<ConfirmationModal action={action} onConfirm={onConfirm} />);

    const modal = findByTestId(Modal, getModalId(action.label));
    expect(modal).not.toBeNull();
    expect(modal.props.title).toEqual('');
    expect(modal.props.id).toEqual('confirmation-modal-');

    const text = find(Text);
    expect(text.text).toEqual('Are you sure you want to proceed?');
  });
});
