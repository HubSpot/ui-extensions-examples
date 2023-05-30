import React, { useCallback, useState } from 'react';
import {
  Heading,
  Button,
  Stack,
  ToggleGroup,
  Form,
  ButtonRow,
} from '@hubspot/ui-extensions';
import { MenuItemDetailsProps } from '../types';

const makeOption = (option: string) => ({ value: option, label: option });

export const MenuItemDetails = ({
  restaurantId,
  menu,
  item,
  onCancelClick,
  onAddClick,
}: MenuItemDetailsProps) => {
  const [bases, setBases] = useState<Array<string>>();
  const [toppings, setToppings] = useState<Array<string>>();
  const [premiums, setPremiums] = useState<Array<string>>();
  const [dressing, setDressing] = useState<string>();

  const basesError = !!bases && (bases.length > 2 || bases.length < 1);
  const toppingsError = !!toppings && toppings.length > 4;
  const premiumsError = !!premiums && premiums.length > 3;
  const doesNotMeetRequirements =
    basesError || toppingsError || premiumsError || !bases || !dressing;

  const handleAddClick = useCallback(() => {
    onAddClick({
      restaurantId: restaurantId,
      id: item.id,
      name: item.name,
      price: item.price,
      bases: bases!,
      toppings: toppings!,
      premiums: premiums!,
      dressing: dressing!,
    });
  }, [item.id, item.name, item.price, bases, toppings, premiums, dressing]);

  return (
    <Stack>
      <Heading>{item.name}</Heading>
      <Form>
        <ToggleGroup
          error={basesError}
          name="bases"
          label="Bases"
          tooltip="Choose 1-2"
          required={true}
          toggleType="checkboxList"
          options={menu.bases.map(makeOption)}
          onChange={(items) => setBases(items!)}
          value={bases}
          validationMessage={basesError ? 'Please choose 1 or 2 options' : ''}
        />
        <ToggleGroup
          error={toppingsError}
          name="toppings"
          label="Toppings (Optional)"
          tooltip="Choose up to 4"
          toggleType="checkboxList"
          options={menu.toppings.map(makeOption)}
          onChange={(items) => setToppings(items!)}
          value={toppings}
          validationMessage={
            toppingsError ? 'Please choose 4 or fewer options' : ''
          }
        />
        <ToggleGroup
          error={premiumsError}
          name="premiums"
          label="Premiums (Optional)"
          tooltip="Choose up to 3"
          toggleType="checkboxList"
          options={menu.premiums.map(makeOption)}
          onChange={(items) => setPremiums(items!)}
          value={premiums}
          validationMessage={
            premiumsError ? 'Please choose 3 or fewer options' : ''
          }
        />
        <ToggleGroup
          name="dressing"
          label="Dressing"
          required={true}
          toggleType="radioButtonList"
          options={menu.dressings.map(makeOption)}
          onChange={(item) => setDressing(item!)}
          value={dressing}
        />
      </Form>
      <ButtonRow>
        <Button
          disabled={doesNotMeetRequirements}
          variant="primary"
          onClick={handleAddClick}
        >
          Add
        </Button>
        <Button onClick={onCancelClick}>Cancel</Button>
      </ButtonRow>
    </Stack>
  );
};
