import { Alert, Flex, LoadingSpinner, Text } from '@hubspot/ui-extensions';

import { useFetchLegacyCardData } from '../hooks/useFetchLegacyCardData';
import { ActionsBelowObjects } from './ActionsBelowObjects';
import { ObjectTile } from './ObjectTile';

export function LegacyCardContent() {
  const state = useFetchLegacyCardData();

  if (state.status === 'loading') {
    return (
      <Flex direction='column' align='center' gap='md'>
        <LoadingSpinner
          testId='cardContentLoading'
          showLabel
          layout='centered'
          size='md'
          label='Fetching data...'
        />
      </Flex>
    );
  }

  if (state.status === 'error') {
    return (
      <Flex direction='column' gap='md' testId='fetchConfigErrorMessage'>
        <Text>
          There was a problem displaying this content. Try refreshing the page.
          If this problem continues, contact your app developer for support.
        </Text>
        <Alert variant='warning' title=''>
          For developers: You can find more details about this error in the
          app&apos;s Extension card logs.
        </Alert>
      </Flex>
    );
  }

  return (
    <Flex direction='column' gap='lg'>
      <Flex direction='column' gap='md'>
        {state.data.results.map(obj => (
          <ObjectTile key={obj.objectId} obj={obj} />
        ))}
      </Flex>

      <ActionsBelowObjects
        settingsAction={state.data.settingsAction}
        primaryAction={state.data.primaryAction}
        secondaryActions={state.data.secondaryActions}
      />
    </Flex>
  );
}
