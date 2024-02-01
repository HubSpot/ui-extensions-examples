import React from 'react';
import {
  Heading,
  Button,
  Flex,
  Text,
  TableRow,
  TableCell,
  Panel,
  PanelBody,
  PanelFooter,
  PanelSection,
} from '@hubspot/ui-extensions';
import type { RestaurantRowProps } from '../types';
import { Rating } from './Rating';

const timeRange = (minutes: number) => `${minutes - 5}-${minutes + 5} min`;

export const RestaurantRow = ({ restaurant, onClick }: RestaurantRowProps) => {
  const { name, category, deliveryCost, deliveryInMinutes, rating } =
    restaurant;

  return (
    <TableRow>
      <Panel id='menu-panel' title='Menu Panel'>
        <Flex direction={'column'}>
          <PanelBody>
            <Panel>test</Panel>
            <PanelSection>
            </PanelSection>
          </PanelBody>
          <PanelFooter>
            <Button onClick={(event, reactions) => {reactions.closePanel('menu-panel')}}variant='primary' type='submit'>
              close panel
            </Button>
          </PanelFooter>
        </Flex>
      </Panel>
      <TableCell width="min">
        <Heading>{name}</Heading>
        <Text variant="microcopy">{category}</Text>
        <Rating value={rating} />
      </TableCell>
      <TableCell width="min">
        <Text>{timeRange(deliveryInMinutes)}</Text>
      </TableCell>
      <TableCell width="min">
        <Text>${deliveryCost} delivery</Text>
      </TableCell>
      <TableCell width="min">
        <Button
          onClick={(event, reactions) => {
            onClick(reactions);
          }}
        >
          Menu
        </Button>
      </TableCell>
    </TableRow>
  );
};
