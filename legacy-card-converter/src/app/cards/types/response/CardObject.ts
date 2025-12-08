import type { CardAction } from './CardAction';
import type { CardProperty } from './CardProperty';

export interface CardObject {
  objectId: number;
  title: string;
  link?: string;
  properties?: CardProperty[];
  actions?: CardAction[];
  [key: string]: unknown;
}
