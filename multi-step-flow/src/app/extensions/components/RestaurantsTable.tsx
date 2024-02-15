import React, { useState } from 'react';
import {
  Panel,
  Reactions,
  Table,
  TableBody,
  Text,
} from '@hubspot/ui-extensions';
import { RestaurantRow } from './RestaurantRow';
import { Restaurant, type RestaurantsTableProps } from '../types';
import { MenuPanelContent } from './MenuPanelContent';

const PAGE_SIZE = 4;
const MENU_PANEL_ID = 'menu-panel';

export const RestaurantsTable = ({
  searchTerm,
  onAddToCartClick,
  restaurants,
  pageNumber,
  onPageChange,
}: RestaurantsTableProps) => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

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
              onClick={(reactions: Reactions) => {
                setSelectedRestaurant(restaurant);
                reactions.openPanel(MENU_PANEL_ID);
              }}
              key={restaurant.id}
            />
          ))}
        </TableBody>
      </Table>

      {/* Render Panel wrapper */}
      <Panel
        variant='modal'
        id={MENU_PANEL_ID}
        title={selectedRestaurant ? selectedRestaurant.name : 'Menu Panel'}
        onClose={() => setSelectedRestaurant(null)}
      >
        {/* Check if any restaurant is selected and conditionally render Panel content */}
        {selectedRestaurant && (
          <MenuPanelContent
            restaurant={selectedRestaurant}
            onAddToCartClick={onAddToCartClick}
            closePanel={(reactions: Reactions) =>
              reactions.closePanel(MENU_PANEL_ID)
            }
          />
        )}
      </Panel>
    </>
  );
};
