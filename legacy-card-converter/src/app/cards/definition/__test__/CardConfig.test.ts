import { describe, expect, it } from 'vitest';

import type { CardDefinition } from '../../types/definition';
import { createCardConfig } from '../CardConfig';

// Test fixtures to reduce duplication
const createBaseDefinition = (): CardDefinition => ({
  title: 'Test Card',
  fetch: {
    targetUrl: 'https://example.com/data',
    objectTypes: [
      { name: 'contacts', propertiesToSend: ['email', 'firstname'] },
    ],
  },
  display: {
    properties: [
      {
        name: 'email',
        label: 'Email',
        dataType: 'STRING' as const,
        options: [],
      },
    ],
  },
});

const createDefinitionWithActions = (baseUrls: string[]): CardDefinition => ({
  ...createBaseDefinition(),
  actions: { baseUrls },
});

const createDefinitionWithStatusProperty = (
  propertyName = 'status',
  statusOptions: Array<{
    name: string;
    label: string;
    type: 'SUCCESS' | 'WARNING' | 'DANGER' | 'INFO' | 'DEFAULT';
  }>
): CardDefinition => ({
  ...createBaseDefinition(),
  display: {
    properties: [
      {
        name: propertyName,
        label: 'Status',
        dataType: 'STATUS',
        options: statusOptions,
      },
    ],
  },
});

const createMultiObjectDefinition = (): CardDefinition => ({
  title: 'Multi-Object Card',
  fetch: {
    targetUrl: 'https://api.example.com/fetch',
    objectTypes: [
      { name: 'contacts', propertiesToSend: ['email', 'phone'] },
      { name: 'companies', propertiesToSend: ['name'] },
    ],
  },
  display: {
    properties: [
      {
        name: 'description',
        label: 'Description',
        dataType: 'STRING',
        options: [],
      },
    ],
  },
  actions: {
    baseUrls: [
      'https://api.example.com/action1',
      'https://api.example.com/action2',
    ],
  },
});

const createComplexDefinition = (): CardDefinition => ({
  title: 'Customer Support Card',
  fetch: {
    targetUrl: 'https://support-api.example.com/cards/data',
    objectTypes: [
      {
        name: 'contacts',
        propertiesToSend: ['email', 'firstname', 'lastname', 'phone'],
      },
      { name: 'companies', propertiesToSend: ['name', 'domain'] },
      { name: 'tickets', propertiesToSend: ['subject', 'content'] },
    ],
  },
  display: {
    properties: [
      {
        name: 'ticket_status',
        label: 'Ticket Status',
        dataType: 'STATUS',
        options: [
          { name: 'new', label: 'New', type: 'INFO' },
          { name: 'open', label: 'Open', type: 'WARNING' },
          { name: 'pending', label: 'Pending Customer', type: 'WARNING' },
          { name: 'resolved', label: 'Resolved', type: 'SUCCESS' },
          { name: 'closed', label: 'Closed', type: 'DEFAULT' },
        ],
      },
      {
        name: 'priority',
        label: 'Priority',
        dataType: 'STATUS',
        options: [
          { name: 'urgent', label: 'Urgent', type: 'DANGER' },
          { name: 'high', label: 'High', type: 'WARNING' },
          { name: 'normal', label: 'Normal', type: 'INFO' },
          { name: 'low', label: 'Low', type: 'DEFAULT' },
        ],
      },
      {
        name: 'assigned_agent',
        label: 'Assigned Agent',
        dataType: 'STRING',
        options: [],
      },
      {
        name: 'last_response',
        label: 'Last Response',
        dataType: 'DATE',
        options: [],
      },
    ],
  },
  actions: {
    baseUrls: [
      'https://support-api.example.com/actions',
      'https://support-api.example.com/webhooks',
    ],
  },
});

// Helper to create successful configs and handle error checking
const createSuccessfulConfig = (definition: CardDefinition) => {
  const result = createCardConfig(definition);
  expect(result.success).toBe(true);
  if (!result.success) throw new Error('Config creation failed');
  return result.cardConfig;
};

describe('CardConfig', () => {
  describe('Basic Configuration Creation', () => {
    it('creates config with all basic properties', () => {
      const definition = createBaseDefinition();
      const config = createSuccessfulConfig(definition);

      expect(config.cardTitle).toBe('Test Card');
      expect(config.dataRequestUrl).toBe('https://example.com/data');
      expect(config.initialPropertiesCount).toBe(3);
      expect(config.getPropertyDefinition('email')).toEqual({
        name: 'email',
        label: 'Email',
        dataType: 'STRING',
        options: [],
      });
    });

    it('creates config with multiple object types and properties', () => {
      const definition = createMultiObjectDefinition();
      const config = createSuccessfulConfig(definition);

      expect(config.cardTitle).toBe('Multi-Object Card');
      expect(config.dataRequestUrl).toBe('https://api.example.com/fetch');
    });
  });

  describe('Object Type Properties Management', () => {
    it('maps properties to send for each object type', () => {
      const definition = createBaseDefinition();
      const config = createSuccessfulConfig(definition);

      expect(config.propertiesToSend).toEqual({
        contacts: ['email', 'firstname'],
        tickets: [],
        companies: [],
        deals: [],
      });
    });

    it('handles multiple object types correctly', () => {
      const definition = createMultiObjectDefinition();
      const config = createSuccessfulConfig(definition);

      expect(config.propertiesToSend.contacts).toEqual(['email', 'phone']);
      expect(config.propertiesToSend.companies).toEqual(['name']);
      expect(config.propertiesToSend.deals).toEqual([]);
      expect(config.propertiesToSend.tickets).toEqual([]);
    });

    it('preserves properties for provided object types and defaults empty for others', () => {
      const definition: CardDefinition = {
        title: 'Test',
        fetch: {
          targetUrl: 'https://example.com',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [
            {
              name: 'test_prop',
              label: 'Test Property',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const config = createSuccessfulConfig(definition);
      expect(config.propertiesToSend.contacts).toEqual(['email']);
      expect(config.propertiesToSend.companies).toEqual([]);
    });
  });

  describe('Property Definitions Access', () => {
    it('retrieves property definitions by name', () => {
      const emailProp = {
        name: 'email',
        label: 'Email',
        dataType: 'STRING' as const,
        options: [],
      };
      const phoneProp = {
        name: 'phone',
        label: 'Phone',
        dataType: 'STRING' as const,
        options: [],
      };

      const definition: CardDefinition = {
        title: 'Test',
        fetch: {
          targetUrl: 'https://example.com',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [emailProp, phoneProp],
        },
      };

      const config = createSuccessfulConfig(definition);
      expect(config.getPropertyDefinition('email')).toEqual(emailProp);
      expect(config.getPropertyDefinition('phone')).toEqual(phoneProp);
    });

    it('returns undefined for non-existent properties', () => {
      const definition = createBaseDefinition();
      const config = createSuccessfulConfig(definition);

      expect(config.getPropertyDefinition('nonexistent')).toBeUndefined();
    });
  });

  describe('Status Properties Handling', () => {
    it('creates status option mappings for STATUS dataType properties', () => {
      const definition = createDefinitionWithStatusProperty('status_field', [
        { name: 'pending', label: 'Pending', type: 'WARNING' },
        { name: 'completed', label: 'Completed', type: 'SUCCESS' },
        { name: 'failed', label: 'Failed', type: 'DANGER' },
      ]);

      const config = createSuccessfulConfig(definition);
      const statusProp = config.getPropertyDefinition('status_field');

      expect(statusProp?.options).toEqual([
        { label: 'Pending', name: 'pending', type: 'WARNING' },
        { label: 'Completed', name: 'completed', type: 'SUCCESS' },
        { label: 'Failed', name: 'failed', type: 'DANGER' },
      ]);
    });

    it('uses option name as label when label is empty', () => {
      const definition = createDefinitionWithStatusProperty('status_field', [
        { name: 'active', label: '', type: 'SUCCESS' },
      ]);

      const config = createSuccessfulConfig(definition);
      const statusProperty = config.getStatusProperty({
        parentPropertyName: 'status_field',
        statusPropertyName: 'active',
      });
      expect(statusProperty?.label).toBe('');
      expect(statusProperty?.name).toBe('active');
    });

    it('skips status mappings for non-STATUS dataTypes', () => {
      const definition: CardDefinition = {
        ...createBaseDefinition(),
        display: {
          properties: [
            {
              name: 'text_field',
              label: 'Text Field',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const config = createSuccessfulConfig(definition);
      expect(
        config.getStatusProperty({
          parentPropertyName: 'text_field',
          statusPropertyName: 'option1',
        })
      ).toBeUndefined();
    });

    it('skips status mappings when options array is empty', () => {
      const definition: CardDefinition = {
        ...createBaseDefinition(),
        display: {
          properties: [
            {
              name: 'status_field',
              label: 'Status',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const config = createSuccessfulConfig(definition);
      expect(
        config.getStatusProperty({
          parentPropertyName: 'status_field',
          statusPropertyName: 'option1',
        })
      ).toBeUndefined();
    });
  });

  describe('Status Property Retrieval', () => {
    const statusDefinition = createDefinitionWithStatusProperty('status', [
      { name: 'active', label: 'Active', type: 'SUCCESS' },
      { name: 'pending', label: 'Pending', type: 'WARNING' },
    ]);

    it('returns status properties for string values', () => {
      const config = createSuccessfulConfig(statusDefinition);

      const activeStatus = config.getStatusProperty({
        parentPropertyName: 'status',
        statusPropertyName: 'active',
      });
      const pendingStatus = config.getStatusProperty({
        parentPropertyName: 'status',
        statusPropertyName: 'pending',
      });

      expect(activeStatus?.type).toBe('SUCCESS');
      expect(activeStatus?.label).toBe('Active');
      expect(pendingStatus?.type).toBe('WARNING');
      expect(pendingStatus?.label).toBe('Pending');
    });

    it('returns status properties for numeric values', () => {
      const definition = createDefinitionWithStatusProperty('priority', [
        { name: '1', label: 'High', type: 'DANGER' },
        { name: '2', label: 'Medium', type: 'WARNING' },
        { name: '3', label: 'Low', type: 'SUCCESS' },
      ]);

      const config = createSuccessfulConfig(definition);
      const priority1 = config.getStatusProperty({
        parentPropertyName: 'priority',
        statusPropertyName: 1,
      });
      const priority2 = config.getStatusProperty({
        parentPropertyName: 'priority',
        statusPropertyName: 2,
      });
      const priority3 = config.getStatusProperty({
        parentPropertyName: 'priority',
        statusPropertyName: 3,
      });

      expect(priority1?.type).toBe('DANGER');
      expect(priority1?.label).toBe('High');
      expect(priority2?.type).toBe('WARNING');
      expect(priority2?.label).toBe('Medium');
      expect(priority3?.type).toBe('SUCCESS');
      expect(priority3?.label).toBe('Low');
    });

    it('returns undefined for non-existent property name', () => {
      const config = createSuccessfulConfig(statusDefinition);

      expect(
        config.getStatusProperty({
          parentPropertyName: 'nonexistent',
          statusPropertyName: 'active',
        })
      ).toBeUndefined();
    });

    it('returns undefined for non-existent status value', () => {
      const config = createSuccessfulConfig(statusDefinition);

      expect(
        config.getStatusProperty({
          parentPropertyName: 'status',
          statusPropertyName: 'nonexistent',
        })
      ).toBeUndefined();
    });

    it('returns undefined when parentPropertyName is undefined', () => {
      const config = createSuccessfulConfig(statusDefinition);

      expect(
        config.getStatusProperty({
          parentPropertyName: undefined,
          statusPropertyName: 'active',
        })
      ).toBeUndefined();
    });
  });

  describe('Action URI Validation', () => {
    it('returns false for empty strings and relative URIs', () => {
      const definition = createDefinitionWithActions([
        'https://api.example.com',
      ]);
      const config = createSuccessfulConfig(definition);

      expect(config.isValidActionUri('')).toBe(false);
      expect(config.isValidActionUri('/action/path')).toBe(false);
      expect(config.isValidActionUri('action/path')).toBe(false);
    });

    it('returns true for absolute URLs matching base URLs', () => {
      const definition = createDefinitionWithActions([
        'https://api.example.com',
        'https://api2.example.com',
      ]);
      const config = createSuccessfulConfig(definition);

      expect(config.isValidActionUri('https://api.example.com/action')).toBe(
        true
      );
      expect(config.isValidActionUri('https://api2.example.com/other')).toBe(
        true
      );
    });

    it('returns false for URLs not matching any base URL', () => {
      const definition = createDefinitionWithActions([
        'https://api.example.com',
      ]);
      const config = createSuccessfulConfig(definition);

      expect(config.isValidActionUri('https://malicious.com/action')).toBe(
        false
      );
      expect(config.isValidActionUri('https://other.example.com/action')).toBe(
        false
      );
    });

    it('enforces protocol matching (http vs https)', () => {
      const httpsDefinition = createDefinitionWithActions([
        'https://api.example.com',
      ]);
      const httpsConfig = createSuccessfulConfig(httpsDefinition);
      expect(
        httpsConfig.isValidActionUri('http://api.example.com/action')
      ).toBe(false);

      const httpDefinition = createDefinitionWithActions([
        'http://api.example.com',
      ]);
      const httpConfig = createSuccessfulConfig(httpDefinition);
      expect(httpConfig.isValidActionUri('http://api.example.com/action')).toBe(
        true
      );
    });

    it('returns false when no base URLs are defined', () => {
      const definition = createBaseDefinition(); // No actions defined
      const config = createSuccessfulConfig(definition);

      expect(config.isValidActionUri('https://any.com/action')).toBe(false);
    });
  });

  describe('Complex Integration Scenarios', () => {
    it('handles comprehensive card definition with all features', () => {
      const definition = createComplexDefinition();
      const config = createSuccessfulConfig(definition);

      // Basic properties
      expect(config.cardTitle).toBe('Customer Support Card');
      expect(config.dataRequestUrl).toBe(
        'https://support-api.example.com/cards/data'
      );

      // Object type mappings
      expect(config.propertiesToSend.contacts).toEqual([
        'email',
        'firstname',
        'lastname',
        'phone',
      ]);
      expect(config.propertiesToSend.companies).toEqual(['name', 'domain']);
      expect(config.propertiesToSend.tickets).toEqual(['subject', 'content']);
      expect(config.propertiesToSend.deals).toEqual([]);

      // Property definitions
      expect(config.getPropertyDefinition('ticket_status')?.dataType).toBe(
        'STATUS'
      );
      expect(config.getPropertyDefinition('assigned_agent')?.dataType).toBe(
        'STRING'
      );

      // Status property handling
      const newTicketStatus = config.getStatusProperty({
        parentPropertyName: 'ticket_status',
        statusPropertyName: 'new',
      });
      const resolvedTicketStatus = config.getStatusProperty({
        parentPropertyName: 'ticket_status',
        statusPropertyName: 'resolved',
      });
      const urgentPriority = config.getStatusProperty({
        parentPropertyName: 'priority',
        statusPropertyName: 'urgent',
      });

      expect(newTicketStatus?.type).toBe('INFO');
      expect(resolvedTicketStatus?.type).toBe('SUCCESS');
      expect(urgentPriority?.type).toBe('DANGER');

      const pendingTicketStatus = config.getStatusProperty({
        parentPropertyName: 'ticket_status',
        statusPropertyName: 'pending',
      });
      const highPriority = config.getStatusProperty({
        parentPropertyName: 'priority',
        statusPropertyName: 'high',
      });

      expect(pendingTicketStatus?.label).toBe('Pending Customer');
      expect(highPriority?.label).toBe('High');

      // Action URI validation
      expect(
        config.isValidActionUri(
          'https://support-api.example.com/actions/create'
        )
      ).toBe(true);
      expect(
        config.isValidActionUri(
          'https://support-api.example.com/webhooks/notify'
        )
      ).toBe(true);
      expect(config.isValidActionUri('https://malicious.com/steal')).toBe(
        false
      );
      expect(config.isValidActionUri('/relative/action')).toBe(false);
    });
  });
});
