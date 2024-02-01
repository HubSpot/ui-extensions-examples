import React, { useState } from 'react';
import {
  Button,
  Flex,
  Panel,
  PanelBody,
  PanelFooter,
  PanelSection,
  Table,
  TableBody,
  Text,
} from '@hubspot/ui-extensions';
import { RestaurantRow } from './RestaurantRow';
import type { RestaurantsTableProps } from '../types';
import { RestaurantMenu } from './RestaurantMenu';

const PAGE_SIZE = 4;

export const RestaurantsTable = ({
  searchTerm,
  addToCart,
  restaurants,
  pageNumber,
  onPageChange,
}: RestaurantsTableProps) => {
  const [selected, setSelected] = useState();

  const pageCount = Math.ceil(restaurants.length / PAGE_SIZE);
  const paginatedRestaurants = restaurants.slice(
    (pageNumber - 1) * PAGE_SIZE,
    (pageNumber - 1) * PAGE_SIZE + PAGE_SIZE
  );

  if (paginatedRestaurants.length === 0) {
    return (
      <Text>No matches for "{searchTerm}". Try being a bit less specific.</Text>
    );
  }

  return (
    <>
      <Panel id="menu-panel" title="Menu Panel">
        <Flex direction={'column'}>
          <PanelBody>
            <Panel>test</Panel>
            <PanelSection>
              {selected && (
                <RestaurantMenu restaurant={selected} onAddClick={addToCart} />
              )}
            </PanelSection>
          </PanelBody>
          <PanelFooter>
            <Button
              onClick={(event, reactions) => {
                reactions.closePanel('menu-panel');
              }}
              variant="primary"
              type="submit"
            >
              Back
            </Button>
          </PanelFooter>
        </Flex>
      </Panel>
      <Table
        page={pageNumber}
        paginated={pageCount > 1}
        pageCount={pageCount}
        onPageChange={onPageChange}
        showFirstLastButtons={false}
      >
        <TableBody>
          {paginatedRestaurants.map((restaurant) => (
            <RestaurantRow
              restaurant={restaurant}
              addToCart={addToCart}
              onClick={(reactions) => {
                setSelected(restaurant);
                reactions.openPanel('menu-panel');
              }}
              key={restaurant.id}
            />
          ))}
        </TableBody>
      </Table>
    </>
  );
};
