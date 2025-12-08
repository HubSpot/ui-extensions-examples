import {
  logger,
  useExtensionActions,
  useExtensionContext,
} from '@hubspot/ui-extensions';
import { useEffect, useReducer, useRef } from 'react';

import { useCardConfig, useCardLocation } from '../contexts';
import type { CardResponse } from '../types/response';
import { fetchFromTargetUrl } from '../utils/fetchFromTargetUrl';

type FetchState =
  | { status: 'loading' }
  | { status: 'success'; data: CardResponse }
  | { status: 'error'; error: string };

type FetchAction =
  | { type: 'START_LOADING' }
  | { type: 'SUCCESS'; payload: CardResponse }
  | { type: 'ERROR'; payload: string };

const initialState: FetchState = {
  status: 'loading',
};

function fetchReducer(state: FetchState, action: FetchAction): FetchState {
  switch (action.type) {
    case 'START_LOADING':
      return {
        status: 'loading',
      };
    case 'SUCCESS':
      return {
        status: 'success',
        data: action.payload,
      };
    case 'ERROR':
      return {
        status: 'error',
        error: action.payload,
      };
    default:
      return state;
  }
}

export function useFetchLegacyCardData() {
  const config = useCardConfig();
  const cardLocation = useCardLocation();
  const context = useExtensionContext<typeof cardLocation>();
  const actions = useExtensionActions<typeof cardLocation>();
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const requestIdRef = useRef(0);

  useEffect(() => {
    const loadData = async () => {
      const currentRequestId = ++requestIdRef.current;
      dispatch({ type: 'START_LOADING' });

      try {
        const responseData = await fetchFromTargetUrl({
          context,
          actions,
          config,
        });

        // Only update state if this is still the latest request
        if (currentRequestId === requestIdRef.current) {
          dispatch({ type: 'SUCCESS', payload: responseData });
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to fetch data';
        logger.error(errorMessage);

        // Only update state if this is still the latest request
        if (currentRequestId === requestIdRef.current) {
          dispatch({ type: 'ERROR', payload: errorMessage });
        }
      }
    };

    loadData();
  }, [context, actions, config]);

  return state;
}
