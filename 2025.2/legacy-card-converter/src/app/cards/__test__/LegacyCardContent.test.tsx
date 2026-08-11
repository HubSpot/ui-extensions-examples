import {
  Button,
  Dropdown,
  Flex,
  Icon,
  LoadingSpinner,
  Text,
  Tile,
} from '@hubspot/ui-extensions';
import { createRenderer } from '@hubspot/ui-extensions/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { LegacyCardContent } from '../components/LegacyCardContent';
import { mockHubSpotCardConfig } from '../test-utils/mocks';

const { mockUseFetchLegacyCardData, mockUseCardConfig } = vi.hoisted(() => ({
  mockUseFetchLegacyCardData: vi.fn(),
  mockUseCardConfig: vi.fn(),
}));

vi.mock('../hooks/useFetchLegacyCardData', () => ({
  useFetchLegacyCardData: mockUseFetchLegacyCardData,
}));

vi.mock('../contexts', () => ({
  useCardConfig: mockUseCardConfig,
  useCardLocation: vi.fn(() => 'crm.record.sidebar'),
}));

describe('LegacyCardContent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCardConfig.mockReturnValue(mockHubSpotCardConfig);
  });

  it('shows loading state initially', () => {
    mockUseFetchLegacyCardData.mockReturnValue({
      status: 'loading',
    });

    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<LegacyCardContent />);

    const spinner = findByTestId(LoadingSpinner, 'cardContentLoading');
    expect(spinner).toBeDefined();
    expect(spinner.props.label).toBe('Fetching data...');
  });

  it('renders data successfully and shows content', async () => {
    const mockData = {
      results: [
        {
          objectId: 123,
          title: 'Test Object 1',
          properties: [
            {
              label: 'Name',
              dataType: 'STRING',
              value: 'John Doe',
            },
          ],
        },
        {
          objectId: 456,
          title: 'Test Object 2',
          properties: [],
        },
      ],
    };

    mockUseFetchLegacyCardData.mockReturnValue({
      status: 'success',
      data: mockData,
    });

    const { render, findByTestId, maybeFind } =
      createRenderer('crm.record.sidebar');

    render(<LegacyCardContent />);

    await vi.waitFor(() => {
      expect(maybeFind(LoadingSpinner)).toBeNull();
    });

    expect(findByTestId(Text, 'propertyDisplayValue-name').text).toEqual(
      'John Doe'
    );
  });

  it('renders with actions from response', async () => {
    const mockData = {
      results: [],
      primaryAction: {
        type: 'ACTION_HOOK',
        label: 'Primary Action',
        uri: 'https://example.com/primary',
      },
      secondaryActions: [
        {
          type: 'ACTION_HOOK',
          label: 'Secondary Action',
          uri: 'https://example.com/secondary',
        },
      ],
      settingsAction: {
        type: 'IFRAME',
        label: 'Settings',
        uri: 'https://example.com/settings',
      },
    };

    mockUseFetchLegacyCardData.mockReturnValue({
      status: 'success',
      data: mockData,
    });

    const { render, maybeFind, findByTestId, find } =
      createRenderer('crm.record.sidebar');

    render(<LegacyCardContent />);

    await vi.waitFor(() => {
      expect(maybeFind(LoadingSpinner)).toBeNull();
    });

    const actionsContainer = findByTestId(Flex, 'actions-below-objects');
    expect(actionsContainer).toBeDefined();

    const primaryButton = find(Button);
    expect(primaryButton.text).toEqual('Primary Action');

    const dropdown = find(Dropdown);
    expect(dropdown.props.buttonText).toEqual('Actions');

    const settingsIcon = find(Icon);
    expect(settingsIcon.props.name).toEqual('settings');
    expect(settingsIcon.props.screenReaderText).toEqual('Settings');
  });

  it('renders when results array is empty', async () => {
    const mockData = {
      results: [],
    };

    mockUseFetchLegacyCardData.mockReturnValue({
      status: 'success',
      data: mockData,
    });

    const { render, maybeFind, maybeFindByTestId } =
      createRenderer('crm.record.sidebar');

    render(<LegacyCardContent />);

    await vi.waitFor(() => {
      expect(maybeFind(LoadingSpinner)).toBeNull();
    });

    expect(maybeFind(Tile)).toBeNull();
    expect(maybeFindByTestId(Flex, 'actions-below-objects')).toBeNull();
  });

  it('shows error state when fetch fails with Error', async () => {
    const errorMessage = 'Network error occurred';
    mockUseFetchLegacyCardData.mockReturnValue({
      status: 'error',
      error: errorMessage,
    });

    const { render, maybeFind, findByTestId } =
      createRenderer('crm.record.sidebar');

    render(<LegacyCardContent />);

    await vi.waitFor(() => {
      expect(maybeFind(LoadingSpinner)).toBeNull();
    });

    expect(findByTestId(Flex, 'fetchConfigErrorMessage')).toBeDefined();
  });

  it('shows error state when fetch fails with non-Error object', async () => {
    mockUseFetchLegacyCardData.mockReturnValue({
      status: 'error',
      error: 'Failed to fetch data',
    });

    const { render, findByTestId, maybeFind } =
      createRenderer('crm.record.sidebar');

    render(<LegacyCardContent />);

    await vi.waitFor(() => {
      expect(maybeFind(LoadingSpinner)).toBeNull();
    });

    expect(findByTestId(Flex, 'fetchConfigErrorMessage')).toBeDefined();
  });

  it('calls useFetchLegacyCardData with correct arguments', async () => {
    const mockData = {
      results: [],
    };

    mockUseFetchLegacyCardData.mockReturnValue({
      status: 'success',
      data: mockData,
    });

    const { render } = createRenderer('crm.record.sidebar');

    render(<LegacyCardContent />);

    await vi.waitFor(() => {
      expect(mockUseFetchLegacyCardData).toHaveBeenCalledTimes(1);
    });
    expect(mockUseFetchLegacyCardData).toHaveBeenCalledWith();
  });
});
