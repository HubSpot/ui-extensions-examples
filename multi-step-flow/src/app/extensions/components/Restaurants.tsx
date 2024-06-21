import React, { useCallback, useState } from 'react';
import {
  Flex,
  Input,
  Panel,
  Table,
  Heading,
  Button,
  TableRow,
  TableCell,
  TableBody,
  Text,
} from '@hubspot/ui-extensions';
import { type Restaurant, type RestaurantsProps } from '../types';
import { Rating } from './Rating';
import { Menu } from './Menu';

const timeRange = (minutes: number) => `${minutes - 5}-${minutes + 5} min`;
const formatPanelId = (restaurantId: number) => `panel-${restaurantId}`;

const PAGE_SIZE = 4;

export const Restaurants = ({
  contactName,
  restaurants,
  addToCart,
  closeOverlay,
}: RestaurantsProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>();

  const handleSearch = useCallback((searchTerm: string) => {
    setSearchTerm(searchTerm);
    setPageNumber(1);
  }, []);

  const searchResults = restaurants.filter(({ name, category }) => {
    return [name, category].some((prop) => {
      return prop.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const pageCount = Math.ceil(searchResults.length / PAGE_SIZE);
  const paginatedSearchResults = searchResults.slice(
    (pageNumber - 1) * PAGE_SIZE,
    (pageNumber - 1) * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <Flex direction="column" gap="md">
      <Input
        name="search"
        label={`Search for restaurants near ${contactName}`}
        placeholder="All Star Sandwich Bar"
        tooltip="You can search restaurant names and categories"
        onInput={handleSearch}
      />
      {paginatedSearchResults.length === 0 ? (
        <Text>
          No matches for "{searchTerm}". Try being a bit less specific.
        </Text>
      ) : (
        <Table
          page={pageNumber}
          paginated={pageCount > 1}
          pageCount={pageCount}
          onPageChange={setPageNumber}
          showFirstLastButtons={false}
        >
          <TableBody>
            {paginatedSearchResults.map((restaurant) => (
              <TableRow key={restaurant.id}>
                <TableCell width="min">
                  <Heading>{restaurant.name}</Heading>
                  <Text variant="microcopy">{restaurant.category}</Text>
                  <Rating value={restaurant.rating} />
                </TableCell>
                <TableCell width="min">
                  <Text>{timeRange(restaurant.deliveryInMinutes)}</Text>
                </TableCell>
                <TableCell width="min">
                  <Text>${restaurant.deliveryCost} delivery</Text>
                </TableCell>
                <TableCell width="min">
                  <Button
                    overlay={
                      <Panel
                        onOpen={() => setSelectedRestaurant(restaurant)}
                        onClose={() => setSelectedRestaurant(null)}
                        key={restaurant.id}
                        variant="modal"
                        id={formatPanelId(restaurant.id)}
                        title={restaurant.name}
                      >
                        {selectedRestaurant?.id == restaurant.id && (
                          <Menu
                            restaurant={restaurant}
                            addToCart={addToCart}
                            closePanel={() =>
                              closeOverlay(formatPanelId(restaurant.id))
                            }
                          />
                        )}
                      </Panel>
                    }
                  >
                    Menu
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Flex>
  );
};
