import { Link, Tag, Text } from '@hubspot/ui-extensions';
import { createRenderer } from '@hubspot/ui-extensions/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createMockConfig } from '../../test-utils/mocks';
import type { CardProperty } from '../../types/response';
import { PropertyValue } from '../Properties/PropertyValue';

const { mockUseCardConfig } = vi.hoisted(() => ({
  mockUseCardConfig: vi.fn(),
}));

vi.mock('../../contexts', () => ({
  useCardConfig: mockUseCardConfig,
}));

const getTestId = (property: CardProperty, type: 'label' | 'value'): string => {
  const prefix = type === 'label' ? 'propertyLabel' : 'propertyDisplayValue';
  const suffix = property.name
    ? property.name
    : property.label.replace(/\s+/g, '-').toLowerCase();
  return `${prefix}-${suffix}`;
};

describe('PropertyValue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCardConfig.mockReturnValue(createMockConfig());
  });
  describe('CURRENCY data type', () => {
    it('renders formatted currency with currency code and locale', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Amount',
        dataType: 'CURRENCY',
        value: 1234.56,
        currencyCode: 'USD',
      };

      render(<PropertyValue property={property} locale='en-US' />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Amount:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('$1,234.56');
    });

    it('renders plain value when currency code is missing', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Amount',
        dataType: 'CURRENCY',
        value: 1234.56,
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Amount:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('1234.56');
    });
  });

  describe('EMAIL data type', () => {
    it('renders email as a mailto link', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Email',
        dataType: 'EMAIL',
        value: 'test@example.com',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Email:');

      const link = findByTestId(Link, getTestId(property, 'value'));
      expect(link.props.href).toEqual({
        url: 'mailto:test@example.com',
        external: false,
      });
      expect(link.text).toBe('test@example.com');
    });
  });

  describe('LINK data type', () => {
    it('renders link with URL and uses value as label when linkLabel is not provided', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Website',
        dataType: 'LINK',
        value: 'https://example.com',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Website:');

      const link = findByTestId(Link, getTestId(property, 'value'));
      expect(link.props.href).toEqual({
        url: 'https://example.com',
        external: true,
      });
      expect(link.text).toBe('https://example.com');
    });

    it('renders link with custom linkLabel when provided', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Website',
        dataType: 'LINK',
        value: 'https://example.com',
        linkLabel: 'Visit Website',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Website:');

      const link = findByTestId(Link, getTestId(property, 'value'));
      expect(link.props.href).toEqual({
        url: 'https://example.com',
        external: true,
      });
      expect(link.text).toBe('Visit Website');
    });
  });

  describe('DATE data type', () => {
    it('renders formatted date with locale', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Created Date',
        dataType: 'DATE',
        value: '2024-03-15',
      };

      render(<PropertyValue property={property} locale='en-US' />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Created Date:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('March');
      expect(displayValue.text).toContain('15');
      expect(displayValue.text).toContain('2024');
    });
  });

  describe('DATETIME data type', () => {
    it('renders formatted datetime with locale and timezone', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Last Modified',
        dataType: 'DATETIME',
        value: 1710504000000,
      };

      render(
        <PropertyValue
          property={property}
          locale='en-US'
          timezone='America/New_York'
        />
      );

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Last Modified:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('2024');
      expect(displayValue.text).toContain('March');
    });

    it('handles datetime value as string', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Last Modified',
        dataType: 'DATETIME',
        value: '1710504000000',
      };

      render(<PropertyValue property={property} locale='en-US' />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Last Modified:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('2024');
    });
  });

  describe('NUMERIC data type', () => {
    it('renders formatted numeric value with locale', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Count',
        dataType: 'NUMERIC',
        value: 1234567.89,
      };

      render(<PropertyValue property={property} locale='en-US' />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Count:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('1,234,567.89');
    });

    it('handles numeric value as string', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Count',
        dataType: 'NUMERIC',
        value: '1234.56',
      };

      render(<PropertyValue property={property} locale='en-US' />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Count:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('1,234.56');
    });
  });

  describe('STATUS data type', () => {
    it('renders status tag with SUCCESS variant when optionType is provided', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Status',
        name: 'status',
        dataType: 'STATUS',
        value: 'active',
        optionType: 'SUCCESS',
      };

      const configWithStatusMapping = createMockConfig(property);
      mockUseCardConfig.mockReturnValue(configWithStatusMapping);

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Status:');

      const tag = findByTestId(Tag, getTestId(property, 'value'));
      expect(tag.props.variant).toBe('success');
      expect(tag.text).toBe('Active'); // When optionType is provided, still uses config mapping for label
    });

    it('renders status tag with WARNING variant', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Status',
        name: 'status',
        dataType: 'STATUS',
        value: 'pending',
        optionType: 'WARNING',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Status:');

      const tag = findByTestId(Tag, getTestId(property, 'value'));
      expect(tag.props.variant).toBe('warning');
    });

    it('renders status tag with DANGER variant as error', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Status',
        name: 'status',
        dataType: 'STATUS',
        value: 'failed',
        optionType: 'DANGER',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Status:');

      const tag = findByTestId(Tag, getTestId(property, 'value'));
      expect(tag.props.variant).toBe('error');
    });

    it('renders status tag with INFO variant', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Status',
        name: 'status',
        dataType: 'STATUS',
        value: 'info',
        optionType: 'INFO',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Status:');

      const tag = findByTestId(Tag, getTestId(property, 'value'));
      expect(tag.props.variant).toBe('info');
    });

    it('renders status tag with DEFAULT variant', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Status',
        name: 'status',
        dataType: 'STATUS',
        value: 'unknown',
        optionType: 'DEFAULT',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Status:');

      const tag = findByTestId(Tag, getTestId(property, 'value'));
      expect(tag.props.variant).toBe('default');
    });

    it('uses config mapping when optionType is not provided', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Status',
        name: 'status',
        dataType: 'STATUS',
        value: 'active',
      };

      const configWithStatusMapping = createMockConfig(property);
      mockUseCardConfig.mockReturnValue(configWithStatusMapping);

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Status:');

      const tag = findByTestId(Tag, getTestId(property, 'value'));
      expect(tag.props.variant).toBe('success');
      expect(tag.text).toBe('Active'); // Should show the mapped label from config
    });

    it('uses label from config when available', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Status',
        name: 'status',
        dataType: 'STATUS',
        value: 'active',
      };

      const configWithStatusMapping = createMockConfig(property);
      mockUseCardConfig.mockReturnValue(configWithStatusMapping);

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Status:');

      const tag = findByTestId(Tag, getTestId(property, 'value'));
      expect(tag.text).toBe('Active'); // Expecting the mapped label from config
    });

    it('renders "Invalid property" when no valid definition exists', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Status',
        name: 'unknown_status',
        dataType: 'STATUS',
        value: 'test',
      };

      // dont pass the property to the config.
      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Status:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('Invalid property');
    });

    it('renders "Invalid property" when property name is not provided and optionType is missing', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Status',
        dataType: 'STATUS',
        value: 'test',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Status:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('Invalid property');
    });
  });

  describe('STRING data type', () => {
    it('renders plain string value', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Description',
        dataType: 'STRING',
        value: 'Test description',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Description:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('Test description');
    });

    it('converts numeric value to string', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'ID',
        dataType: 'STRING',
        value: 12345,
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('ID:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('12345');
    });
  });

  describe('Unknown data type', () => {
    it('renders as string when data type is unknown', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Custom Field',
        // @ts-expect-error bad datatype
        dataType: 'UNKNOWN_TYPE',
        value: 'custom value',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Custom Field:');

      const displayValue = findByTestId(Text, getTestId(property, 'value'));
      expect(displayValue.text).toContain('custom value');
    });
  });

  describe('Case insensitivity', () => {
    it('handles lowercase data type correctly', () => {
      const { render, findByTestId } = createRenderer('crm.record.tab');
      const property: CardProperty = {
        label: 'Email',
        // @ts-expect-error bad datatype
        dataType: 'email',
        value: 'lowercase@example.com',
      };

      render(<PropertyValue property={property} />);

      const propertyLabel = findByTestId(Text, getTestId(property, 'label'));
      expect(propertyLabel.text).toContain('Email:');

      const link = findByTestId(Link, getTestId(property, 'value'));
      expect(link.props.href).toEqual({
        url: 'mailto:lowercase@example.com',
        external: false,
      });
    });
  });
});
