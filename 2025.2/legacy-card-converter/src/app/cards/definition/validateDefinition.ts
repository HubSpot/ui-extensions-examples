import { z } from 'zod';

import type { CardDefinition } from '../types/definition';
import type { LegacyCardValidObjects } from '../types/definition/DefinitionObjectType';
import type { PropertyDataType } from '../types/PropertyDataType';
import type { StatusOptionTypeValue } from '../types/StatusOptionType';

const propertyDataTypeSchema = z.enum([
  'STRING',
  'STATUS',
  'NUMERIC',
  'DATETIME',
  'DATE',
  'LINK',
  'CURRENCY',
  'EMAIL',
] as const satisfies readonly PropertyDataType[]);

const statusPropertyOptionSchema = z.object({
  name: z.string(),
  label: z.string(),
  type: z.enum([
    'DEFAULT',
    'SUCCESS',
    'WARNING',
    'DANGER',
    'INFO',
  ] as const satisfies readonly StatusOptionTypeValue[]),
});

const definitionPropertySchema = z.union([
  z.object({
    name: z.string(),
    label: z.string(),
    dataType: propertyDataTypeSchema,
    options: z.array(z.never()).length(0),
  }),
  z.object({
    name: z.string(),
    label: z.string(),
    dataType: z.literal('STATUS'),
    options: z.array(statusPropertyOptionSchema),
  }),
]);

// Error message templates
const errorMessages = {
  required: (field: string) => `${field} is required but was not provided`,
  wrongType: (field: string, expected: string, received: string) =>
    `${field} should be a ${expected} but got ${received}`,
  emptyString: (field: string) =>
    `${field} should be a non-empty string but got empty string`,
  emptyArray: (field: string, customMessage?: string) =>
    customMessage || `${field} must have at least one item`,
  invalidDefinition: (received: string) =>
    `Invalid card definition: expected type CardDefinition, received ${received}`,
};

const definitionObjectTypeSchema = z.object({
  name: z.enum([
    'contacts',
    'companies',
    'deals',
    'tickets',
  ] as const satisfies readonly LegacyCardValidObjects[]),
  propertiesToSend: z.array(z.string()),
});

export const cardDefinitionSchema: z.ZodType<CardDefinition> = z.object(
  {
    title: z
      .string({
        error: iss =>
          iss.input === undefined
            ? errorMessages.required('title')
            : errorMessages.wrongType('title', 'string', typeof iss.input),
      })
      .min(1, { error: () => errorMessages.emptyString('title') }),

    fetch: z.object(
      {
        targetUrl: z
          .string({
            error: iss =>
              iss.input === undefined
                ? errorMessages.required('fetch.targetUrl')
                : errorMessages.wrongType(
                    'fetch.targetUrl',
                    'string',
                    typeof iss.input
                  ),
          })
          .min(1, {
            error: () => errorMessages.emptyString('fetch.targetUrl'),
          }),

        objectTypes: z
          .array(definitionObjectTypeSchema, {
            error: iss =>
              iss.input === undefined
                ? errorMessages.required('fetch.objectTypes')
                : errorMessages.wrongType(
                    'fetch.objectTypes',
                    'array',
                    typeof iss.input
                  ),
          })
          .min(1, {
            error: () =>
              errorMessages.emptyArray(
                'fetch.objectTypes',
                'fetch.objectTypes (at least one object type required)'
              ),
          }),
      },
      {
        error: iss =>
          iss.input === undefined
            ? errorMessages.required('fetch')
            : errorMessages.wrongType('fetch', 'object', typeof iss.input),
      }
    ),

    display: z.object(
      {
        properties: z
          .array(definitionPropertySchema, {
            error: iss =>
              iss.input === undefined
                ? errorMessages.required('display.properties')
                : errorMessages.wrongType(
                    'display.properties',
                    'array',
                    typeof iss.input
                  ),
          })
          .min(1, {
            error: () =>
              errorMessages.emptyArray(
                'display.properties',
                'display.properties (at least one property required)'
              ),
          }),
      },
      {
        error: iss =>
          iss.input === undefined
            ? errorMessages.required('display')
            : errorMessages.wrongType('display', 'object', typeof iss.input),
      }
    ),

    actions: z
      .object({
        baseUrls: z.array(
          z.url({
            protocol: /^https?$/,
            hostname: z.regexes.domain,
            message: 'Each baseUrl must be a valid Web URL',
          })
        ),
      })
      .optional(),
  },
  {
    error: iss => {
      if (iss.input === null) return errorMessages.invalidDefinition('null');
      if (iss.input === undefined)
        return errorMessages.invalidDefinition('undefined');
      return errorMessages.invalidDefinition(typeof iss.input);
    },
  }
);

type ValidateResult =
  | {
      success: true;
      data: CardDefinition;
    }
  | {
      success: false;
      errorMessages: string[];
    };
/**
 * Validates that a definition has all necessary fields
 */
export const validateDefinition = (
  definition: Partial<CardDefinition>
): ValidateResult => {
  const result = cardDefinitionSchema.safeParse(definition);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const flatZErrors = z.flattenError(result.error);
  const errorMessages = [
    ...Object.values(flatZErrors.fieldErrors).flatMap(message => message),
    ...flatZErrors.formErrors,
  ];
  return { success: false, errorMessages };
};
