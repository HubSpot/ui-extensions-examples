import React from 'react';
import {
  Alert,
  Box,
  Button,
  ButtonRow,
  Flex,
  Form,
  Input,
  Link,
  Modal,
  ModalBody,
  Text,
  TextArea,
  hubspot,
} from '@hubspot/ui-extensions';

// Define the extension to be run within the Hubspot CRM
hubspot.extend<'crm.record.tab'>(({ actions }) => (
  <FormModal actions={actions} />
));

// Define the FormModal component.
const FormModal = ({ actions }) => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  return (
    <>
      <Button
        overlay={
          <Modal
            id="modal-form-example"
            title="Dialog Header"
            width="lg"
            onClose={() => {
              setFormSubmitted(false);
            }}
          >
            <ModalBody>
              <Text>
                When we got all the 0's and 1's lined up, a link will show up in
                your{' '}
                <Link href="https://knowledge.hubspot.com/user-management/how-to-set-up-user-notifications-in-hubspot">
                  Notification Center
                </Link>
                . Also, just to be sure, you're gonna get a confirmation email.
              </Text>
              <Flex>
                <Box flex={2}>
                  {
                    // Display a success message when the form is submitted.
                    formSubmitted ? (
                      <Alert title="Success" variant="success">
                        Account created successfully.
                      </Alert>
                    ) : (
                      <Form
                        onSubmit={(e) => {
                          // Print out the form data when the form is submitted.
                          console.log(e.targetValue);
                          setFormSubmitted(true);
                        }}
                      >
                        <Flex direction="column" gap="sm">
                          <Input name="first_name" label="First Name" />
                          <Input name="last_name" label="Last Name" />
                          <Input
                            name="email"
                            label="Email"
                            required
                            placeholder="name@domain.com"
                            description="We'll never share your email with anyone else."
                            tooltip="Your email is only used for support and account purposes."
                          />
                          <Flex direction="column" gap="lg">
                            <TextArea
                              name="notes"
                              label="Notes"
                              required
                              placeholder="Add any notes about the account here."
                            />
                            <ButtonRow>
                              <Button type="submit" variant="primary">
                                Create
                              </Button>
                              <Button
                                onClick={() =>
                                  actions.closeOverlay('modal-form-example')
                                }
                              >
                                Cancel
                              </Button>
                            </ButtonRow>
                          </Flex>
                        </Flex>
                      </Form>
                    )
                  }
                </Box>
                {/* Added an empty Box component to make the form narrower. */}
                <Box flex={1}>{''}</Box>
              </Flex>
            </ModalBody>
          </Modal>
        }
      >
        Display Form
      </Button>
    </>
  );
};
