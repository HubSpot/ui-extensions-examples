import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  Tile,
  useExtensionContext,
} from '@hubspot/ui-extensions';
import { useState } from 'react';

import { useCardConfig, useCardLocation } from '../contexts';
import type { CardObject } from '../types/response';
import { convertObjectToProperties } from '../utils/propertyUtils';
import { ActionsDropdown } from './ActionsDropdown';
import { PropertyValue } from './Properties';

export interface ObjectTileProps {
  obj: CardObject;
}

export function ObjectTile({ obj }: ObjectTileProps) {
  const config = useCardConfig();
  const cardLocation = useCardLocation();
  const context = useExtensionContext<typeof cardLocation>();
  const [isExpanded, setIsExpanded] = useState(false);
  const properties = obj.properties || [];
  const actions = obj.actions || [];

  const locale = context.user.locale;
  const timezone = context.portal.timezone;

  const propertiesArrayKeys = new Set<string>();
  properties.forEach(prop => {
    propertiesArrayKeys.add(prop.label);
  });

  const objectProperties = convertObjectToProperties(
    obj,
    config,
    propertiesArrayKeys
  );

  const displayProperties = [...objectProperties, ...properties];

  const hasMoreProperties =
    displayProperties.length > config.initialPropertiesCount;
  const propertiesToShow = isExpanded
    ? displayProperties
    : displayProperties.slice(0, config.initialPropertiesCount);

  return (
    <Tile compact={true}>
      <Flex direction='column' gap='xs'>
        {obj.link ? (
          <Link href={obj.link}>{obj.title}</Link>
        ) : (
          <Text>{obj.title}</Text>
        )}

        <Flex direction='column'>
          {propertiesToShow.map((prop, index) => (
            <PropertyValue
              key={prop.name || index}
              property={prop}
              locale={locale}
              timezone={timezone}
            />
          ))}
        </Flex>

        {(hasMoreProperties || actions.length > 0) && (
          <Flex justify={hasMoreProperties ? 'between' : 'end'} align='center'>
            {hasMoreProperties && (
              <Button
                variant='transparent'
                onClick={() => setIsExpanded(!isExpanded)}
                testId='view-more-view-less-button'
              >
                {isExpanded ? 'View Less' : 'View More'}
              </Button>
            )}

            {actions.length > 0 && (
              <Box>
                <ActionsDropdown
                  actions={actions}
                  objectTitle={obj.title}
                  buttonSize='md'
                  variant='transparent'
                />
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Tile>
  );
}
