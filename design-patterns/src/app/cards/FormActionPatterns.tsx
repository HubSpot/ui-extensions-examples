import React from 'react';
import {
  Alert,
  Button,
  Flex,
  Form,
  Input,
  Link,
  Text,
  TextArea,
  hubspot,
} from '@hubspot/ui-extensions';

// Define the extension to be run within the Hubspot CRM
hubspot.extend<'crm.record.tab'>(() => <FormSimple />);

// Define the FormSimple component.
const FormSimple = () => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState('');

  return (
    <>
      <Text>
        This is some information about this form.{' '}
        <Link href="https://www.hubspot.com">Learn more</Link>.
      </Text>
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
                onChange={setEmail}
                value={email}
                placeholder="name@domain.com"
                description="We'll never share your email with anyone else."
                tooltip="Your email is only used for support and account purposes."
              />
              <Flex direction="column" gap="md">
                <TextArea
                  name="notes"
                  label="Notes"
                  placeholder="Add any notes about the account here."
                />
                <Flex align="center" gap="sm">
                  {/* Use a Button to do the action of submitting the form. */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={email === ''}
                  >
                    Submit
                  </Button>
                  {/* Use a link to navigate to another location. */}
                  <Link href="https://www.hubspot.com">More information</Link>
                </Flex>
              </Flex>
            </Flex>
          </Form>
        )
      }
    </>
  );
};
