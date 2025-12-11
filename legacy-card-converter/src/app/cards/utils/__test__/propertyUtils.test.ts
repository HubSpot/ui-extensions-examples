import { describe, expect, it, vi } from 'vitest';

import { mockHubSpotCardConfig } from '../../test-utils/mocks';
import type { CardConfig } from '../../types';
import type { CardObject } from '../../types/response';
import { convertObjectToProperties } from '../propertyUtils';

describe('convertObjectToProperties', () => {
  describe('filtering', () => {
    it('excludes reserved keys (objectId, title, actions, properties, link)', () => {
      const cardObj: CardObject = {
        objectId: 123,
        title: 'Test Title',
        actions: [],
        properties: [],
        link: 'https://example.com',
        name: 'John Doe',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('name');
    });

    it('excludes properties with undefined values', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: 'John Doe',
        email: undefined,
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('name');
    });

    it('excludes properties with null values', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: 'John Doe',
        email: null,
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('name');
    });

    it('excludes properties not defined in customProperties', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: 'John Doe',
        unknownField: 'some value',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('name');
    });

    it('excludes properties in excludePropertyNames set', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: 'John Doe',
        email: 'john@example.com',
      };
      const excludeSet = new Set(['email']);

      const result = convertObjectToProperties(
        cardObj,
        mockHubSpotCardConfig,
        excludeSet
      );

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('name');
    });

    it('includes properties when excludePropertyNames is undefined', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: 'John Doe',
        email: 'john@example.com',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toHaveLength(2);
    });
  });

  describe('property mapping', () => {
    it('maps property name from object key', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: 'John Doe',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result[0].name).toBe('name');
    });

    it('maps label from customProperties definition', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        email: 'john@example.com',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result[0].label).toBe('Email Address');
    });

    it('maps dataType from customProperties definition (uppercased)', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: 'John Doe',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result[0].dataType).toBe('STRING');
    });

    it('converts value to string', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        score: 42,
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result[0].value).toBe('42');
    });

    it('converts boolean value to string', () => {
      const config: CardConfig = {
        ...mockHubSpotCardConfig,
        getPropertyDefinition: vi.fn().mockReturnValue({
          name: 'isActive',
          label: 'Active',
          dataType: 'STRING',
          options: [],
        }),
      };
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        isActive: true,
      };

      const result = convertObjectToProperties(cardObj, config);

      expect(result[0].value).toBe('true');
    });
  });

  describe('STATUS property handling', () => {
    it('adds optionType for STATUS properties with matching option', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        priority: 'HIGH',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result[0].dataType).toBe('STATUS');
      expect((result[0] as any).optionType).toBe('DANGER');
    });

    it('adds optionType for STATUS properties with numeric value', () => {
      const config: CardConfig = {
        ...mockHubSpotCardConfig,
        getPropertyDefinition: vi.fn().mockReturnValue({
          name: 'level',
          label: 'Level',
          dataType: 'STATUS',
          options: [
            { name: '1', label: 'Level 1', type: 'INFO' },
            { name: '2', label: 'Level 2', type: 'WARNING' },
          ],
        }),
        getStatusProperty: ({ parentPropertyName, statusPropertyName }) => {
          if (parentPropertyName === 'level') {
            const valueStr = String(statusPropertyName);
            if (valueStr === '1')
              return { name: '1', label: 'Level 1', type: 'INFO' };
            if (valueStr === '2')
              return { name: '2', label: 'Level 2', type: 'WARNING' };
          }
          return undefined;
        },
      };
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        level: 1,
      };

      const result = convertObjectToProperties(cardObj, config);

      expect((result[0] as any).optionType).toBe('INFO');
    });

    it('does not add optionType when getStatusOptionType returns undefined', () => {
      const config: CardConfig = {
        ...mockHubSpotCardConfig,
        getStatusProperty: () => undefined,
      };
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        priority: 'UNKNOWN',
      };

      const result = convertObjectToProperties(cardObj, config);

      expect(result[0].dataType).toBe('STATUS');
      expect((result[0] as any).optionType).toBeUndefined();
    });

    it('does not add optionType for non-STATUS properties', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: 'John Doe',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result[0].dataType).toBe('STRING');
      expect((result[0] as any).optionType).toBeUndefined();
    });
  });

  describe('multiple properties', () => {
    it('converts multiple properties preserving order', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: 'John Doe',
        email: 'john@example.com',
        score: 95,
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toHaveLength(3);
      expect(result.map(p => p.name)).toEqual(['name', 'email', 'score']);
    });

    it('handles mixed property types correctly', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: 'Test',
        priority: 'HIGH',
        score: 100,
        email: 'test@example.com',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toHaveLength(4);

      const nameProperty = result.find(p => p.name === 'name');
      expect(nameProperty?.dataType).toBe('STRING');

      const priorityProperty = result.find(p => p.name === 'priority');
      expect(priorityProperty?.dataType).toBe('STATUS');
      expect((priorityProperty as any).optionType).toBe('DANGER');

      const scoreProperty = result.find(p => p.name === 'score');
      expect(scoreProperty?.dataType).toBe('NUMERIC');

      const emailProperty = result.find(p => p.name === 'email');
      expect(emailProperty?.dataType).toBe('EMAIL');
    });
  });

  describe('edge cases', () => {
    it('returns empty array for empty object', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
      };
      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toEqual([]);
    });

    it('returns empty array when all properties are excluded', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toEqual([]);
    });

    it('handles empty string values', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        name: '',
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toHaveLength(1);
      expect(result[0].value).toBe('');
    });

    it('handles zero numeric values', () => {
      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        score: 0,
      };

      const result = convertObjectToProperties(cardObj, mockHubSpotCardConfig);

      expect(result).toHaveLength(1);
      expect(result[0].value).toBe('0');
    });

    it('handles object values by converting to string', () => {
      const config: CardConfig = {
        ...mockHubSpotCardConfig,
        getPropertyDefinition: vi.fn().mockReturnValue({
          name: 'metadata',
          label: 'Metadata',
          dataType: 'STRING',
          options: [],
        }),
      };

      const cardObj: CardObject = {
        objectId: 1,
        title: 'Test',
        metadata: { key: 'value' },
      };

      const result = convertObjectToProperties(cardObj, config);

      expect(result[0].value).toBe('[object Object]');
    });
  });
});
