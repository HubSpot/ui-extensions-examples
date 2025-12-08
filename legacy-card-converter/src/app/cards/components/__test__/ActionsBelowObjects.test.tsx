import { Button, Dropdown, Flex, Icon } from '@hubspot/ui-extensions';
import { createRenderer } from '@hubspot/ui-extensions/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  mockAction,
  mockActionWithoutConfirmation,
  mockHubSpotCardConfig,
} from '../../test-utils/mocks';
import type { CardAction } from '../../types/response';
import { ActionsBelowObjects } from '../ActionsBelowObjects';

const { mockUseCardConfig } = vi.hoisted(() => ({
  mockUseCardConfig: vi.fn(),
}));

vi.mock('../../contexts', () => ({
  useCardConfig: mockUseCardConfig,
  useCardLocation: vi.fn(() => 'crm.record.sidebar'),
}));

const TEST_ID = 'actions-below-objects';

describe('ActionsBelowObjects', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCardConfig.mockReturnValue(mockHubSpotCardConfig);
  });
  it('renders null when no actions are provided', () => {
    const { render, maybeFindByTestId } = createRenderer('crm.record.sidebar');

    render(<ActionsBelowObjects />);

    expect(maybeFindByTestId(Flex, TEST_ID)).toBeNull();
  });

  it('renders null when secondaryActions is empty array', () => {
    const { render, maybeFindByTestId } = createRenderer('crm.record.sidebar');

    render(<ActionsBelowObjects secondaryActions={[]} />);

    expect(maybeFindByTestId(Flex, TEST_ID)).toBeNull();
  });

  it('renders only primary action when provided', () => {
    const { render, findByTestId, findAll, maybeFind } =
      createRenderer('crm.record.sidebar');

    render(
      <ActionsBelowObjects primaryAction={mockActionWithoutConfirmation} />
    );

    const flex = findByTestId(Flex, TEST_ID);
    expect(flex).not.toBeNull();
    expect(flex.props.gap).toEqual('md');
    expect(flex.props.justify).toEqual('center');

    const buttons = findAll(Button);
    expect(buttons.length).toEqual(1);
    expect(buttons[0].text).toEqual(mockActionWithoutConfirmation.label);

    expect(maybeFind(Dropdown)).toBeNull();
  });

  it('renders only secondary actions when provided', () => {
    const { render, findByTestId, find } = createRenderer('crm.record.sidebar');

    const secondaryActions: CardAction[] = [
      mockActionWithoutConfirmation,
      mockAction,
    ];

    render(<ActionsBelowObjects secondaryActions={secondaryActions} />);

    const flex = findByTestId(Flex, TEST_ID);
    expect(flex).not.toBeNull();

    const dropdown = find(Dropdown);
    expect(dropdown.props.buttonText).toEqual('Actions');
    expect(dropdown.props.buttonSize).toEqual('sm');
    expect(dropdown.props.variant).toEqual('secondary');

    const dropdownItems = dropdown.findAll(Dropdown.ButtonItem);
    expect(dropdownItems.length).toEqual(2);
  });

  it('renders only settings action when provided', () => {
    const { render, findByTestId, find, findAll, maybeFind } =
      createRenderer('crm.record.sidebar');

    const settingsAction: CardAction = {
      type: 'ACTION_HOOK',
      label: 'Settings',
      uri: 'https://example.com/settings',
    };

    render(<ActionsBelowObjects settingsAction={settingsAction} />);

    const flex = findByTestId(Flex, TEST_ID);
    expect(flex).not.toBeNull();

    const buttons = findAll(Button);
    expect(buttons.length).toEqual(1);

    const icon = find(Icon);
    expect(icon.props.name).toEqual('settings');
    expect(icon.props.screenReaderText).toEqual('Settings');

    expect(maybeFind(Dropdown)).toBeNull();
  });

  it('renders all three types of actions together', () => {
    const { render, findByTestId, find } = createRenderer('crm.record.sidebar');

    const settingsAction: CardAction = {
      type: 'ACTION_HOOK',
      label: 'Settings',
      uri: 'https://example.com/settings',
    };

    const secondaryActions: CardAction[] = [
      mockActionWithoutConfirmation,
      mockAction,
    ];

    render(
      <ActionsBelowObjects
        primaryAction={mockActionWithoutConfirmation}
        secondaryActions={secondaryActions}
        settingsAction={settingsAction}
      />
    );

    const flex = findByTestId(Flex, TEST_ID);
    expect(flex).not.toBeNull();

    const dropdown = find(Dropdown);
    expect(dropdown).toBeDefined();
    expect(dropdown.props.buttonText).toEqual('Actions');

    const icon = find(Icon);
    expect(icon.props.name).toEqual('settings');

    const flexButtons = flex.findAll(Button);
    expect(flexButtons.length).toBeGreaterThanOrEqual(2);
  });

  it('renders primary and secondary actions with config', () => {
    const { render, findByTestId, find } = createRenderer('crm.record.sidebar');

    const secondaryActions: CardAction[] = [mockActionWithoutConfirmation];

    render(
      <ActionsBelowObjects
        primaryAction={mockActionWithoutConfirmation}
        secondaryActions={secondaryActions}
      />
    );

    const flex = findByTestId(Flex, TEST_ID);
    expect(flex).not.toBeNull();

    const button = find(Button);
    expect(button).toBeDefined();
    expect(button.text).toEqual(mockActionWithoutConfirmation.label);

    const dropdown = find(Dropdown);
    expect(dropdown).toBeDefined();
    expect(dropdown.props.buttonText).toEqual('Actions');
  });

  it('renders primary and secondary actions without settings', () => {
    const { render, findByTestId, find, maybeFind } =
      createRenderer('crm.record.sidebar');

    const secondaryActions: CardAction[] = [mockAction];

    render(
      <ActionsBelowObjects
        primaryAction={mockActionWithoutConfirmation}
        secondaryActions={secondaryActions}
      />
    );

    const flex = findByTestId(Flex, TEST_ID);
    expect(flex).not.toBeNull();

    const dropdown = find(Dropdown);
    expect(dropdown).toBeDefined();
    expect(dropdown.props.buttonText).toEqual('Actions');

    expect(maybeFind(Icon)).toBeNull();
  });

  it('renders settings and secondary actions without primary', () => {
    const { render, findByTestId, find, findAll } =
      createRenderer('crm.record.sidebar');

    const settingsAction: CardAction = {
      type: 'ACTION_HOOK',
      label: 'Configure',
      uri: 'https://example.com/config',
    };

    const secondaryActions: CardAction[] = [mockActionWithoutConfirmation];

    render(
      <ActionsBelowObjects
        settingsAction={settingsAction}
        secondaryActions={secondaryActions}
      />
    );

    const flex = findByTestId(Flex, TEST_ID);
    expect(flex).not.toBeNull();

    const buttons = findAll(Button);
    expect(buttons.length).toEqual(1);

    const dropdown = find(Dropdown);
    expect(dropdown).toBeDefined();

    const icon = find(Icon);
    expect(icon.props.screenReaderText).toEqual('Configure');
  });

  it('renders primary and settings actions without secondary', () => {
    const { render, findByTestId, findAll, maybeFind } =
      createRenderer('crm.record.sidebar');

    const settingsAction: CardAction = {
      type: 'ACTION_HOOK',
      label: 'Settings',
      uri: 'https://example.com/settings',
    };

    render(
      <ActionsBelowObjects
        primaryAction={mockActionWithoutConfirmation}
        settingsAction={settingsAction}
      />
    );

    const flex = findByTestId(Flex, TEST_ID);
    expect(flex).not.toBeNull();

    const buttons = findAll(Button);
    expect(buttons.length).toEqual(2);

    expect(maybeFind(Dropdown)).toBeNull();
  });

  it('renders dropdown with correct button properties', () => {
    const { render, findByTestId, find } = createRenderer('crm.record.sidebar');

    const secondaryActions: CardAction[] = [
      mockActionWithoutConfirmation,
      mockAction,
    ];

    render(<ActionsBelowObjects secondaryActions={secondaryActions} />);

    const flex = findByTestId(Flex, TEST_ID);
    expect(flex).not.toBeNull();

    const dropdown = find(Dropdown);
    expect(dropdown.props.buttonText).toEqual('Actions');
    expect(dropdown.props.buttonSize).toEqual('sm');
    expect(dropdown.props.variant).toEqual('secondary');

    const dropdownItems = dropdown.findAll(Dropdown.ButtonItem);
    expect(dropdownItems.length).toEqual(2);
  });

  it('renders primary action button with correct text', () => {
    const { render, findByTestId, find } = createRenderer('crm.record.sidebar');

    render(
      <ActionsBelowObjects primaryAction={mockActionWithoutConfirmation} />
    );

    const flex = findByTestId(Flex, TEST_ID);
    expect(flex).not.toBeNull();

    const button = find(Button);
    expect(button.text).toEqual(mockActionWithoutConfirmation.label);
    expect(button.props.variant).toEqual('secondary');
    expect(button.props.size).toEqual('sm');
  });
});
