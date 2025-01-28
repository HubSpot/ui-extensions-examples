import React, { useState } from 'react';
import {
  Button,
  Flex,
  Heading,
  PanelBody,
  PanelSection,
  Table,
  Text,
  TableBody,
  TableCell,
  TableRow,
} from '@hubspot/ui-extensions';
import type { MenuItem, MenuProps } from '../types';
import { formatPrice } from '../utils';
import { MenuItemOptions } from './MenuItemOptions';

export const Menu = ({ restaurant, addToCart, closePanel }: MenuProps) => {
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null);

  return menuItem ? (
    <MenuItemOptions
      restaurant={restaurant}
      addToCart={addToCart}
      menuItem={menuItem}
      closePanel={closePanel}
      onBackClick={() => setMenuItem(null)}
    />
  ) : (
    <Flex direction="column">
      <PanelBody>
        <PanelSection>
          <Flex direction="column" gap="md">
            <Table>
              <TableBody>
                {restaurant.menu.items.map((item) => (
                  <TableRow>
                    <TableCell>
                      <Heading>{item.name}</Heading>
                      <Text variant="microcopy">{item.description}</Text>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          setMenuItem(item);
                        }}
                      >
                        {formatPrice(item.price)}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Flex>
        </PanelSection>
      </PanelBody>
    </Flex>
  );
};
