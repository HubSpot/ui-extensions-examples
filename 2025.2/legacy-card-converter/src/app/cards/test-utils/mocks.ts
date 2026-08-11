/**
 * @fileoverview Centralized test mocks for the Legacy CRM Card Converter
 *
 * This file provides reusable mock objects and factory functions for testing.
 * Use these mocks to maintain consistency across test files and reduce duplication.
 *
 * Usage Guidelines:
 * - Use static mocks (mockAction, mockHubspotContext) for simple, consistent tests
 * - Use factory functions (createMockActions, createMockContext) when you need customization
 * - Use the CardConfig mocks (mockHubSpotCardConfig, createMockConfig) for integration tests
 * - Use CardObject mocks (mockCardObject, createMockCardObject) for component tests
 *
 * When adding new mocks:
 * - Add JSDoc comments explaining usage
 * - Provide both static and factory versions when useful
 * - Keep mock data realistic but simple
 * - Update this documentation when adding new patterns
 */

import type {
  CrmContext,
  ExtensionPointApiActions,
} from '@hubspot/ui-extensions';
import { vi } from 'vitest';

import { createCardConfig } from '../definition/CardConfig';
import { ActionType, CardConfig } from '../types';
import type { CardDefinition } from '../types/definition';
import type { CardAction, CardObject, CardProperty } from '../types/response';

// =============================================================================
// CARD ACTIONS
// =============================================================================

/**
 * Mock CardAction with confirmation dialog.
 * Use for testing confirmation modals and dangerous actions.
 */
export const mockAction: CardAction = {
  type: ActionType.CONFIRMATION_ACTION_HOOK,
  label: 'Test Action',
  confirmationMessage: 'Are you sure?',
  confirmButtonText: 'Confirm',
  cancelButtonText: 'Cancel',
};

/**
 * Mock CardAction without confirmation.
 * Use for testing simple action execution.
 */
export const mockActionWithoutConfirmation: CardAction = {
  type: ActionType.ACTION_HOOK,
  label: 'Test Action',
  uri: 'https://example.com/action',
};

// =============================================================================
// HUBSPOT CONTEXT & ACTIONS
// =============================================================================

/**
 * Basic HubSpot CRM context for testing.
 * Use for simple tests that don't need specific context values.
 */
export const mockHubspotContext: CrmContext = {
  user: {
    locale: 'en-US',
  },
  portal: {
    timezone: 'America/New_York',
  },
} as CrmContext;

/**
 * Basic HubSpot actions mock with no-op functions.
 * Use for tests that don't need to verify action calls.
 */
export const mockHubspotActions: ExtensionPointApiActions<'crm.record.sidebar'> =
  {
    addAlert: () => {},
    closeOverlay: () => {},
    reloadPage: () => {},
    fetchCrmObjectProperties: async () => ({}),
    openIframeModal: () => {},
    refreshObjectProperties: () => {},
    onCrmPropertiesUpdate: () => {},
    copyTextToClipboard: async () => {},
  };

/**
 * Creates mock actions with vi.fn() for testing action calls and behaviors.
 * Use this when you need to verify that specific actions were called.
 */
export const createMockActions = () => ({
  addAlert: vi.fn(),
  closeOverlay: vi.fn(),
  reloadPage: vi.fn(),
  fetchCrmObjectProperties: vi.fn().mockResolvedValue({}),
  openIframeModal: vi.fn(),
  refreshObjectProperties: vi.fn(),
  onCrmPropertiesUpdate: vi.fn(),
  copyTextToClipboard: vi.fn(),
});

/**
 * Creates a mock CRM context with customizable overrides.
 * Use this when you need specific context values for your tests.
 */
export const createMockContext = (
  overrides: Partial<CrmContext> = {}
): CrmContext =>
  ({
    user: {
      id: 12345,
      email: 'test@example.com',
      locale: 'en-US',
      ...overrides.user,
    },
    portal: {
      id: 67890,
      timezone: 'America/New_York',
      ...overrides.portal,
    },
    crm: {
      objectId: 111,
      objectTypeId: '0-1',
      ...overrides.crm,
    },
    ...overrides,
  }) as CrmContext;

// =============================================================================
// CARD OBJECTS
// =============================================================================

/**
 * Mock CardObject with common test properties.
 * Use this for testing object rendering and property display.
 */
export const mockCardObject: CardObject = {
  objectId: 123,
  title: 'Test Object',
  properties: [
    { label: 'Name', name: 'name', value: 'John Doe', dataType: 'STRING' },
    {
      label: 'Email',
      name: 'email',
      value: 'john@example.com',
      dataType: 'EMAIL',
    },
    {
      label: 'Status',
      name: 'status',
      value: 'active',
      dataType: 'STATUS',
      optionType: 'SUCCESS',
    },
  ],
};

/**
 * Creates a mock CardObject with customizable properties.
 * Use this when you need specific object data for your tests.
 */
export const createMockCardObject = (
  overrides: Partial<CardObject> = {}
): CardObject => ({
  objectId: 123,
  title: 'Test Object',
  properties: [
    { label: 'Name', name: 'name', value: 'John Doe', dataType: 'STRING' },
  ],
  ...overrides,
});

// =============================================================================
// CARD CONFIGURATIONS
// =============================================================================

/**
 * Creates a mock CardConfig with predefined custom properties.
 * Internal function used by mockHubSpotCardConfig and createMockConfig.
 */
function createMockHubSpotCardConfig(): CardConfig {
  const customProperties: Record<string, any> = {
    name: {
      name: 'name',
      label: 'Name',
      dataType: 'STRING',
      options: [],
    },
    email: {
      name: 'email',
      label: 'Email Address',
      dataType: 'EMAIL',
      options: [],
    },
    priority: {
      name: 'priority',
      label: 'Priority',
      dataType: 'STATUS',
      options: [
        { name: 'HIGH', label: 'High', type: 'DANGER' },
        { name: 'MEDIUM', label: 'Medium', type: 'WARNING' },
        { name: 'LOW', label: 'Low', type: 'SUCCESS' },
      ],
    },
    status: {
      name: 'status',
      label: 'Status',
      dataType: 'STATUS',
      options: [
        { name: 'OPEN', label: 'Open', type: 'INFO' },
        { name: 'IN_PROGRESS', label: 'In Progress', type: 'WARNING' },
        { name: 'CLOSED', label: 'Closed', type: 'SUCCESS' },
        { name: 'pending', label: 'Pending', type: 'WARNING' },
        { name: 'failed', label: 'Failed', type: 'DANGER' },
        { name: 'info', label: 'Info', type: 'INFO' },
        { name: 'unknown', label: 'Unknown', type: 'DEFAULT' },
      ],
    },
    created: {
      name: 'created',
      label: 'Created At',
      dataType: 'DATE',
      options: [],
    },
    updated: {
      name: 'updated',
      label: 'Last Updated',
      dataType: 'DATETIME',
      options: [],
    },
    amount: {
      name: 'amount',
      label: 'Amount',
      dataType: 'CURRENCY',
      options: [],
    },
    project_url: {
      name: 'project_url',
      label: 'Project URL',
      dataType: 'LINK',
      options: [],
    },
    score: {
      name: 'score',
      label: 'Score',
      dataType: 'NUMERIC',
      options: [],
    },
  };

  return {
    cardTitle: 'Test Card',
    dataRequestUrl: 'https://example.com/api/data',
    propertiesToSend: {
      contacts: ['firstname', 'lastname', 'email'],
      companies: ['name', 'domain'],
      deals: ['amount', 'stage'],
      tickets: ['subject', 'status', 'priority'],
    },
    initialPropertiesCount: 3,
    isValidActionUri: (uri: string) => {
      if (!uri) return false;
      if (!uri.startsWith('http://') && !uri.startsWith('https://')) {
        return true;
      }
      const urls = ['https://example.com/', 'https://test.com/'];
      return urls.some(baseUrl => uri.startsWith(baseUrl));
    },
    getPropertyDefinition: (propertyName: string) => {
      return customProperties[propertyName];
    },
    getStatusProperty: ({ parentPropertyName, statusPropertyName }) => {
      if (!parentPropertyName) return undefined;
      const valueStr = String(statusPropertyName);
      const property = customProperties[parentPropertyName];
      if (property && property.dataType === 'STATUS') {
        const statusOption = property.options.find(
          (option: any) => option.name === valueStr
        );
        return statusOption;
      }
      return undefined;
    },
  };
}

/**
 * Pre-configured CardConfig with comprehensive property definitions.
 * Use this for integration tests and complex component testing.
 */
export const mockHubSpotCardConfig: CardConfig = createMockHubSpotCardConfig();

// CardDefinition that produces the mockHubSpotCardConfig when passed to createCardConfig
// Used internally for createMockConfig function
const mockCardDefinition: CardDefinition = {
  title: 'Test Card',
  fetch: {
    targetUrl: 'https://example.com/api/data',
    objectTypes: [
      {
        name: 'contacts',
        propertiesToSend: ['firstname', 'lastname', 'email'],
      },
      { name: 'companies', propertiesToSend: ['name', 'domain'] },
      { name: 'deals', propertiesToSend: ['amount', 'stage'] },
      { name: 'tickets', propertiesToSend: ['subject', 'status', 'priority'] },
    ],
  },
  display: {
    properties: [
      {
        name: 'name',
        label: 'Name',
        dataType: 'STRING',
        options: [],
      },
      {
        name: 'email',
        label: 'Email Address',
        dataType: 'EMAIL',
        options: [],
      },
      {
        name: 'priority',
        label: 'Priority',
        dataType: 'STATUS',
        options: [
          { name: 'HIGH', label: 'High', type: 'DANGER' },
          { name: 'MEDIUM', label: 'Medium', type: 'WARNING' },
          { name: 'LOW', label: 'Low', type: 'SUCCESS' },
        ],
      },
      {
        name: 'status',
        label: 'Status',
        dataType: 'STATUS',
        options: [
          { name: 'OPEN', label: 'Open', type: 'INFO' },
          { name: 'IN_PROGRESS', label: 'In Progress', type: 'WARNING' },
          { name: 'CLOSED', label: 'Closed', type: 'SUCCESS' },
          { name: 'pending', label: 'Pending', type: 'WARNING' },
          { name: 'failed', label: 'Failed', type: 'DANGER' },
          { name: 'info', label: 'Info', type: 'INFO' },
          { name: 'unknown', label: 'Unknown', type: 'DEFAULT' },
        ],
      },
      {
        name: 'created',
        label: 'Created At',
        dataType: 'DATE',
        options: [],
      },
      {
        name: 'updated',
        label: 'Last Updated',
        dataType: 'DATETIME',
        options: [],
      },
      {
        name: 'amount',
        label: 'Amount',
        dataType: 'CURRENCY',
        options: [],
      },
      {
        name: 'project_url',
        label: 'Project URL',
        dataType: 'LINK',
        options: [],
      },
      {
        name: 'score',
        label: 'Score',
        dataType: 'NUMERIC',
        options: [],
      },
    ],
  },
  actions: {
    baseUrls: ['https://example.com/', 'https://test.com/'],
  },
};

/**
 * Creates a mock CardConfig based on the existing mockCardDefinition,
 * with the ability to override properties dynamically for testing.
 *
 * @param property - Optional CardProperty to add or override in the config
 * @returns A valid CardConfig for testing
 */
export function createMockConfig(property?: CardProperty): CardConfig {
  // Start with the existing mock definition
  const definition = { ...mockCardDefinition };
  definition.display = { ...mockCardDefinition.display };
  definition.display.properties = [
    ...(mockCardDefinition.display?.properties || []),
  ];

  // If a property is provided, handle overrides
  if (property) {
    // For STATUS properties, create/update the definition with proper options
    if (property.dataType === 'STATUS' && property.name) {
      let optionType = property.optionType || ('DEFAULT' as const);
      let optionLabel = String(property.value);

      // Handle special cases for tests
      if (property.name === 'status' && property.value === 'active') {
        optionType = 'SUCCESS' as const;
        optionLabel = 'Active'; // Always use 'Active' as the mapped label for this test case
      }

      const statusProperty = {
        name: property.name,
        label: property.label || property.name,
        dataType: 'STATUS' as const,
        options: [
          {
            name: String(property.value),
            label: optionLabel,
            type: optionType,
          },
        ],
      };

      // Find existing property and replace it, or add new one
      const existingIndex = definition.display.properties.findIndex(
        prop => prop.name === property.name
      );

      if (existingIndex >= 0) {
        definition.display.properties[existingIndex] = statusProperty;
      } else {
        definition.display.properties.push(statusProperty);
      }
    } else if (property.name) {
      // For non-STATUS properties, add a basic definition if it doesn't exist
      const existingProperty = definition.display.properties.find(
        prop => prop.name === property.name
      );

      if (!existingProperty) {
        definition.display.properties.push({
          name: property.name,
          label: property.label || property.name,
          dataType: property.dataType || 'STRING',
          options: [],
        });
      }
    }
  }

  const config = createCardConfig(definition);

  if (config.success === false) {
    throw new Error(
      `Config validation failed: ${config.errorMessages.join(', ')}`
    );
  }

  return config.cardConfig;
}
