import type { CrmContext } from '@hubspot/ui-extensions';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  createMockActions,
  createMockContext,
  mockHubSpotCardConfig,
} from '../../test-utils/mocks';
import type { CardResponse } from '../../types/response';

const mockLogger = {
  error: vi.fn(),
  log: vi.fn(),
  warn: vi.fn(),
};

const mockHubspotFetch = vi.fn();

vi.mock('@hubspot/ui-extensions', () => ({
  hubspot: {
    fetch: (...args: unknown[]) => mockHubspotFetch(...args),
  },
  logger: mockLogger,
}));

const { fetchFromTargetUrl } = await import('../fetchFromTargetUrl');

describe('fetchFromTargetUrl', () => {
  const mockCardResponse: CardResponse = {
    results: [
      {
        objectId: 123,
        title: 'Test Object',
        properties: [{ label: 'Name', value: 'John Doe', dataType: 'STRING' }],
      },
    ],
  };

  const createMockActionsWithCustomFetch = (
    fetchCrmObjectProperties = vi.fn().mockResolvedValue({})
  ) => ({
    ...createMockActions(),
    fetchCrmObjectProperties,
  });

  beforeEach(() => {
    vi.clearAllMocks();
    mockHubspotFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockCardResponse),
    });
  });

  describe('successful fetch', () => {
    it('fetches data with CRM properties for contacts object type', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 111, objectTypeId: '0-1' },
      });
      const fetchCrmObjectProperties = vi.fn().mockResolvedValue({
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@example.com',
      });
      const mockActions = createMockActionsWithCustomFetch(
        fetchCrmObjectProperties
      );

      const result = await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(fetchCrmObjectProperties).toHaveBeenCalledWith([
        'firstname',
        'lastname',
        'email',
      ]);
      expect(mockHubspotFetch).toHaveBeenCalledWith(
        expect.stringContaining('https://example.com/api/data'),
        expect.objectContaining({ method: 'GET', timeout: 5000 })
      );
      expect(result).toEqual(mockCardResponse);
    });

    it('fetches data with CRM properties for companies object type', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 222, objectTypeId: '0-2' },
      });
      const fetchCrmObjectProperties = vi.fn().mockResolvedValue({
        name: 'Acme Inc',
        domain: 'acme.com',
      });
      const mockActions = createMockActionsWithCustomFetch(
        fetchCrmObjectProperties
      );

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(fetchCrmObjectProperties).toHaveBeenCalledWith(['name', 'domain']);
    });

    it('fetches data with CRM properties for deals object type', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 333, objectTypeId: '0-3' },
      });
      const fetchCrmObjectProperties = vi.fn().mockResolvedValue({
        amount: '1000',
        stage: 'closed',
      });
      const mockActions = createMockActionsWithCustomFetch(
        fetchCrmObjectProperties
      );

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(fetchCrmObjectProperties).toHaveBeenCalledWith([
        'amount',
        'stage',
      ]);
    });

    it('fetches data with CRM properties for tickets object type', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 444, objectTypeId: '0-5' },
      });
      const fetchCrmObjectProperties = vi.fn().mockResolvedValue({
        subject: 'Help needed',
        status: 'open',
        priority: 'high',
      });
      const mockActions = createMockActionsWithCustomFetch(
        fetchCrmObjectProperties
      );

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(fetchCrmObjectProperties).toHaveBeenCalledWith([
        'subject',
        'status',
        'priority',
      ]);
    });

    it('includes CRM properties in query parameters', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 111, objectTypeId: '0-1' },
      });
      const fetchCrmObjectProperties = vi.fn().mockResolvedValue({
        firstname: 'John',
        email: 'john@example.com',
      });
      const mockActions = createMockActionsWithCustomFetch(
        fetchCrmObjectProperties
      );

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      const fetchCall = mockHubspotFetch.mock.calls[0][0] as string;
      expect(fetchCall).toContain('firstname=John');
      expect(fetchCall).toContain('email=john%40example.com');
    });

    it('includes context data in query parameters', async () => {
      const mockContext = createMockContext();
      const mockActions = createMockActions();

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      const fetchCall = mockHubspotFetch.mock.calls[0][0] as string;
      expect(fetchCall).toContain('userId=12345');
      expect(fetchCall).toContain('userEmail=test%40example.com');
      expect(fetchCall).toContain('associatedObjectId=111');
      expect(fetchCall).toContain('portalId=67890');
    });
  });

  describe('object type handling', () => {
    it('does not fetch CRM properties for unknown object type', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 555, objectTypeId: '0-99' },
      });
      const fetchCrmObjectProperties = vi.fn();
      const mockActions = createMockActionsWithCustomFetch(
        fetchCrmObjectProperties
      );

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(fetchCrmObjectProperties).not.toHaveBeenCalled();
    });

    it('does not fetch CRM properties when objectTypeId is missing', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 111 } as CrmContext['crm'],
      });
      const fetchCrmObjectProperties = vi.fn();
      const mockActions = createMockActionsWithCustomFetch(
        fetchCrmObjectProperties
      );

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(fetchCrmObjectProperties).not.toHaveBeenCalled();
    });

    it('does not fetch CRM properties when propertiesToSend is empty', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 111, objectTypeId: '0-1' },
      });
      const fetchCrmObjectProperties = vi.fn();
      const mockActions = createMockActionsWithCustomFetch(
        fetchCrmObjectProperties
      );
      const configWithEmptyProperties = {
        ...mockHubSpotCardConfig,
        propertiesToSend: {
          contacts: [],
          companies: [],
          deals: [],
          tickets: [],
        },
      };

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: configWithEmptyProperties,
      });

      expect(fetchCrmObjectProperties).not.toHaveBeenCalled();
    });
  });

  describe('error handling', () => {
    it('logs error and continues when fetchCrmObjectProperties fails', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 111, objectTypeId: '0-1' },
      });
      const fetchCrmObjectProperties = vi
        .fn()
        .mockRejectedValue(new Error('CRM fetch failed'));
      const mockActions = createMockActionsWithCustomFetch(
        fetchCrmObjectProperties
      );

      const result = await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(mockLogger.error).toHaveBeenCalledWith(
        'Failed to fetch CRM properties: CRM fetch failed'
      );
      expect(mockHubspotFetch).toHaveBeenCalled();
      expect(result).toEqual(mockCardResponse);
    });

    it('logs error with string message when fetchCrmObjectProperties fails with non-Error', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 111, objectTypeId: '0-1' },
      });
      const fetchCrmObjectProperties = vi
        .fn()
        .mockRejectedValue('String error');
      const mockActions = createMockActionsWithCustomFetch(
        fetchCrmObjectProperties
      );

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(mockLogger.error).toHaveBeenCalledWith(
        'Failed to fetch CRM properties: String error'
      );
    });

    it('throws error when fetch response is not ok', async () => {
      const mockContext = createMockContext();
      const mockActions = createMockActions();
      mockHubspotFetch.mockResolvedValue({
        ok: false,
        status: 500,
      });

      await expect(
        fetchFromTargetUrl({
          context: mockContext,
          actions: mockActions,
          config: mockHubSpotCardConfig,
        })
      ).rejects.toThrow('HTTP error! status: 500');
    });

    it('throws error when fetch response is 404', async () => {
      const mockContext = createMockContext();
      const mockActions = createMockActions();
      mockHubspotFetch.mockResolvedValue({
        ok: false,
        status: 404,
      });

      await expect(
        fetchFromTargetUrl({
          context: mockContext,
          actions: mockActions,
          config: mockHubSpotCardConfig,
        })
      ).rejects.toThrow('HTTP error! status: 404');
    });
  });

  describe('URL construction', () => {
    it('constructs URL with query parameters', async () => {
      const mockContext = createMockContext();
      const mockActions = createMockActions();

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      const fetchCall = mockHubspotFetch.mock.calls[0][0] as string;
      expect(fetchCall).toMatch(/^https:\/\/example\.com\/api\/data\?/);
    });

    it('constructs URL without query parameters when context is empty', async () => {
      const mockContext = {} as CrmContext;
      const mockActions = createMockActions();

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      const fetchCall = mockHubspotFetch.mock.calls[0][0] as string;
      expect(fetchCall).toBe('https://example.com/api/data');
    });

    it('uses config dataRequestUrl as base URL', async () => {
      const mockContext = createMockContext();
      const mockActions = createMockActions();
      const customConfig = {
        ...mockHubSpotCardConfig,
        dataRequestUrl: 'https://custom-api.example.com/cards',
      };

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: customConfig,
      });

      const fetchCall = mockHubspotFetch.mock.calls[0][0] as string;
      expect(fetchCall).toContain('https://custom-api.example.com/cards');
    });
  });

  describe('fetch options', () => {
    it('uses GET method', async () => {
      const mockContext = createMockContext();
      const mockActions = createMockActions();

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(mockHubspotFetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ method: 'GET' })
      );
    });

    it('sets timeout to 5000ms', async () => {
      const mockContext = createMockContext();
      const mockActions = createMockActions();

      await fetchFromTargetUrl({
        context: mockContext,
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(mockHubspotFetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ timeout: 5000 })
      );
    });
  });

  describe('actions handling', () => {
    it('handles missing fetchCrmObjectProperties action gracefully', async () => {
      const mockContext = createMockContext({
        crm: { objectId: 111, objectTypeId: '0-1' },
      });
      const mockActions = {
        ...createMockActions(),
        fetchCrmObjectProperties: undefined,
      };

      const result = await fetchFromTargetUrl({
        context: mockContext,
        // @ts-expect-error testing missing action
        actions: mockActions,
        config: mockHubSpotCardConfig,
      });

      expect(mockHubspotFetch).toHaveBeenCalled();
      expect(result).toEqual(mockCardResponse);
    });
  });
});
