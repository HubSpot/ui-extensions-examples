import { describe, expect, it } from 'vitest';

import { buildQueryParams } from '../queryParams';

describe('buildQueryParams', () => {
  it('builds query params with all context data', () => {
    const contextData = {
      userId: '123',
      userEmail: 'test@example.com',
      associatedObjectId: '456',
      associatedObjectType: 'CONTACT',
      portalId: '789',
    };

    const params = buildQueryParams(contextData);

    expect(params.get('userId')).toBe('123');
    expect(params.get('userEmail')).toBe('test@example.com');
    expect(params.get('associatedObjectId')).toBe('456');
    expect(params.get('associatedObjectType')).toBe('CONTACT');
    expect(params.get('portalId')).toBe('789');
  });

  it('builds query params with CRM properties', () => {
    const contextData = {
      userId: '123',
      portalId: '789',
    };
    const crmProperties = {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
    };

    const params = buildQueryParams(contextData, crmProperties);

    expect(params.get('userId')).toBe('123');
    expect(params.get('portalId')).toBe('789');
    expect(params.get('firstname')).toBe('John');
    expect(params.get('lastname')).toBe('Doe');
    expect(params.get('email')).toBe('john@example.com');
  });

  it('skips empty or undefined context data fields', () => {
    const contextData = {
      userId: '123',
      userEmail: '',
      associatedObjectId: undefined,
      portalId: '789',
    };

    const params = buildQueryParams(contextData);

    expect(params.get('userId')).toBe('123');
    expect(params.get('portalId')).toBe('789');
    expect(params.has('userEmail')).toBe(false);
    expect(params.has('associatedObjectId')).toBe(false);
  });

  it('skips empty, null, or undefined CRM properties', () => {
    const contextData = {
      userId: '123',
    };
    const crmProperties = {
      firstname: 'John',
      lastname: '',
      email: null,
      phone: undefined,
    } as unknown as Record<string, string>; // intentionally casting to check for null and undefined values

    const params = buildQueryParams(contextData, crmProperties);

    expect(params.get('firstname')).toBe('John');
    expect(params.has('lastname')).toBe(false);
    expect(params.has('email')).toBe(false);
    expect(params.has('phone')).toBe(false);
  });

  it('handles empty context data', () => {
    const contextData = {};

    const params = buildQueryParams(contextData);

    expect(params.toString()).toBe('');
  });
});
