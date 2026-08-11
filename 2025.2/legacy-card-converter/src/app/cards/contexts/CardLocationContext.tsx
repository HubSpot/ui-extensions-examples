import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import { CardLocation, type CardLocationValue } from '../types';

const CardLocationContext = createContext<CardLocationValue>(
  CardLocation.CRM_RECORD_SIDEBAR
);

interface CardLocationProviderProps {
  cardLocation: CardLocationValue;
  children: ReactNode;
}

export function CardLocationProvider({
  cardLocation,
  children,
}: CardLocationProviderProps) {
  return (
    <CardLocationContext.Provider value={cardLocation}>
      {children}
    </CardLocationContext.Provider>
  );
}

export function useCardLocation(): CardLocationValue {
  return useContext(CardLocationContext);
}
