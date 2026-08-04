export const ActionType = {
  IFRAME: 'IFRAME',
  ACTION_HOOK: 'ACTION_HOOK',
  CONFIRMATION_ACTION_HOOK: 'CONFIRMATION_ACTION_HOOK',
} as const;

export type ActionTypeValue = (typeof ActionType)[keyof typeof ActionType];
