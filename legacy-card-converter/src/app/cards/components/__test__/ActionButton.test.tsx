import { Button, Modal } from '@hubspot/ui-extensions';
import { createRenderer } from '@hubspot/ui-extensions/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  mockAction,
  mockActionWithoutConfirmation,
  mockHubSpotCardConfig,
} from '../../test-utils/mocks';
import * as handleActionModule from '../../utils/handleActionOnClick';
import { ActionButton } from '../ActionButton';

vi.spyOn(handleActionModule, 'handleActionOnClick');

const { mockUseCardConfig } = vi.hoisted(() => ({
  mockUseCardConfig: vi.fn(),
}));

vi.mock('../../contexts', () => ({
  useCardConfig: mockUseCardConfig,
  useCardLocation: vi.fn(() => 'crm.record.tab'),
}));

describe('ActionButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCardConfig.mockReturnValue(mockHubSpotCardConfig);
  });
  it('renders button when action.type = CONFIRMATION_ACTION_HOOK', () => {
    const { render, find } = createRenderer('crm.record.tab');

    render(<ActionButton action={mockAction}>Confirm</ActionButton>);

    const actionButton = find(Button);
    expect(actionButton.props.variant).toEqual('secondary');
    expect(actionButton.text).toEqual('Confirm');
    expect(find(Modal)).toBeDefined();

    expect(actionButton.props.onClick).toBeUndefined();
    expect(handleActionModule.handleActionOnClick).not.toHaveBeenCalled();
  });

  it('renders button without modal when action.type is not CONFIRMATION_ACTION_HOOK', () => {
    const { render, find, maybeFind } = createRenderer('crm.record.tab');

    render(
      <ActionButton action={mockActionWithoutConfirmation}>
        Execute
      </ActionButton>
    );

    const actionButton = find(Button);
    expect(actionButton.props.variant).toEqual('secondary');
    expect(actionButton.text).toEqual('Execute');
    expect(maybeFind(Modal)).toBeNull();

    actionButton.trigger('onClick');
    expect(handleActionModule.handleActionOnClick).toHaveBeenCalled();
  });
});
