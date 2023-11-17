import React from 'react';
import {
  Tile,
  Box,
  Flex,
  Text,
  Tag,
  Image,
  Button,
  Link,
} from '@hubspot/ui-extensions';
import {
  ListingItemStatus,
  PropertyTileProps,
  listingItemStatusSelectOptions,
  propertyTypeSelectOptions,
} from '../enums/flexAndBoxExample';

export const PropertyTile = ({ listingItem }: PropertyTileProps) => {
  const truncateWithEllipsis = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  const findLabelByValue = (
    options: { label: string; value: string }[],
    value: string,
  ) => {
    const option = options.find((o) => o.value === value)!;
    return option.label;
  };
  const maxAddressLength = 18;

  return (
    <Tile>
      {/* Set gap between all elements and arrange them in a row inside the Tile. */}
      <Flex gap="xs">
        <Image
          src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"
          width={150}
          height={180}
        />
        <Box>
          {/* Set the arrangement of elements like column, wrap in box components to combine elements into sets to set the spacing between. */}
          <Flex direction="column" gap="xs">
            <Box>
              <Flex justify="between">
                <Text format={{ fontWeight: 'bold' }}>
                  ${listingItem.rentalPrice}
                </Text>
                <Tag variant={listingItem.status}>
                  {findLabelByValue(
                    listingItemStatusSelectOptions,
                    listingItem.status,
                  )}
                </Tag>
              </Flex>
            </Box>
            <Text>
              {findLabelByValue(
                propertyTypeSelectOptions,
                listingItem.propertyType,
              )}
            </Text>
            <Text>
              {truncateWithEllipsis(listingItem.address, maxAddressLength)}
            </Text>
            <Box>
              {/* Set the arrangement of elements like column. */}
              <Flex direction="column">
                <Text variant="microcopy">
                  {`Сreated ${listingItem.creationDate.formattedDate}`}
                </Text>
                <Text variant="microcopy">
                  <Link href="">Contact listing owner</Link>
                </Text>
              </Flex>
            </Box>
            <Button
              disabled={
                listingItem.status !== ListingItemStatus.Undefined &&
                listingItem.status !== ListingItemStatus.Available
              }
              variant="secondary"
            >
              View property
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Tile>
  );
};
