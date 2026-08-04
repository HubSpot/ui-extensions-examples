import { hubspot } from '@hubspot/ui-extensions';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  createMockActions,
  mockHubSpotCardConfig,
  mockHubspotContext,
} from '../../test-utils/mocks';
import { ActionType } from '../../types';
import type { CardAction } from '../../types/response';
import { handleActionOnClick } from '../handleActionOnClick';

vi.mock('@hubspot/ui-extensions', () => ({
  hubspot: {
    fetch: vi.fn(),
  },
}));

const mockHubspotFetch = vi.mocked(hubspot.fetch);

describe('handleActionOnClick', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  describe('IFRAME actions', () => {
    const iframeAction: CardAction = {
      type: ActionType.IFRAME,
      label: 'Open Settings',
      uri: 'https://example.com/settings',
      width: 800,
      height: 600,
    };

    it('opens iframe modal with correct parameters', async () => {
      const mockActions = createMockActions();

      await handleActionOnClick(
        iframeAction,
        mockHubspotContext,
        mockActions,
        'Test Object',
        mockHubSpotCardConfig
      );

      expect(mockActions.openIframeModal).toHaveBeenCalledWith(
        {
          uri: 'https://example.com/settings',
          width: 800,
          height: 600,
          title: 'Test Object - Open Settings',
          flush: false,
        },
        expect.any(Function)
      );
    });

    it('uses action label as title when objectTitle is not provided', async () => {
      const mockActions = createMockActions();

      await handleActionOnClick(
        iframeAction,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(mockActions.openIframeModal).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Open Settings' }),
        expect.any(Function)
      );
    });

    it('logs error when action URI is missing', async () => {
      const mockActions = createMockActions();
      const actionWithoutUri: CardAction = {
        type: ActionType.IFRAME,
        label: 'Open Settings',
      };

      await handleActionOnClick(
        actionWithoutUri,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(console.error).toHaveBeenCalledWith('IFRAME action missing URI');
      expect(mockActions.openIframeModal).not.toHaveBeenCalled();
    });
  });

  describe('ACTION_HOOK actions', () => {
    const actionHook: CardAction = {
      type: ActionType.ACTION_HOOK,
      label: 'Submit Data',
      uri: 'https://example.com/submit',
      httpMethod: 'POST',
    };

    beforeEach(() => {
      mockHubspotFetch.mockResolvedValue({
        ok: true,
        status: 200,
        json: vi.fn().mockResolvedValue({ success: true }),
      } as unknown as Response);
    });

    it('makes HTTP request with correct URL and method', async () => {
      const mockActions = createMockActions();

      await handleActionOnClick(
        actionHook,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(mockHubspotFetch).toHaveBeenCalledTimes(1);
      const [url, options] = mockHubspotFetch.mock.calls[0];
      expect(url).toContain('https://example.com/submit');
      expect(options?.method).toBe('POST');
    });

    it('includes context data in query parameters', async () => {
      const mockActions = createMockActions();
      const contextWithFullData = {
        user: { id: 12345, email: 'test@example.com', locale: 'en-US' },
        portal: { id: 67890, timezone: 'America/New_York' },
        crm: { objectId: 111, objectTypeId: '0-1' },
      } as typeof mockHubspotContext;

      await handleActionOnClick(
        actionHook,
        contextWithFullData,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      const [url] = mockHubspotFetch.mock.calls[0];
      expect(url).toContain('userId=12345');
      expect(url).toContain('userEmail=test%40example.com');
      expect(url).toContain('portalId=67890');
      expect(url).toContain('associatedObjectId=111');
      expect(url).toContain('associatedObjectType=CONTACT');
    });

    it('includes body for POST requests', async () => {
      const mockActions = createMockActions();

      await handleActionOnClick(
        actionHook,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      const [, options] = mockHubspotFetch.mock.calls[0];
      expect(options?.body).toBeDefined();
    });

    it('does not include body for GET requests', async () => {
      const mockActions = createMockActions();
      const getAction: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'Fetch Data',
        uri: 'https://example.com/data',
        httpMethod: 'GET',
      };

      await handleActionOnClick(
        getAction,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      const [, options] = mockHubspotFetch.mock.calls[0];
      expect(options?.body).toBeUndefined();
    });

    it('defaults to GET method when httpMethod is not specified', async () => {
      const mockActions = createMockActions();
      const actionWithoutMethod: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'Fetch Data',
        uri: 'https://example.com/data',
      };

      await handleActionOnClick(
        actionWithoutMethod,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      const [, options] = mockHubspotFetch.mock.calls[0];
      expect(options?.method).toBe('GET');
    });

    it('shows success alert on successful response', async () => {
      const mockActions = createMockActions();

      await handleActionOnClick(
        actionHook,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(mockActions.addAlert).toHaveBeenCalledWith({
        type: 'success',
        message: 'Submit Data succeeded.',
      });
    });

    it('throws error when response is not ok', async () => {
      mockHubspotFetch.mockResolvedValue({
        ok: false,
        status: 500,
        json: vi.fn().mockResolvedValue({}),
      } as unknown as Response);

      const mockActions = createMockActions();

      await handleActionOnClick(
        actionHook,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(mockActions.addAlert).toHaveBeenCalledWith({
        type: 'danger',
        message: 'Error: Action failed with status 500',
      });
    });

    it('fetches CRM object properties when associatedObjectProperties is provided', async () => {
      const mockActions = createMockActions();
      mockActions.fetchCrmObjectProperties.mockResolvedValue({
        firstname: 'John',
        email: 'john@example.com',
      });

      const actionWithProperties: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'Submit Data',
        uri: 'https://example.com/submit',
        httpMethod: 'GET',
        associatedObjectProperties: ['firstname', 'email'],
      };

      await handleActionOnClick(
        actionWithProperties,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(mockActions.fetchCrmObjectProperties).toHaveBeenCalledWith([
        'firstname',
        'email',
      ]);

      const [url] = mockHubspotFetch.mock.calls[0];
      expect(url).toContain('firstname=John');
      expect(url).toContain('email=john%40example.com');
    });

    it('continues without CRM properties when fetch fails', async () => {
      const mockActions = createMockActions();
      mockActions.fetchCrmObjectProperties.mockRejectedValue(
        new Error('CRM fetch failed')
      );

      const actionWithProperties: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'Submit Data',
        uri: 'https://example.com/submit',
        associatedObjectProperties: ['firstname'],
      };

      await handleActionOnClick(
        actionWithProperties,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(console.warn).toHaveBeenCalledWith(
        'Failed to fetch CRM object properties:',
        expect.any(Error)
      );
      expect(mockHubspotFetch).toHaveBeenCalled();
    });
  });

  describe('CONFIRMATION_ACTION_HOOK actions', () => {
    const confirmationAction: CardAction = {
      type: ActionType.CONFIRMATION_ACTION_HOOK,
      label: 'Delete Item',
      uri: 'https://example.com/delete',
      httpMethod: 'DELETE',
      confirmationMessage: 'Are you sure?',
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel',
    };

    beforeEach(() => {
      mockHubspotFetch.mockResolvedValue({
        ok: true,
        status: 200,
        json: vi.fn().mockResolvedValue({ deleted: true }),
      } as unknown as Response);
    });

    it('makes HTTP request for confirmation action hook', async () => {
      const mockActions = createMockActions();

      await handleActionOnClick(
        confirmationAction,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(mockHubspotFetch).toHaveBeenCalledTimes(1);
      const [, options] = mockHubspotFetch.mock.calls[0];
      expect(options?.method).toBe('DELETE');
    });
  });

  describe('URI validation', () => {
    it('throws error when action URI does not match base URLs', async () => {
      const mockActions = createMockActions();
      const invalidUriAction: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'Invalid Action',
        uri: 'https://malicious.com/action',
      };

      await handleActionOnClick(
        invalidUriAction,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(mockActions.addAlert).toHaveBeenCalledWith({
        type: 'danger',
        message: expect.stringContaining('does not share a base URI'),
      });
      expect(mockHubspotFetch).not.toHaveBeenCalled();
    });

    it('allows relative URIs', async () => {
      mockHubspotFetch.mockResolvedValue({
        ok: true,
        status: 200,
        json: vi.fn().mockResolvedValue({}),
      } as unknown as Response);

      const mockActions = createMockActions();
      const relativeUriAction: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'Relative Action',
        uri: '/api/action',
      };

      await handleActionOnClick(
        relativeUriAction,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(mockHubspotFetch).toHaveBeenCalled();
    });
  });

  describe('error handling', () => {
    it('throws error when URI is missing for ACTION_HOOK', async () => {
      const mockActions = createMockActions();
      const actionWithoutUri: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'No URI Action',
      };

      await handleActionOnClick(
        actionWithoutUri,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(mockActions.addAlert).toHaveBeenCalledWith({
        type: 'danger',
        message: 'Error: ACTION_HOOK missing URI',
      });
    });

    it('throws error when config is missing', async () => {
      const mockActions = createMockActions();
      const action: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'Test Action',
        uri: 'https://example.com/action',
      };

      await handleActionOnClick(
        action,
        mockHubspotContext,
        mockActions,
        undefined,
        undefined
      );

      expect(mockActions.addAlert).toHaveBeenCalledWith({
        type: 'danger',
        message: 'Error: Config is required for action handling',
      });
    });

    it('handles unknown action types with warning', async () => {
      const mockActions = createMockActions();
      const unknownAction: CardAction = {
        type: 'UNKNOWN_TYPE' as any,
        label: 'Unknown Action',
      };

      await handleActionOnClick(
        unknownAction,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      expect(console.warn).toHaveBeenCalledWith(
        'Unknown action type:',
        'UNKNOWN_TYPE'
      );
      expect(mockActions.addAlert).toHaveBeenCalledWith({
        type: 'warning',
        message: 'Unknown action type: UNKNOWN_TYPE',
      });
    });

    it('handles errors gracefully when addAlert is not available', async () => {
      const mockActions = { ...createMockActions(), addAlert: undefined };
      const unknownAction: CardAction = {
        type: 'UNKNOWN_TYPE' as any,
        label: 'Unknown Action',
      };

      await expect(
        handleActionOnClick(
          unknownAction,
          mockHubspotContext,
          mockActions,
          undefined,
          mockHubSpotCardConfig
        )
      ).resolves.not.toThrow();

      expect(console.warn).toHaveBeenCalledWith(
        'Unknown action type:',
        'UNKNOWN_TYPE'
      );
    });
  });

  describe('HTTP methods', () => {
    beforeEach(() => {
      mockHubspotFetch.mockResolvedValue({
        ok: true,
        status: 200,
        json: vi.fn().mockResolvedValue({}),
      } as unknown as Response);
    });

    it.each(['PUT', 'PATCH'] as const)(
      'includes body for %s requests',
      async method => {
        const mockActions = createMockActions();
        const action: CardAction = {
          type: ActionType.ACTION_HOOK,
          label: 'Update Data',
          uri: 'https://example.com/update',
          httpMethod: method,
        };

        await handleActionOnClick(
          action,
          mockHubspotContext,
          mockActions,
          undefined,
          mockHubSpotCardConfig
        );

        const [, options] = mockHubspotFetch.mock.calls[0];
        expect(options?.method).toBe(method);
        expect(options?.body).toBeDefined();
      }
    );

    it('handles DELETE method', async () => {
      const mockActions = createMockActions();
      const action: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'Delete Data',
        uri: 'https://example.com/delete',
        httpMethod: 'DELETE',
      };

      await handleActionOnClick(
        action,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      const [, options] = mockHubspotFetch.mock.calls[0];
      expect(options?.method).toBe('DELETE');
      expect(options?.body).toBeUndefined();
    });
  });

  describe('query parameter handling', () => {
    beforeEach(() => {
      mockHubspotFetch.mockResolvedValue({
        ok: true,
        status: 200,
        json: vi.fn().mockResolvedValue({}),
      } as unknown as Response);
    });

    it('appends query params with & when URL already has query params', async () => {
      const mockActions = createMockActions();
      const action: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'Action',
        uri: 'https://example.com/action?existing=param',
      };

      await handleActionOnClick(
        action,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      const [url] = mockHubspotFetch.mock.calls[0];
      expect(url).toContain('?existing=param&');
    });

    it('appends query params with ? when URL has no query params', async () => {
      const mockActions = createMockActions();
      const action: CardAction = {
        type: ActionType.ACTION_HOOK,
        label: 'Action',
        uri: 'https://example.com/action',
      };

      await handleActionOnClick(
        action,
        mockHubspotContext,
        mockActions,
        undefined,
        mockHubSpotCardConfig
      );

      const [url] = mockHubspotFetch.mock.calls[0];
      expect(url).toMatch(/action\?/);
    });
  });
});
