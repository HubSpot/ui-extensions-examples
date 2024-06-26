import React, { useState } from 'react';
import {
  Button,
  Flex,
  Form,
  Heading,
  PanelBody,
  PanelFooter,
  PanelSection,
  ToggleGroup,
} from '@hubspot/ui-extensions';
import type { MenuItemOptionsProps } from '../types';

export const MenuItemOptions = ({
  restaurant,
  addToCart,
  menuItem,
  onBackClick,
  closePanel,
}: MenuItemOptionsProps) => {
  const [bases, setBases] = useState<Array<string>>();
  const [toppings, setToppings] = useState<Array<string>>();
  const [premiums, setPremiums] = useState<Array<string>>();
  const [dressing, setDressing] = useState<string>();

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

  const handleAddToCartClick = () => {
    addToCart({
      restaurantId: restaurant.id,
      id: restaurant.id,
      name: restaurant.name,
      price: menuItem!.price,
      bases: bases!,
      toppings: toppings!,
      premiums: premiums!,
      dressing: dressing!,
    });
  };

  const makeOption = (option: string) => ({ value: option, label: option });

  return (
    <Flex direction="column">
      <PanelBody>
        <PanelSection>
          <Flex direction="column" gap="md">
            <Flex direction="column" gap="sm">
              <Heading>{menuItem.name}</Heading>
              <Form>
                <ToggleGroup
                  error={getBasesError()}
                  name="bases"
                  label="Bases"
                  tooltip="Choose 1-2"
                  required={true}
                  toggleType="checkboxList"
                  options={restaurant.menu.bases.map(makeOption)}
                  onChange={setBases}
                  value={bases}
                  validationMessage={
                    getBasesError() ? 'Please choose 1 or 2 options' : ''
                  }
                />
                <ToggleGroup
                  error={getToppingsError()}
                  name="toppings"
                  label="Toppings (Optional)"
                  tooltip="Choose up to 4"
                  toggleType="checkboxList"
                  options={restaurant.menu.toppings.map(makeOption)}
                  onChange={setToppings}
                  value={toppings}
                  validationMessage={
                    getToppingsError() ? 'Please choose 4 or fewer options' : ''
                  }
                />
                <ToggleGroup
                  error={getPremiumsError()}
                  name="premiums"
                  label="Premiums (Optional)"
                  tooltip="Choose up to 3"
                  toggleType="checkboxList"
                  options={restaurant.menu.premiums.map(makeOption)}
                  onChange={(items) => setPremiums(items!)}
                  value={premiums}
                  validationMessage={
                    getPremiumsError() ? 'Please choose 3 or fewer options' : ''
                  }
                />
                <ToggleGroup
                  name="dressing"
                  label="Dressing"
                  required={true}
                  toggleType="radioButtonList"
                  options={restaurant.menu.dressings.map(makeOption)}
                  onChange={setDressing}
                  value={dressing}
                />
              </Form>
            </Flex>
          </Flex>
        </PanelSection>
      </PanelBody>
      <PanelFooter>
        <Flex justify={'end'} gap={'md'}>
          <Button
            onClick={() => onBackClick()}
            variant="secondary"
            type="submit"
          >
            Back
          </Button>
          <Button
            onClick={() => {
              handleAddToCartClick();
              closePanel();
            }}
            variant="primary"
            type="submit"
            disabled={isNotMeetingRequirements()}
          >
            Add
          </Button>
        </Flex>
      </PanelFooter>
    </Flex>
  );
};
