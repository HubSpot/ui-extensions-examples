import type { CardAction } from './CardAction';
import type { CardObject } from './CardObject';

export interface CardResponse {
  results: CardObject[];
  settingsAction?: CardAction;
  primaryAction?: CardAction;
  secondaryActions?: CardAction[];
}
