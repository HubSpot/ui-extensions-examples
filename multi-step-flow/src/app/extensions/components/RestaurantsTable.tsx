import React, { useState } from 'react';
import {
  Button,
  Flex,
  Form,
  Heading,
  Panel,
  PanelBody,
  PanelFooter,
  PanelSection,
  Table,
  TableBody,
  Text,
  ToggleGroup,
} from '@hubspot/ui-extensions';
import { RestaurantRow } from './RestaurantRow';
import type { RestaurantsTableProps } from '../types';
import { MenuItemRow } from './MenuItemRow';
import { MenuPanelContent } from './MenuPanelContent';

const PAGE_SIZE = 4;
const MENU_PANEL_ID = 'menu-panel';

export const RestaurantsTable = ({
  searchTerm,
  onAddToCart,
  restaurants,
  pageNumber,
  onPageChange,
}: RestaurantsTableProps) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  const handleClosePanel = (reactions) => {};

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
              addToCart={onAddToCart}
              onClick={(reactions) => {
                setSelectedRestaurant(restaurant);
                reactions.openPanel(MENU_PANEL_ID);
              }}
              key={restaurant.id}
            />
          ))}
        </TableBody>
      </Table>
      <Panel
        id="menu-panel"
        title={selectedRestaurant ? selectedRestaurant.name : 'Menu Panel'}
        onClose={() => setSelectedRestaurant(undefined)}
      >
        {selectedRestaurant && (
          <MenuPanelContent
            restaurant={selectedRestaurant}
            onAddToCart={onAddToCart}
            closePanel={(reactions) => reactions.closePanel(MENU_PANEL_ID)}
          ></MenuPanelContent>
        )}{' '}
      </Panel>
    </>
  );
};
