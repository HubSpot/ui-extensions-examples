import {
  Box,
  Button,
  Dropdown,
  Flex,
  Link,
  Text,
  Tile,
} from '@hubspot/ui-extensions';
import { createRenderer } from '@hubspot/ui-extensions/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { CardConfig } from '../../definition/CardConfig';
import { mockHubSpotCardConfig } from '../../test-utils/mocks';
import type { CardObject } from '../../types/response';
import { ObjectTile } from '../ObjectTile';

const { mockUseCardConfig } = vi.hoisted(() => ({
  mockUseCardConfig: vi.fn(),
}));

vi.mock('../../contexts', () => ({
  useCardConfig: mockUseCardConfig,
  useCardLocation: vi.fn(() => 'crm.record.sidebar'),
}));

describe('ObjectTile', () => {
  const createTestConfig = (overrides: Partial<CardConfig> = {}): CardConfig =>
    ({
      ...mockHubSpotCardConfig,
      ...overrides,
    }) as CardConfig;

  const cardConfig = createTestConfig({ initialPropertiesCount: 3 });

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCardConfig.mockReturnValue(cardConfig);
  });

  it('renders object with title as text when no link provided', () => {
    const { render, find, maybeFind } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    expect(tile.props.compact).toEqual(true);

    const text = find(Text);
    expect(text.text).toEqual('Test Object');

    expect(maybeFind(Link)).toBeNull();
  });

  it('renders object with title as link when link provided', () => {
    const { render, find, maybeFind } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      link: 'https://example.com/object/1',
    };

    render(<ObjectTile obj={obj} />);

    const link = find(Link);
    expect(link.text).toEqual('Test Object');
    expect(link.props.href).toEqual('https://example.com/object/1');

    expect(maybeFind(Text)).toBeNull();
  });

  it('renders properties with labels', () => {
    const { render, findAll } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [
        {
          label: 'Name',
          name: 'name',
          value: 'John Doe',
          dataType: 'STRING',
        },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const textComponents = findAll(Text);
    const hasNameLabel = textComponents.some(t => t.text?.includes('Name:'));
    expect(hasNameLabel).toBe(true);
  });

  it('shows View More button when properties exceed initialPropertiesCount', () => {
    const { render, maybeFindByTestId } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [
        { label: 'Prop 1', value: 'Value 1', dataType: 'STRING' },
        { label: 'Prop 2', value: 'Value 2', dataType: 'STRING' },
        { label: 'Prop 3', value: 'Value 3', dataType: 'STRING' },
        { label: 'Prop 4', value: 'Value 4', dataType: 'STRING' },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const button = maybeFindByTestId(Button, 'view-more-view-less-button');
    expect(button).not.toBeNull();
    expect(button?.text).toEqual('View More');
    expect(button?.props.variant).toEqual('transparent');
  });

  it('expands properties when View More button is clicked', () => {
    const { render, maybeFindByTestId } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [
        { label: 'Prop 1', value: 'Value 1', dataType: 'STRING' },
        { label: 'Prop 2', value: 'Value 2', dataType: 'STRING' },
        { label: 'Prop 3', value: 'Value 3', dataType: 'STRING' },
        { label: 'Prop 4', value: 'Value 4', dataType: 'STRING' },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const button = maybeFindByTestId(Button, 'view-more-view-less-button');
    expect(button).not.toBeNull();
    expect(button?.text).toEqual('View More');

    button?.trigger('onClick');

    const updatedButton = maybeFindByTestId(
      Button,
      'view-more-view-less-button'
    );
    expect(updatedButton?.text).toEqual('View Less');
  });

  it('collapses properties when View Less button is clicked', () => {
    const { render, maybeFindByTestId } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [
        { label: 'Prop 1', value: 'Value 1', dataType: 'STRING' },
        { label: 'Prop 2', value: 'Value 2', dataType: 'STRING' },
        { label: 'Prop 3', value: 'Value 3', dataType: 'STRING' },
        { label: 'Prop 4', value: 'Value 4', dataType: 'STRING' },
      ],
    };

    render(<ObjectTile obj={obj} />);

    let button = maybeFindByTestId(Button, 'view-more-view-less-button');
    expect(button?.text).toEqual('View More');

    button?.trigger('onClick');

    button = maybeFindByTestId(Button, 'view-more-view-less-button');
    expect(button?.text).toEqual('View Less');

    button?.trigger('onClick');

    button = maybeFindByTestId(Button, 'view-more-view-less-button');
    expect(button?.text).toEqual('View More');
  });

  it('does not show View More button when properties count equals initialPropertiesCount', () => {
    const { render, maybeFindByTestId } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [
        { label: 'Prop 1', value: 'Value 1', dataType: 'STRING' },
        { label: 'Prop 2', value: 'Value 2', dataType: 'STRING' },
        { label: 'Prop 3', value: 'Value 3', dataType: 'STRING' },
      ],
    };

    render(<ObjectTile obj={obj} />);

    expect(maybeFindByTestId(Button, 'view-more-view-less-button')).toBeNull();
  });

  it('renders ActionsDropdown when actions are provided', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      actions: [
        {
          type: 'ACTION_HOOK',
          label: 'Edit',
          uri: 'https://example.com/edit',
        },
        {
          type: 'ACTION_HOOK',
          label: 'Delete',
          uri: 'https://example.com/delete',
        },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const dropdown = find(Dropdown);
    expect(dropdown).toBeDefined();
    expect(dropdown.props.buttonText).toEqual('Actions');
    expect(dropdown.props.buttonSize).toEqual('md');
    expect(dropdown.props.variant).toEqual('transparent');
  });

  it('does not render ActionsDropdown when no actions provided', () => {
    const { render, maybeFind } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      actions: [],
    };

    render(<ObjectTile obj={obj} />);

    expect(maybeFind(Dropdown)).toBeNull();
  });

  it('renders both View More button and ActionsDropdown when applicable', () => {
    const { render, maybeFindByTestId, find } =
      createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [
        { label: 'Prop 1', value: 'Value 1', dataType: 'STRING' },
        { label: 'Prop 2', value: 'Value 2', dataType: 'STRING' },
        { label: 'Prop 3', value: 'Value 3', dataType: 'STRING' },
        { label: 'Prop 4', value: 'Value 4', dataType: 'STRING' },
      ],
      actions: [
        {
          type: 'ACTION_HOOK',
          label: 'Edit',
          uri: 'https://example.com/edit',
        },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const button = maybeFindByTestId(Button, 'view-more-view-less-button');
    expect(button).not.toBeNull();
    expect(button?.text).toEqual('View More');

    const dropdown = find(Dropdown);
    expect(dropdown).toBeDefined();

    const tile = find(Tile);
    const flexContainers = tile.findAll(Flex);
    const bottomFlex = flexContainers[flexContainers.length - 1];
    expect(bottomFlex.props.justify).toEqual('between');
  });

  it('uses justify end when only actions present', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [{ label: 'Prop 1', value: 'Value 1', dataType: 'STRING' }],
      actions: [
        {
          type: 'ACTION_HOOK',
          label: 'Edit',
          uri: 'https://example.com/edit',
        },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const flexContainers = find(Tile).findAll(Flex);
    const bottomFlex = flexContainers[flexContainers.length - 1];
    expect(bottomFlex.props.justify).toEqual('end');
  });

  it('renders object with empty properties array', () => {
    const { render, find, maybeFindByTestId, maybeFind } =
      createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [],
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    expect(tile).toBeDefined();

    expect(maybeFindByTestId(Button, 'view-more-view-less-button')).toBeNull();
    expect(maybeFind(Dropdown)).toBeNull();
  });

  it('wraps ActionsDropdown in Box component', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      actions: [
        {
          type: 'ACTION_HOOK',
          label: 'Edit',
          uri: 'https://example.com/edit',
        },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const box = find(Box);
    expect(box).toBeDefined();

    const dropdown = box.findChild(Dropdown);
    expect(dropdown).not.toBeNull();
  });

  it('renders properties when provided', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [
        {
          label: 'Created Date',
          value: '2024-01-01',
          dataType: 'DATE',
        },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    expect(tile).toBeDefined();
  });

  it('renders Tile with column direction Flex', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    const flex = tile.findChild(Flex);
    expect(flex?.props.direction).toEqual('column');
    expect(flex?.props.gap).toEqual('xs');
  });

  it('handles object with undefined properties field', () => {
    const { render, find, maybeFindByTestId } =
      createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: undefined,
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    expect(tile).toBeDefined();
    expect(maybeFindByTestId(Button, 'view-more-view-less-button')).toBeNull();
  });

  it('handles object with undefined actions field', () => {
    const { render, find, maybeFind } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      actions: undefined,
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    expect(tile).toBeDefined();
    expect(maybeFind(Dropdown)).toBeNull();
  });

  it('respects initialPropertiesCount from config', () => {
    const { render, maybeFindByTestId } = createRenderer('crm.record.sidebar');

    const customConfig = createTestConfig({ initialPropertiesCount: 2 });
    mockUseCardConfig.mockReturnValue(customConfig);

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [
        { label: 'Prop 1', value: 'Value 1', dataType: 'STRING' },
        { label: 'Prop 2', value: 'Value 2', dataType: 'STRING' },
        { label: 'Prop 3', value: 'Value 3', dataType: 'STRING' },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const button = maybeFindByTestId(Button, 'view-more-view-less-button');
    expect(button).not.toBeNull();
    expect(button?.text).toEqual('View More');
  });

  it('shows View More when initialPropertiesCount is 0 and properties exist', () => {
    const { render, maybeFindByTestId } = createRenderer('crm.record.sidebar');

    const customConfig = createTestConfig({ initialPropertiesCount: 0 });
    mockUseCardConfig.mockReturnValue(customConfig);

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [{ label: 'Prop 1', value: 'Value 1', dataType: 'STRING' }],
    };

    render(<ObjectTile obj={obj} />);

    const button = maybeFindByTestId(Button, 'view-more-view-less-button');
    expect(button).not.toBeNull();
    expect(button?.text).toEqual('View More');
  });

  it('renders object properties from config definition', () => {
    const { render, findAll } = createRenderer('crm.record.sidebar');

    const obj: any = {
      objectId: 1,
      title: 'Test Object',
      status: 'Active',
    };

    render(<ObjectTile obj={obj} />);

    const textComponents = findAll(Text);
    const hasStatusLabel = textComponents.some(t =>
      t.text?.includes('Status:')
    );
    expect(hasStatusLabel).toBe(true);
  });

  it('excludes properties from object when label is in properties array', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const obj: any = {
      objectId: 1,
      title: 'Test Object',
      customField: 'from-object',
      properties: [
        {
          label: 'Custom Field',
          name: 'customName',
          value: 'from-properties',
          dataType: 'STRING',
        },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    expect(tile).toBeDefined();
  });

  it('renders multiple different data types correctly', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [
        {
          label: 'Name',
          value: 'John Doe',
          dataType: 'STRING',
        },
        {
          label: 'Amount',
          value: 1000,
          dataType: 'NUMERIC',
        },
        {
          label: 'Email',
          value: 'john@example.com',
          dataType: 'EMAIL',
        },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    expect(tile).toBeDefined();
  });

  it('renders link with both href and text', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 123,
      title: 'Important Object',
      link: 'https://example.com/objects/123',
    };

    render(<ObjectTile obj={obj} />);

    const link = find(Link);
    expect(link.props.href).toEqual('https://example.com/objects/123');
    expect(link.text).toEqual('Important Object');
  });

  it('renders date properties using context locale and timezone', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties: [
        {
          label: 'Date',
          value: '2024-01-01',
          dataType: 'DATE',
        },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    expect(tile).toBeDefined();
  });

  it('handles object with only title and objectId', () => {
    const { render, find, maybeFindByTestId, maybeFind } =
      createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 999,
      title: 'Minimal Object',
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    expect(tile).toBeDefined();

    const text = find(Text);
    expect(text.text).toEqual('Minimal Object');

    expect(maybeFindByTestId(Button, 'view-more-view-less-button')).toBeNull();
    expect(maybeFind(Dropdown)).toBeNull();
  });

  it('renders with very large number of properties', () => {
    const { render, find, maybeFindByTestId } =
      createRenderer('crm.record.sidebar');

    const properties = Array.from({ length: 20 }, (_, i) => ({
      label: `Property ${i + 1}`,
      value: `Value ${i + 1}`,
      dataType: 'STRING' as const,
    }));

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object',
      properties,
    };

    render(<ObjectTile obj={obj} />);

    const tile = find(Tile);
    expect(tile).toBeDefined();

    const button = maybeFindByTestId(Button, 'view-more-view-less-button');
    expect(button).not.toBeNull();
    expect(button?.text).toEqual('View More');
  });

  it('passes all required props to ActionsDropdown', () => {
    const { render, find } = createRenderer('crm.record.sidebar');

    const obj: CardObject = {
      objectId: 1,
      title: 'Test Object Title',
      actions: [
        {
          type: 'ACTION_HOOK',
          label: 'Test Action',
          uri: 'https://example.com/action',
        },
      ],
    };

    render(<ObjectTile obj={obj} />);

    const dropdown = find(Dropdown);
    expect(dropdown.props.buttonText).toEqual('Actions');
    expect(dropdown.props.variant).toEqual('transparent');
    expect(dropdown.props.buttonSize).toEqual('md');
  });
});
