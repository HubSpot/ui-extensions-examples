import type {
  CardDefinition,
  DefinitionObjectType,
  DefinitionProperty,
  StatusPropertyOption,
} from '../types/definition';
import type { PropertiesToSend } from '../types/definition/DefinitionObjectType';
import { validateDefinition } from './validateDefinition';

function getPropertiesToSend(
  objectTypes?: DefinitionObjectType[]
): PropertiesToSend {
  const properties: PropertiesToSend = {
    companies: [],
    contacts: [],
    tickets: [],
    deals: [],
  };

  if (!Array.isArray(objectTypes)) {
    return properties;
  }

  return objectTypes.reduce(
    (acc, { name, propertiesToSend }) => ({
      ...acc,
      [name]: propertiesToSend || [],
    }),
    properties
  );
}

export type CardConfig = {
  cardTitle: string;
  dataRequestUrl: string;
  propertiesToSend: PropertiesToSend;
  initialPropertiesCount: number;
  isValidActionUri: (uri: string) => boolean;
  getPropertyDefinition: (
    propertyName: string
  ) => DefinitionProperty | undefined;
  getStatusProperty: (options: {
    parentPropertyName: string | undefined;
    statusPropertyName: string | number;
  }) => StatusPropertyOption | undefined;
};

export function createCardConfig(
  rawDefinition: CardDefinition
):
  | { cardConfig: CardConfig; success: true }
  | { success: false; errorMessages: string[] } {
  const validationResult = validateDefinition(rawDefinition);

  if (!validationResult.success) {
    return { success: false, errorMessages: validationResult.errorMessages };
  }

  const definition = validationResult.data;

  const cardTitle = definition.title;
  const dataRequestUrl = definition.fetch.targetUrl;
  const baseActionUrls: URL[] = (definition?.actions?.baseUrls || []).map(
    url => new URL(url)
  );

  const customProperties: Record<string, DefinitionProperty> = {};

  definition.display.properties.forEach(prop => {
    if (prop && prop.name) {
      customProperties[prop.name] = prop;
    }
  });

  const propertiesToSend = getPropertiesToSend(definition?.fetch?.objectTypes);

  const cardConfigurationResult: CardConfig = {
    cardTitle,
    dataRequestUrl,
    propertiesToSend,
    initialPropertiesCount: 3,

    isValidActionUri(uri: string): boolean {
      if (!uri || baseActionUrls.length === 0) return false;

      // First, validate that it's a proper URL
      let parsedUri: URL;
      try {
        parsedUri = new URL(uri);
      } catch {
        return false;
      }

      // Check if the URI's domain and protocol match one of the base URLs
      return baseActionUrls.some(baseUrl => {
        try {
          return (
            parsedUri.protocol === baseUrl.protocol &&
            parsedUri.hostname === baseUrl.hostname
          );
        } catch {
          return false;
        }
      });
    },

    getPropertyDefinition(propertyName: string) {
      return customProperties[propertyName];
    },

    getStatusProperty({ parentPropertyName, statusPropertyName }) {
      if (!parentPropertyName) return;
      const property = this.getPropertyDefinition(parentPropertyName);
      const statusPropertyNameStr = String(statusPropertyName);
      if (property && property.dataType === 'STATUS' && property.options) {
        const statusProp = property.options.find(
          option => option.name === statusPropertyNameStr
        );

        if (statusProp) {
          return statusProp;
        }
      }
    },
  };

  return {
    success: true,
    cardConfig: cardConfigurationResult,
  };
}
