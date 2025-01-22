import React from 'react';
import {
  Alert,
  Button,
  DateInput,
  Flex,
  Form,
  Input,
  Link,
  NumberInput,
  Panel,
  PanelBody,
  PanelFooter,
  PanelSection,
  Select,
  StepIndicator,
  Text,
  TextArea,
  hubspot,
} from '@hubspot/ui-extensions';

// Define the extension to be run within the Hubspot CRM
hubspot.extend<'crm.record.tab'>(({ actions }) => (
  <FormMultistep actions={actions} />
));

// Define the FormSimple component.
const FormMultistep = ({ actions }) => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formStep, setFormStep] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const today = new Date();
  const [eventDate, setEventDate] = React.useState({
    year: today.getFullYear(),
    month: today.getMonth(),
    date: today.getDate(),
  });
  const [eventName, setEventName] = React.useState('');

  const activateNextButton = () => {
    if (
      (formStep === 0 && email !== '') ||
      (formStep === 1 && eventDate !== null && eventName !== '') ||
      formStep === 2
    ) {
      return true;
    }

    return false;
  };

  return (
    <>
      <Text>
        HubSpot recommends having forms inside overlays like Modals and Panels
        to keep the main view clean and easy to navigate.
      </Text>
      <Button
        overlay={
          <Panel
            id="simple-form-example"
            title="Dialog Header"
            width="md"
            variant="modal"
            onClose={() => {
              setFormStep(0);
              setFormSubmitted(false);
            }}
          >
            <Form
              onSubmit={(e) => {
                // Print out the form data when the form is submitted.
                setFormStep(4);
                setFormSubmitted(true);
              }}
            >
              <PanelBody>
                <PanelSection>
                  {/* Wrap the StepIndicator in Flex to ensure it goes full-width */}
                  <Flex gap="md" direction="column">
                    <StepIndicator
                      currentStep={formStep}
                      stepNames={['Info', 'Event', 'Rate', 'Followup']}
                    />
                    <Text>
                      This is our HubSpot pattern for a multistep Form in Panel.
                      Note how the Primary Button always appears to the left of
                      the Secondary Button. Both buttons should be left aligned
                      to the Panel.
                    </Text>
                    {
                      // Display a success message when the form is submitted.
                      formSubmitted ? (
                        <Alert title="Success" variant="success">
                          Form submitted successfully.
                        </Alert>
                      ) : (
                        <>
                          {formStep === 0 && (
                            <>
                              <Input name="first_name" label="First Name" />
                              <Input name="last_name" label="Last Name" />
                              <Input
                                name="email"
                                label="Email"
                                required
                                onChange={setEmail}
                                placeholder="name@domain.com"
                                description="We'll never share your email with anyone else."
                                tooltip="Your email is only used for support and account purposes."
                              />
                            </>
                          )}
                          {formStep === 1 && (
                            <>
                              <DateInput
                                name="event_date"
                                label="Event Date"
                                value={eventDate}
                                onChange={(value) => {
                                  console.log(value);
                                  setEventDate(value);
                                }}
                                required
                              />
                              <Input
                                name="event_name"
                                label="Event Name"
                                value={eventName}
                                onChange={setEventName}
                                required
                              />
                            </>
                          )}
                          {formStep === 2 && (
                            <>
                              <Select
                                label="Rating"
                                options={[
                                  { label: '☆☆☆☆☆', value: 5 },
                                  { label: '☆☆☆☆', value: 4 },
                                  { label: '☆☆☆', value: 3 },
                                  { label: '☆☆', value: 2 },
                                  { label: '☆', value: 1 },
                                ]}
                                name="rating"
                              />
                              <TextArea
                                name="notes"
                                label="Notes"
                                placeholder="Additional notes about your rating."
                              />
                            </>
                          )}
                          {formStep === 3 && (
                            <>
                              <Select
                                label="Update Frequency"
                                options={[
                                  { label: 'Daily', value: 'daily' },
                                  { label: 'Weekly', value: 'weekly' },
                                  { label: 'Monthly', value: 'monthly' },
                                ]}
                                name="update_frequency"
                              />
                              <NumberInput
                                name="number_of_records"
                                label="Number of Records"
                                min={1}
                                max={100}
                              />
                            </>
                          )}
                        </>
                      )
                    }
                  </Flex>
                </PanelSection>
              </PanelBody>
              <PanelFooter>
                {
                  // Display the "Next" button for all steps except the last step.
                  formStep < 3 && (
                    <Button
                      variant="primary"
                      type="button"
                      onClick={() => setFormStep(formStep + 1)}
                      disabled={!activateNextButton()}
                    >
                      Next
                    </Button>
                  )
                }
                {
                  // Display the "Submit" button on the last step.
                  formStep === 3 && (
                    <Button type="submit" variant="primary">
                      Submit
                    </Button>
                  )
                }
                {/* Use this button to close the Panel */}
                <Button
                  onClick={() => actions.closeOverlay('simple-form-example')}
                >
                  {formSubmitted === true ? 'Close' : 'Cancel'}
                </Button>
              </PanelFooter>
            </Form>
          </Panel>
        }
      >
        Display Form
      </Button>
    </>
  );
};
