import { Button, Box, Select } from '@hubspot/ui-extensions';
import { useState, useMemo } from 'react';

export const BusOptions = ({ passengers, onNext }) => {
  const SMALL_BUS_THRESHOLD = 10;
  const LARGE_BUS_THRESHOLD = 25;

  const SMALL_BUS_SKU = 'SMALLBUS-01';
  const LARGE_BUS_SKU = 'LARGEBUS-01';

  const [busOption, setBusOption] = useState();
  const BUS_OPTION_DELIMETER = '*';

  const busOptions = useMemo(() => {
    if (passengers < SMALL_BUS_THRESHOLD) {
      return [
        {
          label: 'Small Bus',
          value: [SMALL_BUS_SKU, 1].join(BUS_OPTION_DELIMETER),
        },
      ];
    } else if (
      passengers >= SMALL_BUS_THRESHOLD &&
      passengers <= LARGE_BUS_THRESHOLD
    ) {
      return [
        {
          label: 'Small Bus x2',
          value: [SMALL_BUS_SKU, 2].join(BUS_OPTION_DELIMETER),
        },
        {
          label: 'Large Bus',
          value: [LARGE_BUS_SKU, 1].join(BUS_OPTION_DELIMETER),
        },
      ];
    } else {
      return [
        {
          label: 'Small Bus x4',
          value: [SMALL_BUS_SKU, 4].join(BUS_OPTION_DELIMETER),
        },
        {
          label: 'Large Bus x2',
          value: [LARGE_BUS_SKU, 2].join(BUS_OPTION_DELIMETER),
        },
      ];
    }
  }, [passengers]);

  const handleNextButtonClick = () => {
    const [sku, numberOfBuses] = busOption.split(BUS_OPTION_DELIMETER);
    onNext({ sku, numberOfBuses });
  };

  return (
    <>
      <Select
        label="Bus options"
        name="busOptions"
        description="Please select bus options"
        required={true}
        onChange={setBusOption}
        options={busOptions}
      />
      <Box>
        <Button
          onClick={handleNextButtonClick}
          variant="primary"
          type="button"
          disabled={!busOption}
        >
          Next
        </Button>
      </Box>
    </>
  );
};
