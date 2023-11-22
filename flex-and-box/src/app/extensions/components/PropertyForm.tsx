import React, { useState } from 'react';
import {
  Box,
  DateInput,
  Flex,
  Form,
  NumberInput,
  Select,
  TextArea,
  Button,
} from '@hubspot/ui-extensions';
import {
  CreationDate,
  ListingItem,
  ListingItemStatus,
  PropertyFormProps,
  PropertyType,
  listingItemDefaultFields,
  listingItemStatusSelectOptions,
  propertyTypeSelectOptions,
} from '../enums/flexAndBoxExample';

export const PropertyForm = ({ onSubmit }: PropertyFormProps) => {
  const [listingItem, setListingItem] = useState<ListingItem>(
    listingItemDefaultFields,
  );
  const maxrentalPrice = 99999;
  const maxCharsAddressInput = 30;

  const handleChangePropertyListing = () => {
    onSubmit(listingItem);
    setListingItem({ ...listingItemDefaultFields });
  };

  return (
    <Form preventDefault={true} onSubmit={handleChangePropertyListing}>
      {/* Set a column to find out how the elements will be arranged inside the form. */}
      <Flex direction="column" gap="md">
        {/* Flex was added and fields were wrapped in Box to group them into pairs, set their sizes within each pair, and space the pairs across rows. */}
        <Flex gap="md">
          <Box flex={5}>
            <NumberInput
              name="rentalPrice"
              label="Monthly rental price"
              max={maxrentalPrice}
              value={listingItem.rentalPrice}
              onChange={(value) =>
                setListingItem({ ...listingItem, rentalPrice: value })
              }
              required={true}
            />
          </Box>
          <Box flex={5}>
            <DateInput
              name="creationDate"
              label="Listing creation date"
              format="ll"
              value={listingItem.creationDate}
              onChange={(value) =>
                setListingItem({
                  ...listingItem,
                  creationDate: value as CreationDate,
                })
              }
              required={true}
            />
          </Box>
        </Flex>
        <Flex gap="md">
          <Box flex={5}>
            <Select
              label="Property type"
              value={listingItem.propertyType}
              onChange={(value) =>
                setListingItem({
                  ...listingItem,
                  propertyType: value as PropertyType,
                })
              }
              required={true}
              options={propertyTypeSelectOptions}
            />
          </Box>
          <Box flex={5}>
            <Select
              label="Status"
              value={listingItem.status}
              onChange={(value) =>
                setListingItem({
                  ...listingItem,
                  status: value as ListingItemStatus,
                })
              }
              options={listingItemStatusSelectOptions}
            />
          </Box>
        </Flex>
        <Flex gap="md">
          <Box flex={5}>
            <TextArea
              name="address"
              label="Address"
              value={listingItem.address}
              maxLength={maxCharsAddressInput}
              onChange={(value) =>
                setListingItem({ ...listingItem, address: value })
              }
              required={true}
            />
          </Box>
          {/* Added empty Вox component to avoid stretching the TextArea field. */}
          <Box flex={5}>{''}</Box>
        </Flex>
        {/* Wrapped in Box to avoid button stretching. */}
        <Box>
          <Button variant="primary" type="submit">
            Add property listing
          </Button>
        </Box>
      </Flex>
    </Form>
  );
};
