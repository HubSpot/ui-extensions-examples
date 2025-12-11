import { describe, expect, it } from 'vitest';

import type { CardDefinition } from '../../types/definition';
import { validateDefinition } from '../validateDefinition';

describe('validateDefinition', () => {
  describe('valid definitions', () => {
    it('returns valid for complete definition', () => {
      const definition: CardDefinition = {
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
              dataType: 'STRING',
              options: [],
            },
          ],
        },
        actions: {
          baseUrls: ['https://example.com/actions'],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(true);
    });

    it('returns valid for minimal required definition without optional fields', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(true);
    });
  });

  describe('missing title', () => {
    it('returns invalid when title is missing', () => {
      const definition: Partial<CardDefinition> = {
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'title is required but was not provided'
        );
      }
    });

    it('returns invalid when title is empty string', () => {
      const definition: Partial<CardDefinition> = {
        title: '',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'title should be a non-empty string but got empty string'
        );
      }
    });
  });

  describe('missing fetch', () => {
    it('returns invalid when fetch is missing', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'fetch is required but was not provided'
        );
      }
    });

    it('returns invalid when fetch.targetUrl is missing', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        } as any,
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'fetch.targetUrl is required but was not provided'
        );
      }
    });

    it('returns invalid when fetch.targetUrl is empty string', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: '',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'fetch.targetUrl should be a non-empty string but got empty string'
        );
      }
    });

    it('returns invalid when fetch.objectTypes is missing', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: 'https://example.com/data',
        } as any,
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'fetch.objectTypes is required but was not provided'
        );
      }
    });

    it('returns invalid when fetch.objectTypes is empty array', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [],
        },
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'fetch.objectTypes (at least one object type required)'
        );
      }
    });
  });

  describe('missing display', () => {
    it('returns invalid when display is missing', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'display is required but was not provided'
        );
      }
    });

    it('returns invalid when display.properties is missing', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {} as any,
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'display.properties is required but was not provided'
        );
      }
    });

    it('returns invalid when display.properties is empty array', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'display.properties (at least one property required)'
        );
      }
    });
  });

  describe('multiple missing fields', () => {
    it('returns all missing fields when definition is empty', () => {
      const definition: Partial<CardDefinition> = {};

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toEqual(
          expect.arrayContaining([
            'title is required but was not provided',
            'fetch is required but was not provided',
            'display is required but was not provided',
          ])
        );
        expect(result.errorMessages).toHaveLength(3);
      }
    });

    it('returns all missing fields when definition has some fields', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toEqual(
          expect.arrayContaining([
            'fetch is required but was not provided',
            'display is required but was not provided',
          ])
        );
        expect(result.errorMessages).toHaveLength(2);
      }
    });

    it('returns nested missing fields when parent objects exist but are incomplete', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: '',
          objectTypes: [],
        },
        display: {
          properties: [],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toEqual(
          expect.arrayContaining([
            'fetch.targetUrl should be a non-empty string but got empty string',
            'fetch.objectTypes (at least one object type required)',
            'display.properties (at least one property required)',
          ])
        );
      }
    });

    it('handles partial fetch object missing targetUrl', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        } as any,
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toEqual([
          'fetch.targetUrl is required but was not provided',
        ]);
      }
    });

    it('handles partial display object missing properties', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {} as any,
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toEqual([
          'display.properties is required but was not provided',
        ]);
      }
    });
  });

  describe('edge cases', () => {
    it('handles null definition', () => {
      const result = validateDefinition(null as any);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toEqual(
          expect.arrayContaining([
            'Invalid card definition: expected type CardDefinition, received null',
          ])
        );
      }
    });

    it('handles undefined definition', () => {
      const result = validateDefinition(undefined as any);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toEqual(
          expect.arrayContaining([
            'Invalid card definition: expected type CardDefinition, received undefined',
          ])
        );
      }
    });

    it('ignores optional actions field when missing', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(true);
    });

    it('validates definition with multiple object types', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Multi Object Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [
            { name: 'contacts', propertiesToSend: ['email', 'firstname'] },
            { name: 'companies', propertiesToSend: ['name', 'domain'] },
            { name: 'deals', propertiesToSend: ['amount', 'stage'] },
            { name: 'tickets', propertiesToSend: ['subject', 'content'] },
          ],
        },
        display: {
          properties: [
            {
              name: 'status',
              label: 'Status',
              dataType: 'STATUS',
              options: [
                { name: 'active', label: 'Active', type: 'SUCCESS' },
                { name: 'inactive', label: 'Inactive', type: 'WARNING' },
              ],
            },
            {
              name: 'description',
              label: 'Description',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(true);
    });

    it('validates definition with all property data types', () => {
      const definition: Partial<CardDefinition> = {
        title: 'All Types Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [
            {
              name: 'text_field',
              label: 'Text Field',
              dataType: 'STRING',
              options: [],
            },
            {
              name: 'status_field',
              label: 'Status Field',
              dataType: 'STATUS',
              options: [{ name: 'active', label: 'Active', type: 'SUCCESS' }],
            },
            {
              name: 'number_field',
              label: 'Number Field',
              dataType: 'NUMERIC',
              options: [],
            },
            {
              name: 'datetime_field',
              label: 'DateTime Field',
              dataType: 'DATETIME',
              options: [],
            },
            {
              name: 'date_field',
              label: 'Date Field',
              dataType: 'DATE',
              options: [],
            },
            {
              name: 'link_field',
              label: 'Link Field',
              dataType: 'LINK',
              options: [],
            },
            {
              name: 'currency_field',
              label: 'Currency Field',
              dataType: 'CURRENCY',
              options: [],
            },
            {
              name: 'email_field',
              label: 'Email Field',
              dataType: 'EMAIL',
              options: [],
            },
          ],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(true);
    });

    it('returns invalid when actions.baseUrls contains invalid URL', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
        actions: {
          baseUrls: ['not-a-valid-url'],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'Each baseUrl must be a valid Web URL'
        );
      }
    });

    it('returns invalid when actions.baseUrls contains mix of valid and invalid URLs', () => {
      const definition: Partial<CardDefinition> = {
        title: 'Test Card',
        fetch: {
          targetUrl: 'https://example.com/data',
          objectTypes: [{ name: 'contacts', propertiesToSend: ['email'] }],
        },
        display: {
          properties: [
            {
              name: 'email',
              label: 'Email',
              dataType: 'STRING',
              options: [],
            },
          ],
        },
        actions: {
          baseUrls: ['https://example.com', 'invalid-url', 'http://valid.com'],
        },
      };

      const result = validateDefinition(definition);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.errorMessages).toContain(
          'Each baseUrl must be a valid Web URL'
        );
      }
    });
  });
});
