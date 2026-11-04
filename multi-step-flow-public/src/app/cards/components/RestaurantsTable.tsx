import React, { useState } from 'react';
import { Panel, Table, TableBody, Text } from '@hubspot/ui-extensions';
import { RestaurantRow } from './RestaurantRow';
import type { Restaurant, RestaurantsTableProps } from '../types';
import { MenuPanelContent } from './MenuPanelContent';

const PAGE_SIZE = 4;
const formatPanelId = (restaurantId: number) => `menu-panel-${restaurantId}`;

export const RestaurantsTable = ({
  searchTerm,
  onAddToCartClick,
  closeOverlay,
  restaurants,
  pageNumber,
  onPageChange,
}: RestaurantsTableProps) => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const pageCount = Math.ceil(restaurants.length / PAGE_SIZE);
  const paginatedRestaurants = restaurants.slice(
    (pageNumber - 1) * PAGE_SIZE,
    (pageNumber - 1) * PAGE_SIZE + PAGE_SIZE,
  );

  if (paginatedRestaurants.length === 0) {
    return (
      <Text>No matches for "{searchTerm}". Try being a bit less specific.</Text>
    );
  }

  return (
    <>
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
              overlay={
                <Panel
                  variant="modal"
                  id={formatPanelId(restaurant.id)}
                  title={restaurant.name}
                  onOpen={() => setSelectedRestaurant(restaurant)}
                  onClose={() => setSelectedRestaurant(null)}
                >
                  {selectedRestaurant?.id === restaurant.id && (
                    <MenuPanelContent
                      restaurant={restaurant}
                      onAddToCartClick={onAddToCartClick}
                      closePanel={() =>
                        closeOverlay(formatPanelId(restaurant.id))
                      }
                    />
                  )}
                </Panel>
              }
              key={restaurant.id}
            />
          ))}
        </TableBody>
      </Table>
    </>
  );
};
