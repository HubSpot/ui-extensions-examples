import React, { useCallback, useState } from 'react';
import { Flex, Input } from '@hubspot/ui-extensions';
import { RestaurantsTable } from './RestaurantsTable';
import type { RestaurantsSearchProps } from '../types';

export const RestaurantsSearch = ({
  contactName,
  restaurants,
  onAddToCartClick,
}: RestaurantsSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = useCallback((searchTerm: string) => {
    setSearchTerm(searchTerm);
    setPageNumber(1);
  }, []);

  const searchResults = restaurants.filter(({ name, category }) => {
    return [name, category].some((prop) => {
      return prop.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  return (
    <Flex direction="column" gap="md">
      <Input
        name="search"
        label={`Search for restaurants near ${contactName}`}
        placeholder="All Star Sandwich Bar"
        tooltip="You can search restaurant names and categories"
        onInput={handleSearch}
      />
      <RestaurantsTable
        pageNumber={pageNumber}
        onAddToCartClick={onAddToCartClick}
        searchTerm={searchTerm}
        restaurants={searchResults}
        onPageChange={setPageNumber}
      />
    </Flex>
  );
};
