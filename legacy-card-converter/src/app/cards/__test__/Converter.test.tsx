import { Flex, LoadingSpinner } from '@hubspot/ui-extensions';
import { createRenderer } from '@hubspot/ui-extensions/testing';
import { describe, expect, it, vi } from 'vitest';

import { LegacyCardConverter } from '../Converter';
import { useFetchLegacyCardData } from '../hooks/useFetchLegacyCardData';
import { mockHubSpotCardConfig } from '../test-utils/mocks';
import { CardLocation } from '../types';

vi.mock('../hooks/useFetchLegacyCardData', () => ({
  useFetchLegacyCardData: vi.fn(),
}));

describe('LegacyCardConverter', () => {
  it('renders ValidationErrorUI when definition is invalid', () => {
    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(
      <LegacyCardConverter
        cardLocation={CardLocation.CRM_RECORD_SIDEBAR}
        // @ts-expect-error card config is not complete
        cardConfigResult={{
          success: false,
        }}
      />
    );

    expect(findByTestId(Flex, 'validationErrorContainer')).toBeDefined();
  });

  it('renders LegacyCardContent with loading state when definition is valid', async () => {
    vi.mocked(useFetchLegacyCardData).mockReturnValue({ status: 'loading' });

    const { render, findByTestId } = createRenderer('crm.record.sidebar');

    render(
      <LegacyCardConverter
        cardLocation={CardLocation.CRM_RECORD_SIDEBAR}
        cardConfigResult={{
          success: true,
          cardConfig: mockHubSpotCardConfig,
        }}
      />
    );

    expect(findByTestId(LoadingSpinner, 'cardContentLoading')).toBeDefined();
  });
});
