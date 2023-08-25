import React, { useState } from 'react';
import { Flex, Form, NumberInput, Button, Box } from '@hubspot/ui-extensions';

export const TripDetails = ({ onNext }) => {
  const [passengers, setPassengers] = useState(10);
  const [distance, setDistance] = useState(50);

  return (
    <Form>
      <Flex direction="column" gap="xs">
        <NumberInput
          label="Passengers"
          name="passengers"
          description="Please enter a number of passengers"
          required={true}
          min={5}
          max={50}
          value={passengers}
          onChange={(value) => setPassengers(value)}
        />
        <NumberInput
          label="Distance"
          name="distance"
          description="Please enter the distance to cover"
          required={true}
          value={distance}
          onChange={(value) => setDistance(value)}
        />
        <Box>
          <Button
            onClick={() => onNext({ passengers, distance })}
            variant="secondary"
            type="button"
            disabled={!distance || !passengers}
          >
            Next
          </Button>
        </Box>
      </Flex>
    </Form>
  );
};
