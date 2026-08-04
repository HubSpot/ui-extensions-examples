// @vitest-environment jsdom
import { renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createCardConfig } from '../../definition/CardConfig';
import { mockHubspotActions, mockHubspotContext } from '../../test-utils/mocks';

const mockFetchFromTargetUrl = vi.fn();
const mockLogger = {
  error: vi.fn(),
  log: vi.fn(),
  warn: vi.fn(),
};

vi.mock('../../utils/fetchFromTargetUrl', () => ({
  fetchFromTargetUrl: mockFetchFromTargetUrl,
}));

const { mockUseCardConfig } = vi.hoisted(() => ({
  mockUseCardConfig: vi.fn(),
}));

vi.mock('@hubspot/ui-extensions', () => ({
  logger: mockLogger,
  useExtensionContext: () => mockHubspotContext,
  useExtensionActions: () => mockHubspotActions,
}));

vi.mock('../../contexts', () => ({
  useCardConfig: mockUseCardConfig,
  useCardLocation: () => 'crm.record.sidebar',
}));

const { useFetchLegacyCardData } = await import('../useFetchLegacyCardData');

const configResult = createCardConfig({
  title: 'Test Card',
  fetch: {
    targetUrl: 'https://example.com/api',
    objectTypes: [
      { name: 'contacts', propertiesToSend: ['email', 'firstname'] },
    ],
  },
  display: {
    properties: [
      { name: 'email', label: 'Email', dataType: 'STRING', options: [] },
    ],
  },
  actions: {
    baseUrls: ['https://example.com'],
  },
});

if (!configResult.success) {
  throw new Error('Failed to create mock config');
}

const mockConfig = configResult.cardConfig;

describe('useFetchLegacyCardData', () => {
  beforeEach(() => {
    mockFetchFromTargetUrl.mockReset();
    mockLogger.error.mockReset();
    mockUseCardConfig.mockReturnValue(mockConfig);
  });

  it('should start with loading state', async () => {
    mockFetchFromTargetUrl.mockResolvedValue({ results: [] });

    const { result } = renderHook(() => useFetchLegacyCardData());

    await waitFor(() => {
      expect(result.current).toEqual({ status: 'loading' });
    });
  });

  it('should transition to success state when fetch succeeds', async () => {
    const mockData = {
      results: [
        {
          objectId: 123,
          title: 'Test Object',
          properties: [],
        },
      ],
    };

    mockFetchFromTargetUrl.mockResolvedValue(mockData);

    const { result } = renderHook(() => useFetchLegacyCardData());

    await waitFor(() => {
      expect(result.current.status).toBe('success');
    });

    expect(result.current).toEqual({
      status: 'success',
      data: mockData,
    });
  });

  it('should transition to error state when fetch fails with Error', async () => {
    const errorMessage = 'Network error occurred';
    mockFetchFromTargetUrl.mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useFetchLegacyCardData());

    await waitFor(() => {
      expect(result.current.status).toBe('error');
    });

    expect(result.current).toEqual({
      status: 'error',
      error: errorMessage,
    });
  });

  it('should transition to error state when fetch fails with non-Error', async () => {
    mockFetchFromTargetUrl.mockRejectedValue('Something went wrong');

    const { result } = renderHook(() => useFetchLegacyCardData());

    await waitFor(() => {
      expect(result.current.status).toBe('error');
    });

    expect(result.current).toEqual({
      status: 'error',
      error: 'Failed to fetch data',
    });
  });

  it('should call fetchFromTargetUrl with correct parameters', async () => {
    mockFetchFromTargetUrl.mockResolvedValue({ results: [] });

    renderHook(() => useFetchLegacyCardData());

    await waitFor(() => {
      expect(mockFetchFromTargetUrl).toHaveBeenCalledTimes(1);
    });

    expect(mockFetchFromTargetUrl).toHaveBeenCalledWith({
      context: mockHubspotContext,
      actions: mockHubspotActions,
      config: mockConfig,
    });
  });
});
