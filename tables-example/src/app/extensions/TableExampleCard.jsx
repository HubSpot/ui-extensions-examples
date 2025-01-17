import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Button,
  Input,
  Flex,
  Heading,
  Text,
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
    lastUpdated: 'March 8, 2019 (Amelia Merchant)',
    createdAt: 'March 8, 2019 (Amelia Merchant)',
  },
  {
    name: 'Spotify',
    publishStatus: 'Draft',
    review: '41',
    installs: '41',
    lastUpdated: 'March 8, 2019 (Amelia Merchant)',
    createdAt: 'March 8, 2019 (Amelia Merchant)',
  },
  {
    name: 'Slack',
    publishStatus: 'Published | Draft',
    review: '136',
    installs: '136',
    lastUpdated: 'March 8, 2019 (Amelia Merchant)',
    createdAt: 'March 8, 2019 (Amelia Merchant)',
  },
  {
    name: 'Survey Monkey',
    publishStatus: 'Published',
    review: '136',
    installs: '136',
    lastUpdated: 'March 8, 2019 (Amelia Merchant)',
    createdAt: 'March 8, 2019 (Amelia Merchant)',
  },
];

const TableExampleCard = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(tableData);
  // Search for both name and publish status match, case insensitive
  const handleSearchClick = () => {
    const foundSearch = tableData.filter(({ name, publishStatus }) => {
      const searchLower = search.toLowerCase();
      const nameMatch = name.toLowerCase().includes(searchLower);
      const publishStatusMatch = publishStatus
        .toLowerCase()
        .includes(searchLower);
      return nameMatch || publishStatusMatch;
    });

    setData(foundSearch);
  };

  return (
    <>
      <Flex direction="column" gap="small">
        <Heading>Table Example</Heading>
        <Text>
          Tables can be tricky, especially as they grow in complexity and size.
          This is an example of how input, buttons, and scrolling can be
          implemented.
        </Text>

        <Flex direction="row">
          <Input
            name="search"
            placeholder="Search"
            value={search}
            onChange={(search) => setSearch(search)}
          />
          <Flex justify="end">
            <Button
              size="xs"
              variant="secondary"
              type="button"
              align-self="end"
              onClick={handleSearchClick}
            >
              Button
            </Button>
          </Flex>
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
              <TableHeader width="min">Review</TableHeader>
              <TableHeader width="min">Installs</TableHeader>
              <TableHeader width="min">Last Updated</TableHeader>
              <TableHeader width="min">Created At</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(
              (
                {
                  name,
                  publishStatus,
                  review,
                  installs,
                  lastUpdated,
                  createdAt,
                },
                index
              ) => (
                <TableRow key={index}>
                  <TableCell width="min">{name}</TableCell>
                  <TableCell width="min">{publishStatus}</TableCell>
                  <TableCell width="min">{review}</TableCell>
                  <TableCell width="min">{installs}</TableCell>
                  <TableCell width="min">{lastUpdated}</TableCell>
                  <TableCell width="min">{createdAt}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Flex>
    </>
  );
};
