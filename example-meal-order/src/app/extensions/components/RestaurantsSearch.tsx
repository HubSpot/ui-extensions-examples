import React, { useCallback, useState } from 'react';
import { Input, Stack } from '@hubspot/ui-extensions';
import { RestaurantsTable } from './RestaurantsTable';
import { RestaurantsSearchProps } from '../types';

export const RestaurantsSearch = ({
  contactName,
  restaurants,
  onRestaurantClick,
}: RestaurantsSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const handleRestaurantClick = useCallback((id: number) => {
    onRestaurantClick(id);
    setSearchTerm('');
  }, []);

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
    <Stack>
      <Input
        name="search"
        label={`Search for restaurants near ${contactName}`}
        placeholder="All Star Sandwich Bar"
        tooltip="You can search restaurant names and categories"
        onInput={handleSearch}
      />
      <RestaurantsTable
        pageNumber={pageNumber}
        onClick={handleRestaurantClick}
        searchTerm={searchTerm}
        restaurants={searchResults}
        onPageChange={setPageNumber}
      />
    </Stack>
  );
};
