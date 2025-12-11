import { StatusOptionType } from '../types';

/**
 * Formats a currency value with currency code using locale-appropriate formatting
 */
export const formatCurrency = (
  value: string | number,
  currencyCode?: string,
  locale?: string
): string => {
  if (!currencyCode) {
    return String(value);
  }

  try {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (!isNaN(numValue)) {
      const userLocale = locale || 'en';
      return new Intl.NumberFormat(userLocale, {
        style: 'currency',
        currency: currencyCode,
      }).format(numValue);
    }
  } catch (err) {
    // Fallback to simple formatting
  }

  return `${currencyCode} ${value}`;
};

/**
 * Formats a date value (yyyy-mm-dd format) using locale-appropriate formatting
 */
export const formatDate = (value: string | number, locale?: string): string => {
  try {
    const dateStr = String(value);
    let date: Date | null = null;

    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      date = new Date(dateStr + 'T00:00:00');
      if (isNaN(date.getTime())) {
        date = null;
      }
    } else {
      date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        date = null;
      }
    }

    if (date) {
      const userLocale = locale || 'en';
      return new Intl.DateTimeFormat(userLocale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);
    }
  } catch (err) {
    // Fallback to original value
  }
  return String(value);
};

/**
 * Formats a datetime value (milliseconds since epoch) using locale and timezone
 */
export const formatDateTime = (
  value: string | number,
  locale?: string,
  timezone?: string
): string => {
  try {
    const timestamp = typeof value === 'string' ? parseInt(value, 10) : value;
    if (!isNaN(timestamp)) {
      const date = new Date(timestamp);
      if (!isNaN(date.getTime())) {
        const userLocale = locale || 'en';
        const options: Intl.DateTimeFormatOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        };

        if (timezone) {
          options.timeZone = timezone;
        }

        return new Intl.DateTimeFormat(userLocale, options).format(date);
      }
    }
  } catch (err) {
    // Fallback to original value
  }
  return String(value);
};

/**
 * Formats a numeric value with proper number formatting using locale-appropriate formatting
 */
export const formatNumeric = (
  value: string | number,
  locale?: string
): string => {
  try {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (!isNaN(numValue)) {
      const userLocale = locale || 'en';
      return new Intl.NumberFormat(userLocale).format(numValue);
    }
  } catch (err) {
    // Fallback to original value
  }
  return String(value);
};

/**
 * Maps STATUS optionType to Tag variant
 */
export const getStatusVariant = (
  optionType?: string
): 'default' | 'info' | 'error' | 'warning' | 'success' => {
  switch (optionType) {
    case StatusOptionType.SUCCESS:
      return 'success';
    case StatusOptionType.WARNING:
      return 'warning';
    case StatusOptionType.DANGER:
      return 'error';
    case StatusOptionType.INFO:
      return 'info';
    case StatusOptionType.DEFAULT:
    default:
      return 'default';
  }
};
