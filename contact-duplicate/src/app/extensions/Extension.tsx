// Import required React and HubSpot UI Extensions components
import React, { useEffect, useState } from 'react';
import {
  Button,
  Context,
  DescriptionList,
  DescriptionListItem,
  Heading,
  Input,
  Link,
  LoadingSpinner,
  ServerlessFuncRunner,
  Stack,
  Text,
  hubspot,
} from '@hubspot/ui-extensions';

// Extension root definition
hubspot.extend<'crm.record.tab'>(({ context, runServerlessFunction }) => (
  <Extension runServerless={runServerlessFunction} context={context} />
));

interface ExtensionProps {
  runServerless: ServerlessFuncRunner;
  context: Context;
}

export interface Association {
  total: number;
  items: { hs_object_id: number }[];
}

export interface AssociationsGQL {
  deal_collection__contact_to_deal: Association;
  company_collection__primary: Association;
}

const Extension = ({ runServerless, context }: ExtensionProps) => {
  const [loading, setLoading] = useState(true);
  const [associations, setAssocaitions] = useState<AssociationsGQL>();
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    runServerless({
      name: 'fetchAssociations',
      propertiesToSend: ['hs_object_id'],
    }).then((ret) => {
      setAssocaitions(ret.response.data.CRM.contact.associations);
      setLoading(false);
    });
  }, []);

  const duplicateContact = () => {
    setLoading(true);
    runServerless({
      name: 'duplicateContact',
      propertiesToSend: ['hs_object_id'],
      parameters: { associations, email },
    }).then((ret) => {
      setLoading(false);
      const contact = ret.response;
      setUrl(
        `https://app.hubspot.com/contacts/${context.portal.id}/contact/${contact.id}`
      );
    });
  };

  if (loading) {
    return <LoadingSpinner label="fetching object associations" grow={true} />;
  }

  if (associations && url === '') {
    return (
      <>
        <Stack direction="column">
          <DescriptionList direction="column">
            <DescriptionListItem label={'Deals'}>
              {associations.deal_collection__contact_to_deal.total}
            </DescriptionListItem>
            <DescriptionListItem label={'Companies'}>
              {associations.company_collection__primary.total}
            </DescriptionListItem>
          </DescriptionList>
        </Stack>
        <Stack direction="row">
          <Input
            label="Email"
            name="email"
            onInput={(v) => setEmail(v)}
            required={true}
          />
          <Button disabled={email === ''} onClick={duplicateContact}>
            Duplicate Contact
          </Button>
        </Stack>
      </>
    );
  }

  return (
    <>
      <Link href={url}>{url.toString()}</Link>
    </>
  );
};
