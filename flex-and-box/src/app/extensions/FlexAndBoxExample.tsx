import React, { useState } from 'react';
import {
  Button,
  Divider,
  Link,
  Flex,
  hubspot,
  Text,
} from '@hubspot/ui-extensions';
import { PropertyTile } from './components/PropertyTile';
import { PropertyForm } from './components/PropertyForm';
import { listingItemsSamples, ListingItem } from './enums/flexAndBoxExample';

const FlexAndBoxExample = () => {
  const [listingItems, setListingItems] = useState(listingItemsSamples);

  const restoreDefaultListing = () => {
    setListingItems(listingItemsSamples);
  };

  const addNewListingItem = (listingItem: ListingItem) => {
    setListingItems([...listingItems, listingItem]);
  };

  return (
    // Set the arrangement of all elements on the page in the form of a column.
    <Flex direction="column" gap="xl">
      <Text>
        This example shows UX best practices for{' '}
        <Link href="https://developers.hubspot.com/docs/platform/ui-extension-components#layout-flex">
          Flex
        </Link>{' '}
        and{' '}
        <Link href="https://developers.hubspot.com/docs/platform/ui-extension-components#layout-box">
          Box
        </Link>
        , as well as how to use multiple components with them. Property listings
        are presented in a tile format. Use the form below to add more tiles.{' '}
        <Link href="https://developers.hubspot.com/docs/platform/manage-ui-extension-layout">
          Learn more about layout management
        </Link>
        .
      </Text>
      <Flex direction="column" gap="md" align="start">
        <Text format={{ fontWeight: 'bold' }}>Property listings</Text>
        {/* Set behavior for all tiles to wrap when filled in a row. */}
        <Flex gap="sm" wrap="wrap">
          {listingItems.map((listing, index) => (
            <PropertyTile key={index} listingItem={listing} />
          ))}
        </Flex>
        <Button
          variant="primary"
          onClick={restoreDefaultListing}
          disabled={listingItems.length === listingItemsSamples.length}
        >
          Restore example listings
        </Button>
        <Divider distance="xl" />
        <Text format={{ fontWeight: 'bold' }}>Add a new property listing</Text>
        {/* Set a column to stretch the form across the width of the page. */}
        <Flex direction="column">
          <PropertyForm onSubmit={addNewListingItem} />
        </Flex>
      </Flex>
    </Flex>
  );
};

hubspot.extend(() => <FlexAndBoxExample />);
