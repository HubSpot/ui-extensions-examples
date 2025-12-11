import type {
  CrmContext,
  ExtensionPointApiActions,
} from '@hubspot/ui-extensions';
import { hubspot, logger } from '@hubspot/ui-extensions';

import type { CardConfig } from '../types';
import { isValidObjectType } from '../types/definition/DefinitionObjectType';
import type { CardResponse } from '../types/response';
import { OBJECT_TYPE_ID_TO_NAME } from './objectTypeMappings';
import { buildQueryParams, getHubSpotContext } from './queryParams';

interface LegacyCardDataParams {
  context: CrmContext;
  actions: ExtensionPointApiActions<'crm.record.sidebar'>;
  config: CardConfig;
}

/**
 * Fetches legacy card data from the target URL with query parameters
 */
export const fetchFromTargetUrl = async ({
  config,
  context,
  actions,
}: LegacyCardDataParams): Promise<CardResponse> => {
  const objectTypeName =
    OBJECT_TYPE_ID_TO_NAME[context.crm?.objectTypeId] || '';
  const propertiesToSend = isValidObjectType(objectTypeName)
    ? config.propertiesToSend[objectTypeName]
    : [];

  let crmProperties: Record<string, string> = {};
  if (propertiesToSend.length > 0 && actions?.fetchCrmObjectProperties) {
    try {
      crmProperties = await actions.fetchCrmObjectProperties(propertiesToSend);
    } catch (error) {
      logger.error(
        `Failed to fetch CRM properties: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  const contextData = getHubSpotContext(context);
  const queryParams = buildQueryParams(contextData, crmProperties);
  const urlWithParams = `${config.dataRequestUrl}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

  const response = await hubspot.fetch(urlWithParams, {
    method: 'GET',
    timeout: 5000,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
