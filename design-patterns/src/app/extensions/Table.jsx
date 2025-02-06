import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Input,
  Flex,
  Heading,
  Text,
  StatusTag,
  Button,
  hubspot,
} from '@hubspot/ui-extensions';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(() => <TableExampleCard />);

const tableData = [
  {
    name: 'Instapage',
    publishStatus: 'Published',
    review: '-',
    installs: '-',
    createdAt: 'March 8, 2019 (Amelia Merchant)',
  },
  {
    name: 'Spotify',
    publishStatus: 'Draft',
    review: '41',
    installs: '41',
    createdAt: 'March 8, 2019 (Amelia Merchant)',
  },
  {
    name: 'Slack',
    publishStatus: 'Published | Draft',
    review: '136',
    installs: '136',
    createdAt: 'March 8, 2019 (Amelia Merchant)',
  },
  {
    name: 'Survey Monkey',
    publishStatus: 'Published',
    review: '136',
    installs: '136',
    createdAt: 'March 8, 2019 (Amelia Merchant)',
  },
];

const TableExampleCard = () => {
  return (
    <Flex direction="column" gap="small">
      <Heading>Table Example</Heading>
      <Text>
        Tables can be tricky, especially as they grow in complexity and size.
        This is an example of how input, buttons, and scrolling can be
        implemented.
      </Text>

      <Flex direction="row">
        <Input name="search" placeholder="Search" />
      </Flex>

      <Table
        bordered={true}
        paginated={true}
        showButtonLabels={true}
        pageCount="5"
      >
        <TableHead width="min">
          <TableRow>
            <TableHeader width="min">Name</TableHeader>
            <TableHeader width="min">Publish Status</TableHeader>
            <TableHeader width="min">Installs</TableHeader>
            <TableHeader width="min">Last Updated</TableHeader>
            <TableHeader width="min">Actions</TableHeader>
            <TableHeader width="min">Created At</TableHeader>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map(
            (
              { name, publishStatus, review, installs, lastUpdated, createdAt },
              index
            ) => (
              <TableRow key={index}>
                <TableCell width="min">{name}</TableCell>
                <TableCell width="min">
                  {['Published', 'Draft'].some((status) =>
                    publishStatus.includes(status)
                  ) ? (
                    <>
                      {publishStatus.includes('Published') && (
                        <StatusTag variant="success">Published</StatusTag>
                      )}
                      {publishStatus.includes('Published') &&
                        publishStatus.includes('Draft') &&
                        '|'}
                      {publishStatus.includes('Draft') && (
                        <StatusTag>Draft</StatusTag>
                      )}
                    </>
                  ) : (
                    publishStatus
                  )}
                </TableCell>
                <TableCell width="min">{review}</TableCell>
                <TableCell width="min">{installs}</TableCell>
                <TableCell width="min">
                  <Button variant="secondary" size="sm">
                    Action
                  </Button>
                </TableCell>
                <TableCell width="min">{createdAt}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Flex>
  );
};
