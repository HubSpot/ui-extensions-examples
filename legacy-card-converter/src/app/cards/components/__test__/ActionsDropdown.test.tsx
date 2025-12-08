import { Dropdown, Modal } from '@hubspot/ui-extensions';
import { createRenderer } from '@hubspot/ui-extensions/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  mockAction,
  mockActionWithoutConfirmation,
  mockHubSpotCardConfig,
} from '../../test-utils/mocks';
import type { CardAction } from '../../types/response';
import * as handleActionModule from '../../utils/handleActionOnClick';
import { ActionsDropdown } from '../ActionsDropdown';

vi.spyOn(handleActionModule, 'handleActionOnClick');

const { mockUseCardConfig } = vi.hoisted(() => ({
  mockUseCardConfig: vi.fn(),
}));

vi.mock('../../contexts', () => ({
  useCardConfig: mockUseCardConfig,
  useCardLocation: vi.fn(() => 'crm.record.sidebar'),
}));

describe('ActionsDropdown', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCardConfig.mockReturnValue(mockHubSpotCardConfig);
  });
  it('renders null when no actions are provided', () => {
    const { render, maybeFind } = createRenderer('crm.record.sidebar');

    render(<ActionsDropdown actions={[]} />);

    expect(maybeFind(Dropdown)).toBeNull();
  });

  it('renders dropdown with default variant when actions are provided', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    render(<ActionsDropdown actions={[mockActionWithoutConfirmation]} />);

    const dropdown = find(Dropdown);
    expect(dropdown.props.buttonText).toEqual('Actions');
    expect(dropdown.props.variant).toEqual('transparent');
  });

  it('renders dropdown with custom variant and buttonSize', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    render(
      <ActionsDropdown
        actions={[mockActionWithoutConfirmation]}
        variant='primary'
        buttonSize='lg'
      />
    );

    const dropdown = find(Dropdown);
    expect(dropdown.props.variant).toEqual('primary');
    expect(dropdown.props.buttonSize).toEqual('lg');
  });

  it('renders dropdown items for each action', () => {
    const { render, findAll } = createRenderer('crm.record.sidebar');

    const actions: CardAction[] = [
      {
        type: 'ACTION_HOOK',
        label: 'Action 1',
        uri: 'https://example.com/action-1',
      },
      {
        type: 'ACTION_HOOK',
        label: 'Action 2',
        uri: 'https://example.com/action-2',
      },
      {
        type: 'CONFIRMATION_ACTION_HOOK',
        label: 'Action 3',
        confirmationMessage: 'Confirm?',
      },
    ];

    render(<ActionsDropdown actions={actions} />);

    const dropdownItems = findAll(Dropdown.ButtonItem);
    expect(dropdownItems.length).toEqual(3);
    expect(dropdownItems[0].text).toEqual('Action 1');
    expect(dropdownItems[1].text).toEqual('Action 2');
    expect(dropdownItems[2].text).toEqual('Action 3');
  });

  it('renders confirmation modal for CONFIRMATION_ACTION_HOOK', () => {
    const { render, maybeFind } = createRenderer('crm.record.sidebar');

    render(<ActionsDropdown actions={[mockAction]} />);

    const modal = maybeFind(Modal);
    expect(modal).not.toBeNull();
    expect(modal?.props.title).toEqual(mockAction.label);
    expect(modal?.props.id).toContain('confirmation-modal');
  });

  it('does not render modal for non-confirmation actions', () => {
    const { render, maybeFind } = createRenderer('crm.record.sidebar');

    render(<ActionsDropdown actions={[mockActionWithoutConfirmation]} />);

    const modal = maybeFind(Modal);
    expect(modal).toBeNull();
  });

  it('calls handleActionOnClick when clicking non-confirmation action', () => {
    const { render, find, mocks } = createRenderer('crm.record.sidebar');

    render(<ActionsDropdown actions={[mockActionWithoutConfirmation]} />);

    const dropdownItem = find(Dropdown.ButtonItem);
    dropdownItem.trigger('onClick');

    expect(handleActionModule.handleActionOnClick).toHaveBeenCalledWith(
      mockActionWithoutConfirmation,
      mocks.context,
      mocks.actions,
      undefined,
      mockHubSpotCardConfig
    );
  });

  it('does not call handleActionOnClick immediately for CONFIRMATION_ACTION_HOOK', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    vi.clearAllMocks();

    render(<ActionsDropdown actions={[mockAction]} />);

    const dropdownItem = find(Dropdown.ButtonItem);
    dropdownItem.trigger('onClick');

    expect(handleActionModule.handleActionOnClick).not.toHaveBeenCalled();
  });

  it('passes objectTitle to handleActionOnClick', () => {
    const { render, find, mocks } = createRenderer('crm.record.sidebar');

    const objectTitle = 'Test Object';

    render(
      <ActionsDropdown
        actions={[mockActionWithoutConfirmation]}
        objectTitle={objectTitle}
      />
    );

    const dropdownItem = find(Dropdown.ButtonItem);
    dropdownItem.trigger('onClick');

    expect(handleActionModule.handleActionOnClick).toHaveBeenCalledWith(
      mockActionWithoutConfirmation,
      mocks.context,
      mocks.actions,
      objectTitle,
      mockHubSpotCardConfig
    );
  });

  it('handles multiple actions with mixed types', () => {
    const { render, findAll, maybeFind } = createRenderer('crm.record.sidebar');

    const actions: CardAction[] = [
      mockActionWithoutConfirmation,
      mockAction,
      { type: 'IFRAME', label: 'Open Modal', uri: 'https://example.com/modal' },
    ];

    render(<ActionsDropdown actions={actions} />);

    const dropdownItems = findAll(Dropdown.ButtonItem);
    expect(dropdownItems.length).toEqual(3);

    const modal = maybeFind(Modal);
    expect(modal).not.toBeNull();
  });

  it('renders multiple confirmation modals for multiple confirmation actions', () => {
    const { render, findAll } = createRenderer('crm.record.sidebar');

    const actions: CardAction[] = [
      {
        type: 'CONFIRMATION_ACTION_HOOK',
        label: 'Delete Action',
        confirmationMessage: 'Are you sure you want to delete?',
        httpMethod: 'DELETE',
      },
      {
        type: 'CONFIRMATION_ACTION_HOOK',
        label: 'Update Action',
        confirmationMessage: 'Are you sure you want to update?',
      },
    ];

    render(<ActionsDropdown actions={actions} />);

    const modals = findAll(Modal);
    expect(modals.length).toEqual(2);
    expect(modals[0].props.title).toEqual('Delete Action');
    expect(modals[0].props.variant).toEqual('danger');
    expect(modals[1].props.title).toEqual('Update Action');
    expect(modals[1].props.variant).toEqual('default');
  });

  it('renders null when actions is undefined', () => {
    const { render, maybeFind } = createRenderer('crm.record.sidebar');

    render(<ActionsDropdown actions={undefined as unknown as CardAction[]} />);

    expect(maybeFind(Dropdown)).toBeNull();
  });

  it('calls handleActionOnClick for IFRAME action type', () => {
    const { render, find, mocks } = createRenderer('crm.record.sidebar');

    vi.clearAllMocks();

    const iframeAction: CardAction = {
      type: 'IFRAME',
      label: 'Open External Page',
      uri: 'https://example.com/iframe',
      width: 800,
      height: 600,
    };

    render(<ActionsDropdown actions={[iframeAction]} />);

    const dropdownItem = find(Dropdown.ButtonItem);
    dropdownItem.trigger('onClick');

    expect(handleActionModule.handleActionOnClick).toHaveBeenCalledWith(
      iframeAction,
      mocks.context,
      mocks.actions,
      undefined,
      mockHubSpotCardConfig
    );
  });

  it('renders action with empty label', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const actionWithEmptyLabel: CardAction = {
      type: 'ACTION_HOOK',
      label: '',
      uri: 'https://example.com/action',
    };

    render(<ActionsDropdown actions={[actionWithEmptyLabel]} />);

    const dropdownItem = find(Dropdown.ButtonItem);
    expect(dropdownItem.text).toBeNull();
  });
});
