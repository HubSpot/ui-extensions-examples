export const StatusOptionType = {
  DEFAULT: 'DEFAULT',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  DANGER: 'DANGER',
  INFO: 'INFO',
} as const;

export type StatusOptionTypeValue =
  (typeof StatusOptionType)[keyof typeof StatusOptionType];
