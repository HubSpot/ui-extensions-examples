import {
  Alert,
  Button,
  Checkbox,
  Flex,
  Link,
  Panel,
  PanelBody,
  PanelSection,
  Text,
} from '@hubspot/ui-extensions';

interface ValidationErrorUIProps {
  errorMessages?: string[];
}

export function ValidationErrorUI({ errorMessages }: ValidationErrorUIProps) {
  return (
    <Flex direction='column' gap='md' testId='validationErrorContainer'>
      <Alert
        variant='error'
        title='Configuration Issues Detected'
        testId='configAlert'
      >
        <Text testId='configMessage'>
          Your card configuration has issues that must be resolved before it can
          be displayed. Complete the setup steps below to fix these issues.
          {errorMessages && errorMessages.length > 0 && (
            <Text inline={true}>
              {' '}
              View detailed error messages below for more information.
            </Text>
          )}
        </Text>
      </Alert>
      <Flex direction='column' gap='sm'>
        <Text format={{ fontWeight: 'demibold' }} testId='todoHeader'>
          To Do:
        </Text>
        <Flex direction='column' gap='xs'>
          <Checkbox name='todo-1' testId='getDefinitionCheckbox'>
            <Text inline={true}>
              <Text format={{ fontWeight: 'bold' }} inline={true}>
                Get Definition:{' '}
              </Text>
              Call{' '}
              <Link
                href='https://developers.hubspot.com/docs/api-reference/crm-public-app-crm-cards-v3/cards/get-crm-v3-extensions-cards-dev-appId-cardId'
                testId='definitionApiLink'
              >
                /crm/v3/extensions/cards-dev/:appId/:cardId
              </Link>{' '}
              to get the definition of the existing legacy CRM card you want to
              replicate!
            </Text>
          </Checkbox>
          <Checkbox name='todo-4' testId='allowUrlsCheckbox'>
            <Text inline={true}>
              <Text format={{ fontWeight: 'bold' }} inline={true}>
                Allow URLs:{' '}
              </Text>
              In the App&apos;s hsmeta config file, add permittedUrls to allow
              the Extension card to access the URLs in the definition.
            </Text>
          </Checkbox>
          <Checkbox name='todo-2' testId='addObjectTypesCheckbox'>
            <Text inline={true}>
              <Text format={{ fontWeight: 'bold' }} inline={true}>
                Add ObjectTypes:{' '}
              </Text>
              Go to the definition and add the objectTypes to the hsmeta config
              file so the Extension card is available for all the existing
              object types.
            </Text>
          </Checkbox>
          <Checkbox name='todo-3' testId='renameCheckbox'>
            <Text inline={true}>
              <Text format={{ fontWeight: 'bold' }} inline={true}>
                Rename:{' '}
              </Text>
              In the hsmeta config file, rename the title of the card to be the
              App Name instead of {'{APP NAME}'}
            </Text>
          </Checkbox>
        </Flex>
      </Flex>

      {errorMessages && errorMessages.length > 0 && (
        <Flex direction='column' gap='sm'>
          <Text
            format={{ fontWeight: 'demibold' }}
            testId='errorMessagesHeader'
          >
            Validation Errors ({errorMessages.length}):
          </Text>
          <Button
            variant='secondary'
            overlay={
              <Panel
                id='validation-errors-panel'
                title='Validation Error Details'
                width='md'
                testId='errorDetailsPanel'
              >
                <PanelBody>
                  <PanelSection>
                    <Alert variant='error' title='Configuration Issues Found'>
                      <Text>
                        The following validation errors must be resolved before
                        the card can be displayed:
                      </Text>
                    </Alert>
                  </PanelSection>
                  <PanelSection>
                    <Flex direction='column' gap='sm'>
                      {errorMessages.map((error, index) => (
                        <Flex
                          key={index}
                          gap='xs'
                          align='start'
                          testId={`errorMessage-${index}`}
                        >
                          <Text format={{ fontWeight: 'demibold' }}>•</Text>
                          <Text>{error}</Text>
                        </Flex>
                      ))}
                    </Flex>
                  </PanelSection>
                </PanelBody>
              </Panel>
            }
            testId='viewErrorDetailsButton'
          >
            View Error Details
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
