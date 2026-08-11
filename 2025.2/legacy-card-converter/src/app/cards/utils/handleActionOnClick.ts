import { hubspot } from '@hubspot/ui-extensions';

import { ActionType, type CardConfig } from '../types';
import type { CardAction } from '../types/response';
import { buildQueryParams, getHubSpotContext } from './queryParams';

/**
 * Main action handler that routes to appropriate handler based on action type
 */
export const handleActionOnClick = async (
  action: CardAction,
  hubspotContext?: any,
  hubspotActions?: any,
  objectTitle?: string,
  config?: CardConfig
): Promise<void> => {
  try {
    switch (action.type) {
      case ActionType.IFRAME:
        handleIframeAction(action, hubspotActions, objectTitle);
        break;
      case ActionType.ACTION_HOOK:
        await handleActionHook(
          action,
          false,
          hubspotContext,
          hubspotActions,
          config
        );
        break;
      case ActionType.CONFIRMATION_ACTION_HOOK:
        await handleActionHook(
          action,
          true,
          hubspotContext,
          hubspotActions,
          config
        );
        break;
      default:
        console.warn('Unknown action type:', action.type);
        if (hubspotActions?.addAlert) {
          hubspotActions.addAlert({
            type: 'warning',
            message: `Unknown action type: ${action.type}`,
          });
        }
    }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Action failed';

    if (hubspotActions?.addAlert) {
      hubspotActions.addAlert({
        type: 'danger',
        message: `Error: ${errorMessage}`,
      });
    }
  }
};

/**
 * Handles IFRAME actions by opening a modal with the iframe URL using HubSpot's openIframeModal
 */
const handleIframeAction = (
  action: CardAction,
  hubspotActions: any,
  objectTitle?: string
) => {
  if (!action.uri) {
    console.error('IFRAME action missing URI');
    return;
  }

  if (!hubspotActions?.openIframeModal) {
    return;
  }

  const url = action.uri;
  const width = action.width;
  const height = action.height;

  const modalTitle = objectTitle
    ? `${objectTitle} - ${action.label}`
    : action.label;

  hubspotActions.openIframeModal(
    {
      uri: url,
      width,
      height,
      title: modalTitle,
      flush: false,
    },
    () => {
      console.log('Iframe modal closed');
    }
  );
};

/**
 * Handles ACTION_HOOK actions by making HTTP requests
 */
const handleActionHook = async (
  action: CardAction,
  showConfirmation: boolean,
  hubspotContext: any,
  hubspotActions: any,
  config?: CardConfig
): Promise<void> => {
  if (!action.uri) {
    throw new Error('ACTION_HOOK missing URI');
  }

  if (!config) {
    throw new Error('Config is required for action handling');
  }

  const contextData = getHubSpotContext(hubspotContext);
  const method = (action.httpMethod || 'GET').toUpperCase() as
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'PATCH';

  if (!config.isValidActionUri(action.uri)) {
    const errorMessage = `Action URI: '${action.uri}' does not share a base URI with the base URIs defined for this object type`;
    throw new Error(errorMessage);
  }

  let url = action.uri;

  let fetchedProperties: Record<string, string> = {};
  if (
    action.associatedObjectProperties &&
    action.associatedObjectProperties.length > 0 &&
    hubspotActions?.fetchCrmObjectProperties
  ) {
    try {
      fetchedProperties = await hubspotActions.fetchCrmObjectProperties(
        action.associatedObjectProperties
      );
    } catch (err) {
      console.warn('Failed to fetch CRM object properties:', err);
    }
  }

  const params = buildQueryParams(contextData, fetchedProperties);
  const separator = url.includes('?') ? '&' : '?';
  url = `${url}${separator}${params.toString()}`;

  try {
    const fetchOptions: {
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
      headers?: Record<string, string>;
      body?: Record<string, unknown>;
    } = {
      method,
    };

    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      const body: Record<string, unknown> = { ...contextData };
      fetchOptions.body = Object.assign(body, fetchedProperties);
    }

    const response = await hubspot.fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`Action failed with status ${response.status}`);
    }

    const responseData = await response.json().catch(() => ({}));

    if (hubspotActions?.addAlert) {
      hubspotActions.addAlert({
        type: 'success',
        message: `${action.label} succeeded.`,
      });
    }

    return responseData;
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Unknown error occurred';
    console.error('Action failed:', errorMessage);

    throw err;
  }
};
