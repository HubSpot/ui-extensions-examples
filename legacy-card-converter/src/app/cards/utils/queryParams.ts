import type { CrmContext } from '@hubspot/ui-extensions';

export const OBJECT_TYPE_ID_TO_NAME_FOR_QUERY_PARAMETERS: Record<
  string,
  string
> = {
  '0-1': 'CONTACT',
  '0-2': 'COMPANY',
  '0-3': 'DEAL',
  '0-5': 'TICKET',
};

export interface QueryParamContextData {
  userId?: string;
  userEmail?: string;
  associatedObjectId?: string;
  associatedObjectType?: string;
  portalId?: string;
}

/**
 * Converts raw HubSpot context to a standardized format for query parameters
 */
export const getHubSpotContext = (
  context: CrmContext
): QueryParamContextData => {
  if (!context) {
    return {
      userId: '',
      userEmail: '',
      associatedObjectId: '',
      associatedObjectType: '',
      portalId: '',
    };
  }

  const objectTypeId = context.crm?.objectTypeId;
  const associatedObjectType = objectTypeId
    ? OBJECT_TYPE_ID_TO_NAME_FOR_QUERY_PARAMETERS[objectTypeId] || objectTypeId
    : '';

  return {
    userId: context.user?.id?.toString() || '',
    userEmail: context.user?.email || '',
    associatedObjectId: context.crm?.objectId?.toString() || '',
    associatedObjectType,
    portalId: context.portal?.id?.toString() || '',
  };
};

/**
 * Builds query parameters from context data and CRM properties
 */
export const buildQueryParams = (
  contextData: QueryParamContextData,
  crmProperties: Record<string, string> = {}
): URLSearchParams => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries({
    ...contextData,
    ...crmProperties,
  })) {
    if (value) {
      params.append(key, value);
    }
  }

  return params;
};
