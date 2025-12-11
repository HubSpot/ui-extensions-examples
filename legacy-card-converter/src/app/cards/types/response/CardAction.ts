import type { ActionTypeValue } from '../ActionType';

export interface CardAction {
  type: ActionTypeValue;
  label: string;
  uri?: string;
  httpMethod?: string;
  width?: number;
  height?: number;
  confirmationMessage?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  associatedObjectProperties?: string[];
}
