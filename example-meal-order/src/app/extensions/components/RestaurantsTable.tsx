import React from 'react';
import { Table, TableBody, Text } from '@hubspot/ui-extensions';
import { RestaurantRow } from './RestaurantRow';
import type { RestaurantsTableProps } from '../types';

const PAGE_SIZE = 4;

export const RestaurantsTable = ({
  searchTerm,
  onClick,
  restaurants,
  pageNumber,
  onPageChange
}: RestaurantsTableProps) => {
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
    <Table
      page={pageNumber}
      paginated={pageCount > 1}
      pageCount={pageCount}
      onPageChange={onPageChange}
      showFirstLastButtons={false}
    >
      <TableBody>
        {paginatedRestaurants.map(restaurant => (
          <RestaurantRow
            restaurant={restaurant}
            onClick={() => onClick(restaurant.id)}
            key={restaurant.id}
          />
        ))}
      </TableBody>
    </Table>
  );
};
