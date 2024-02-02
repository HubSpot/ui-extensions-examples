import React, { useCallback, useState } from 'react';
import {
  Table,
  TableBody,
  Flex,
} from '@hubspot/ui-extensions';
import type { RestaurantMenuProps } from '../types';
import { MenuItemDetails } from './MenuItemDetails';
import { MenuItemRow } from './MenuItemRow';

export const RestaurantMenu = ({
  restaurant,
  onAddClick,
}: RestaurantMenuProps) => {
  const [selected, setSelected] = useState<number>();
  const handleCancelClick = useCallback(() => {
    setSelected(undefined);
  }, []);
  const selectedMenuItem = restaurant.menu.items.find(
    (item) => item.id === selected
  );

  return (
    <Flex direction="column" gap="md">
      {selectedMenuItem ? (
        <MenuItemDetails
          restaurantId={restaurant.id}
          item={selectedMenuItem}
          menu={restaurant.menu}
          onCancelClick={handleCancelClick}
          onAddClick={onAddClick}
        />
      ) : (
        <Table>
          <TableBody>
            {restaurant.menu.items.map((item) => (
              <MenuItemRow
                key={item.id}
                item={item}
                onClick={() => setSelected(item.id)}
              />
            ))}
          </TableBody>
        </Table>
      )}
    </Flex>
  );
};
