// Importing necessary components from React and HubSpot UI Extensions
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  DescriptionList,
  DescriptionListItem,
  Input,
  Link,
  LoadingSpinner,
  Text,
  Flex,
  hubspot,
  type Context,
  type ServerlessFuncRunner,
} from '@hubspot/ui-extensions';

// Define the extension to be run within the Hubspot CRM
hubspot.extend<'crm.record.tab'>(({ context, runServerlessFunction }) => (
  // This line specifies what is returned to the CRM tab
  <Extension runServerless={runServerlessFunction} context={context} />
));

// Define the types for the properties we're going to use in our Extension component
interface ExtensionProps {
  runServerless: ServerlessFuncRunner;
  context: Context;
}

// Define the interface for the Association type
export interface Association {
  total: number;
  items: { hs_object_id: number }[];
}

// Define the interface for the AssociationsGQL type
export interface AssociationsGQL {
  deal_collection__contact_to_deal: Association;
  company_collection__primary: Association;
}

// Define the Extension component, taking in runServerless and context as props
const Extension = ({ runServerless, context }: ExtensionProps) => {
  const [loading, setLoading] = useState(true);
  const [associations, setAssociations] = useState<AssociationsGQL>();
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Request association data from serverless function
    runServerless({
      name: 'fetchAssociations',
      propertiesToSend: ['hs_object_id'],
    }).then((resp) => {
      setLoading(false); // End loading state
      if (resp.status === 'SUCCESS') {
        // Set associations with response data
        setAssociations(resp.response.associations as AssociationsGQL);
      } else {
        setError(resp.message); // Set error message from response
      }
    });
  }, [runServerless]);

  // Function to handle contact duplication
  const duplicateContact = () => {
    setLoading(true);
    runServerless({
      name: 'duplicateContact',
      propertiesToSend: ['hs_object_id'],
      parameters: { associations, email }, // Send current associations and email as parameters
    }).then((resp) => {
      setLoading(false);
      if (resp.status === 'SUCCESS') {
        const contact = resp.response;
        // Set the URL to the newly created contact
        setUrl(
          `https://app.hubspot.com/contacts/${context.portal.id}/contact/${contact.id}`
        );
      } else {
        setError(resp.message); // Set error message from response
      }
    });
  };

  if (loading) {
    // If loading, show a spinner
    return <LoadingSpinner label="fetching object associations" />;
  }

  if (error !== '') {
    // If there's an error, show an alert
    return <Alert title="Error">{error}</Alert>;
  }

  if (associations && url === '') {
    // If we have associations data but no URL, show the associations and a duplication form
    return (
      <>
        <Flex direction="column" gap="sm">
          <Text format={{ fontWeight: 'bold' }}>
            Enter an email for the new contact:
          </Text>
          <Input
            label=""
            name="email"
            onInput={(v) => setEmail(v)}
            required={true}
          />
          <Text format={{ fontWeight: 'bold' }}>
            Number of associations to be copied:
          </Text>
          <DescriptionList direction="row">
            <DescriptionListItem label={'Deals'}>
              {associations.deal_collection__contact_to_deal.total}
            </DescriptionListItem>
            <DescriptionListItem label={'Companies'}>
              {associations.company_collection__primary.total}
            </DescriptionListItem>
          </DescriptionList>
          <Flex direction="row" justify="end">
            <Button
              onClick={duplicateContact}
              disabled={email === ''}
              variant="primary"
            >
              Duplicate Contact
            </Button>
          </Flex>
        </Flex>
      </>
    );
  }

  // If a URL has been generated, show it
  return (
    <>
      <Link href={url}>{url.toString()}</Link>
    </>
  );
};
