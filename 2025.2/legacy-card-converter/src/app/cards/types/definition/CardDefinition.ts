import type { DefinitionObjectType } from './DefinitionObjectType';
import type { DefinitionProperty } from './DefinitionProperty';

export interface CardDefinition {
  title: string;
  fetch: {
    targetUrl: string;
    objectTypes: DefinitionObjectType[];
  };
  display: {
    properties: DefinitionProperty[];
  };
  actions?: {
    baseUrls?: string[];
  };
}
