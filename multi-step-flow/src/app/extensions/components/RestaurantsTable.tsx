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

const PAGE_SIZE = 4;

export const RestaurantsTable = ({
  searchTerm,
  onAddToCart,
  restaurants,
  pageNumber,
  onPageChange,
}: RestaurantsTableProps) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  const [selectedMenuItem, setSelectedMenuItem] = useState();
  const [bases, setBases] = useState<Array<string>>();
  const [toppings, setToppings] = useState<Array<string>>();
  const [premiums, setPremiums] = useState<Array<string>>();
  const [dressing, setDressing] = useState<string>();

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

  const getBasesError = () => {
    return !!bases && (bases.length > 2 || bases.length < 1);
  };

  const getToppingsError = () => {
    return !!toppings && toppings.length > 4;
  };

  const getPremiumsError = () => {
    return !!premiums && premiums.length > 3;
  };

  const isNotMeetingRequirements = () => {
    const basesError = !!bases && (bases.length > 2 || bases.length < 1);
    const toppingsError = !!toppings && toppings.length > 4;
    const premiumsError = !!premiums && premiums.length > 3;
    return basesError || toppingsError || premiumsError || !bases || !dressing;
  };

  const handleAddClick = () => {
    onAddToCart({
      restaurantId: selectedRestaurant.id,
      id: selectedMenuItem.id,
      name: selectedMenuItem.name,
      price: selectedMenuItem.price,
      bases: bases!,
      toppings: toppings!,
      premiums: premiums!,
      dressing: dressing!,
    });
  };

  const resetSelections = () => {
    setSelectedRestaurant(undefined);
    setSelectedMenuItem(undefined);
    setBases([]);
    setToppings([]);
    setPremiums([]);
    setDressing(undefined);
  };

  const makeOption = (option: string) => ({ value: option, label: option });

  return (
    <>
      <Panel
        id="menu-panel"
        title={selectedRestaurant ? selectedRestaurant.name : 'Menu Panel'}
        onClose={() => resetSelections()}
      >
        <Flex direction={'column'}>
          <PanelBody>
            <PanelSection>
              {selectedRestaurant && (
                <Flex direction="column" gap="md">
                  {selectedMenuItem ? (
                    <Flex direction="column" gap="sm">
                      <Heading>{selectedMenuItem.name}</Heading>
                      <Form>
                        <ToggleGroup
                          error={getBasesError()}
                          name="bases"
                          label="Bases"
                          tooltip="Choose 1-2"
                          required={true}
                          toggleType="checkboxList"
                          options={selectedRestaurant.menu.bases.map(
                            makeOption
                          )}
                          onChange={setBases}
                          value={bases}
                          validationMessage={
                            getBasesError()
                              ? 'Please choose 1 or 2 options'
                              : ''
                          }
                        />
                        <ToggleGroup
                          error={getToppingsError()}
                          name="toppings"
                          label="Toppings (Optional)"
                          tooltip="Choose up to 4"
                          toggleType="checkboxList"
                          options={selectedRestaurant.menu.toppings.map(
                            makeOption
                          )}
                          onChange={setToppings}
                          value={toppings}
                          validationMessage={
                            getToppingsError()
                              ? 'Please choose 4 or fewer options'
                              : ''
                          }
                        />
                        <ToggleGroup
                          error={getPremiumsError()}
                          name="premiums"
                          label="Premiums (Optional)"
                          tooltip="Choose up to 3"
                          toggleType="checkboxList"
                          options={selectedRestaurant.menu.premiums.map(
                            makeOption
                          )}
                          onChange={(items) => setPremiums(items!)}
                          value={premiums}
                          validationMessage={
                            getPremiumsError()
                              ? 'Please choose 3 or fewer options'
                              : ''
                          }
                        />
                        <ToggleGroup
                          name="dressing"
                          label="Dressing"
                          required={true}
                          toggleType="radioButtonList"
                          options={selectedRestaurant.menu.dressings.map(
                            makeOption
                          )}
                          onChange={setDressing}
                          value={dressing}
                        />
                      </Form>
                    </Flex>
                  ) : (
                    <Table>
                      <TableBody>
                        {selectedRestaurant.menu.items.map((item) => (
                          <MenuItemRow
                            key={item.id}
                            item={item}
                            onClick={() => setSelectedMenuItem(item)}
                          />
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </Flex>
              )}
            </PanelSection>
          </PanelBody>
          <PanelFooter>
            <Button
              onClick={() => setSelectedMenuItem(undefined)}
              variant="secondary"
              type="submit"
              disabled={!selectedMenuItem}
            >
              Back
            </Button>
            <Button
              onClick={(event, reactions) => {
                handleAddClick();
                reactions.closePanel('menu-panel');
              }}
              variant="primary"
              type="submit"
              disabled={isNotMeetingRequirements()}
            >
              Add
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
              addToCart={onAddToCart}
              onClick={(reactions) => {
                setSelectedRestaurant(restaurant);
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
