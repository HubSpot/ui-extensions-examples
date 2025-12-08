import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import type { CardConfig } from '../definition/CardConfig';

const CardConfigContext = createContext<CardConfig | null>(null);

interface CardConfigProviderProps {
  cardConfig: CardConfig;
  children: ReactNode;
}

export function CardConfigProvider({
  cardConfig,
  children,
}: CardConfigProviderProps) {
  return (
    <CardConfigContext.Provider value={cardConfig}>
      {children}
    </CardConfigContext.Provider>
  );
}

export function useCardConfig(): CardConfig {
  const cardConfig = useContext(CardConfigContext);

  if (cardConfig === null) {
    throw new Error('useCardConfig must be used within a CardConfigProvider');
  }

  return cardConfig;
}
