export type LegacyCardValidObjects =
  | 'contacts'
  | 'companies'
  | 'deals'
  | 'tickets';

export interface DefinitionObjectType {
  name: LegacyCardValidObjects;
  propertiesToSend: string[];
}

export type PropertiesToSend = Record<LegacyCardValidObjects, string[]>;

export function isValidObjectType(
  value: string
): value is LegacyCardValidObjects {
  return ['contacts', 'companies', 'deals', 'tickets'].includes(value);
}
