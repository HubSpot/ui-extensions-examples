import React, { useState, useEffect } from 'react';
import {
  Alert,
  LoadingSpinner,
  Statistics,
  StatisticsItem,
  Text,
  Flex,
} from '@hubspot/ui-extensions';
import { hubspot } from '@hubspot/ui-extensions';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(() => <DealsSummary />);

// Define the Extension component
const DealsSummary = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [dealsCount, setDealsCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Request statistics data from serverless function
    hubspot
      .serverless('get-data', {
        propertiesToSend: ['hs_object_id'],
      })
      .then((response) => {
        setDealsCount(response.dealsCount);
        setTotalAmount(response.totalAmount);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    // If loading, show a spinner
    return <LoadingSpinner />;
  }
  if (errorMessage) {
    // If there's an error, show an alert
    return (
      <Alert title="Unable to get deals data" variant="error">
        {errorMessage}
      </Alert>
    );
  }
  return (
    <Flex direction={'column'} gap={'lg'}>
      <Text variant="microcopy">
        This example shows you how you can view a high-level summary of data
        from associated deals.
      </Text>
      <Statistics>
        <StatisticsItem label="Open deals" number={dealsCount}>
          <Text>Total number of deals contact is associated with</Text>
        </StatisticsItem>
        <StatisticsItem label="Unit price" number={totalAmount}>
          <Text>High End</Text>
        </StatisticsItem>
      </Statistics>
    </Flex>
  );
};
