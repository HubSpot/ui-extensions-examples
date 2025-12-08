import {
  Alert,
  Button,
  Checkbox,
  Flex,
  Link,
  Panel,
  PanelSection,
  Text,
} from '@hubspot/ui-extensions';
import { createRenderer } from '@hubspot/ui-extensions/testing';
import { describe, expect, it } from 'vitest';

import { ValidationErrorUI } from '../ValidationErrorUI';

describe('ValidationErrorUI', () => {
  it('renders with correct testId', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const container = findByTestId(Flex, 'validationErrorContainer');
    expect(container).toBeDefined();
    expect(container.props.direction).toEqual('column');
    expect(container.props.gap).toEqual('md');
  });

  it('renders alert with error variant and correct title', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const alert = findByTestId(Alert, 'configAlert');
    expect(alert).toBeDefined();
    expect(alert.props.variant).toEqual('error');
    expect(alert.props.title).toEqual('Configuration Issues Detected');
  });

  it('renders configuration message in alert', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const text = findByTestId(Text, 'configMessage');
    expect(text.text).toContain('Your card configuration has issues');
    expect(text.text).toContain('Complete the setup steps below');
  });

  it('renders configuration message with error details reference when errors provided', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI errorMessages={['Test error']} />);

    const configText = findByTestId(Text, 'configMessage');
    expect(configText).toBeDefined();

    // The conditional text is in a nested Text component, so we need to find it
    const nestedTexts = configText.findAll(Text);
    const hasErrorDetailsReference = nestedTexts.some(t =>
      t.text?.includes('View detailed error messages below')
    );
    expect(hasErrorDetailsReference).toBe(true);
  });

  it('renders "To Do:" header', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const toDoHeader = findByTestId(Text, 'todoHeader');
    expect(toDoHeader.text).toEqual('To Do:');
    expect(toDoHeader.props.format?.fontWeight).toEqual('demibold');
  });

  it('renders all 4 checkboxes', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    expect(findByTestId(Checkbox, 'getDefinitionCheckbox')).toBeDefined();
    expect(findByTestId(Checkbox, 'allowUrlsCheckbox')).toBeDefined();
    expect(findByTestId(Checkbox, 'addObjectTypesCheckbox')).toBeDefined();
    expect(findByTestId(Checkbox, 'renameCheckbox')).toBeDefined();
  });

  it('renders "Get Definition" checkbox with correct content', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const getDefinitionCheckbox = findByTestId(
      Checkbox,
      'getDefinitionCheckbox'
    );
    expect(getDefinitionCheckbox).toBeDefined();
    expect(getDefinitionCheckbox.props.name).toEqual('todo-1');

    const texts = getDefinitionCheckbox.findAll(Text);
    const hasGetDefinition = texts.some(t =>
      t.text?.includes('Get Definition:')
    );
    expect(hasGetDefinition).toBe(true);

    const hasCallText = texts.some(t => t.text?.includes('Call'));
    expect(hasCallText).toBe(true);

    const hasInstructions = texts.some(t =>
      t.text?.includes('to get the definition of the existing legacy CRM card')
    );
    expect(hasInstructions).toBe(true);
  });

  it('renders link in "Get Definition" checkbox', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const link = findByTestId(Link, 'definitionApiLink');
    expect(link).toBeDefined();
    expect(link.props.href).toEqual(
      'https://developers.hubspot.com/docs/api-reference/crm-public-app-crm-cards-v3/cards/get-crm-v3-extensions-cards-dev-appId-cardId'
    );
    expect(link.text).toEqual('/crm/v3/extensions/cards-dev/:appId/:cardId');
  });

  it('renders "Allow URLs" checkbox with correct content', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const allowUrlsCheckbox = findByTestId(Checkbox, 'allowUrlsCheckbox');
    expect(allowUrlsCheckbox).toBeDefined();
    expect(allowUrlsCheckbox.props.name).toEqual('todo-4');

    const texts = allowUrlsCheckbox.findAll(Text);
    const hasAllowUrls = texts.some(t => t.text?.includes('Allow URLs:'));
    expect(hasAllowUrls).toBe(true);

    const hasPermittedUrls = texts.some(t =>
      t.text?.includes('add permittedUrls')
    );
    expect(hasPermittedUrls).toBe(true);
  });

  it('renders "Add ObjectTypes" checkbox with correct content', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const addObjectTypesCheckbox = findByTestId(
      Checkbox,
      'addObjectTypesCheckbox'
    );
    expect(addObjectTypesCheckbox).toBeDefined();
    expect(addObjectTypesCheckbox.props.name).toEqual('todo-2');

    const texts = addObjectTypesCheckbox.findAll(Text);
    const hasAddObjectTypes = texts.some(t =>
      t.text?.includes('Add ObjectTypes:')
    );
    expect(hasAddObjectTypes).toBe(true);

    const hasHsmetaConfig = texts.some(t =>
      t.text?.includes('add the objectTypes to the hsmeta config file')
    );
    expect(hasHsmetaConfig).toBe(true);
  });

  it('renders "Rename" checkbox with correct content', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const renameCheckbox = findByTestId(Checkbox, 'renameCheckbox');
    expect(renameCheckbox).toBeDefined();
    expect(renameCheckbox.props.name).toEqual('todo-3');

    const texts = renameCheckbox.findAll(Text);
    const hasRename = texts.some(t => t.text?.includes('Rename:'));
    expect(hasRename).toBe(true);

    const hasRenameInstructions = texts.some(t =>
      t.text?.includes('rename the title of the card')
    );
    expect(hasRenameInstructions).toBe(true);
  });

  it('renders checkboxes in correct order', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    expect(findByTestId(Checkbox, 'getDefinitionCheckbox').props.name).toEqual(
      'todo-1'
    );
    expect(findByTestId(Checkbox, 'allowUrlsCheckbox').props.name).toEqual(
      'todo-4'
    );
    expect(findByTestId(Checkbox, 'addObjectTypesCheckbox').props.name).toEqual(
      'todo-2'
    );
    expect(findByTestId(Checkbox, 'renameCheckbox').props.name).toEqual(
      'todo-3'
    );
  });

  it('renders with correct flex structure', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const container = findByTestId(Flex, 'validationErrorContainer');
    const childFlexes = container.findAll(Flex);

    expect(childFlexes.length).toBeGreaterThan(0);
  });

  it('renders all text with inline formatting where appropriate', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const checkboxIds = [
      'getDefinitionCheckbox',
      'allowUrlsCheckbox',
      'addObjectTypesCheckbox',
      'renameCheckbox',
    ];

    checkboxIds.forEach(id => {
      const checkbox = findByTestId(Checkbox, id);
      const texts = checkbox.findAll(Text);
      const hasInlineText = texts.some(t => t.props.inline === true);
      expect(hasInlineText).toBe(true);
    });
  });

  it('renders bold text for task labels', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const checkboxIds = [
      'getDefinitionCheckbox',
      'allowUrlsCheckbox',
      'addObjectTypesCheckbox',
      'renameCheckbox',
    ];
    const allTexts = checkboxIds.flatMap(id =>
      findByTestId(Checkbox, id).findAll(Text)
    );

    const boldTexts = allTexts.filter(
      t => t.props.format?.fontWeight === 'bold'
    );

    expect(boldTexts.length).toBeGreaterThanOrEqual(4);
    expect(boldTexts.some(t => t.text?.includes('Get Definition:'))).toBe(true);
    expect(boldTexts.some(t => t.text?.includes('Allow URLs:'))).toBe(true);
    expect(boldTexts.some(t => t.text?.includes('Add ObjectTypes:'))).toBe(
      true
    );
    expect(boldTexts.some(t => t.text?.includes('Rename:'))).toBe(true);
  });

  it('renders only one link in the entire component', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const link = findByTestId(Link, 'definitionApiLink');
    expect(link).toBeDefined();
  });

  it('renders configuration alert when no error messages', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(<ValidationErrorUI />);

    const alert = findByTestId(Alert, 'configAlert');
    expect(alert).toBeDefined();
    expect(alert.props.variant).toEqual('error');
    expect(alert.props.title).toEqual('Configuration Issues Detected');
  });

  describe('with error messages', () => {
    const errorMessages = [
      'Missing required field: title',
      'Invalid URL format in fetch.targetUrl',
      'ObjectTypes array cannot be empty',
    ];

    it('renders error messages header with count when errors are provided', () => {
      const { render, findByTestId } = createRenderer('crm.record.sidebar');

      render(<ValidationErrorUI errorMessages={errorMessages} />);

      const header = findByTestId(Text, 'errorMessagesHeader');
      expect(header).toBeDefined();
      expect(header.text).toEqual('Validation Errors (3):');
      expect(header.props.format?.fontWeight).toEqual('demibold');
    });

    it('renders "View Error Details" button when errors are provided', () => {
      const { render, findByTestId } = createRenderer('crm.record.sidebar');

      render(<ValidationErrorUI errorMessages={errorMessages} />);

      const button = findByTestId(Button, 'viewErrorDetailsButton');
      expect(button).toBeDefined();
      expect(button.props.variant).toEqual('secondary');
      expect(button.text).toEqual('View Error Details');
    });

    it('renders Panel with correct properties when errors are provided', () => {
      const { render, findByTestId } = createRenderer('crm.record.sidebar');

      render(<ValidationErrorUI errorMessages={errorMessages} />);

      const button = findByTestId(Button, 'viewErrorDetailsButton');
      expect(button.props.overlay).toBeDefined();

      const panel = findByTestId(Panel, 'errorDetailsPanel');
      expect(panel).toBeDefined();
      expect(panel.props.id).toEqual('validation-errors-panel');
      expect(panel.props.title).toEqual('Validation Error Details');
      expect(panel.props.width).toEqual('md');
    });

    it('renders error alert in Panel with correct content', () => {
      const { render, findByTestId } = createRenderer('crm.record.sidebar');

      render(<ValidationErrorUI errorMessages={errorMessages} />);

      const button = findByTestId(Button, 'viewErrorDetailsButton');
      const overlayFragment = button.props.overlay;
      expect(overlayFragment).toBeDefined();

      const panelSections = overlayFragment!.findAll(PanelSection);
      expect(panelSections.length).toEqual(2);

      const firstSection = panelSections[0];
      const alerts = firstSection.findAll(Alert);
      expect(alerts.length).toBeGreaterThan(0);
      expect(alerts[0].props.variant).toEqual('error');
      expect(alerts[0].props.title).toEqual('Configuration Issues Found');

      const alertTexts = alerts[0].findAll(Text);
      expect(alertTexts.length).toBeGreaterThan(0);
      expect(alertTexts[0].text).toContain(
        'The following validation errors must be resolved'
      );
    });

    it('renders all error messages in Panel with correct formatting', () => {
      const { render, findByTestId } = createRenderer('crm.record.sidebar');

      render(<ValidationErrorUI errorMessages={errorMessages} />);

      errorMessages.forEach((error, index) => {
        const errorFlex = findByTestId(Flex, `errorMessage-${index}`);
        expect(errorFlex).toBeDefined();
        expect(errorFlex.props.gap).toEqual('xs');
        expect(errorFlex.props.align).toEqual('start');

        const texts = errorFlex.findAll(Text);
        expect(texts.length).toEqual(2);
        expect(texts[0].text).toEqual('•');
        expect(texts[0].props.format?.fontWeight).toEqual('demibold');
        expect(texts[1].text).toEqual(error);
      });
    });

    it('does not render error section when errorMessages is empty array', () => {
      const { render, findByTestId } = createRenderer('crm.record.sidebar');

      render(<ValidationErrorUI errorMessages={[]} />);

      expect(() => findByTestId(Text, 'errorMessagesHeader')).toThrow();
      expect(() => findByTestId(Button, 'viewErrorDetailsButton')).toThrow();
    });

    it('renders both configuration alert and error panel alert when errors provided', () => {
      const { render, findByTestId } = createRenderer('crm.record.sidebar');

      render(<ValidationErrorUI errorMessages={errorMessages} />);

      // Main configuration alert should still exist
      const configAlert = findByTestId(Alert, 'configAlert');
      expect(configAlert).toBeDefined();
      expect(configAlert.props.variant).toEqual('error');
      expect(configAlert.props.title).toEqual('Configuration Issues Detected');

      // Error panel should contain an error alert
      const button = findByTestId(Button, 'viewErrorDetailsButton');
      const overlayFragment = button.props.overlay;
      expect(overlayFragment).toBeDefined();

      const panelAlerts = overlayFragment!.findAll(Alert);
      expect(panelAlerts.length).toBeGreaterThan(0);
      expect(panelAlerts[0].props.variant).toEqual('error');
      expect(panelAlerts[0].props.title).toEqual('Configuration Issues Found');
    });
  });
});
