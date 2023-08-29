import React, { useState, useEffect } from 'react';
import {
  Alert,
  LoadingSpinner,
  Statistics,
  StatisticsItem,
  Text,
} from '@hubspot/ui-extensions';
import { hubspot } from '@hubspot/ui-extensions';

const DealsSummary = ({ runServerless }) => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [dealsCount, setDealsCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    runServerless({
      name: 'get-data',
      propertiesToSend: ['hs_object_id'],
    })
      .then((serverlessResponse) => {
        if (serverlessResponse.status == 'SUCCESS') {
          const { response } = serverlessResponse;
          setDealsCount(response.dealsCount);
          setTotalAmount(response.totalAmount);
        } else {
          setErrorMessage(serverlessResponse.message);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [runServerless]);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (errorMessage) {
    return (
      <Alert title="Unable to get deals data" variant="error">
        {errorMessage}
      </Alert>
    );
  }
  return (
    <Statistics>
      <StatisticsItem label="Open deals" number={dealsCount}>
        <Text>Total number of deals contact is associated with</Text>
      </StatisticsItem>
      <StatisticsItem label="Unit price" number={totalAmount}>
        <Text>High End</Text>
      </StatisticsItem>
    </Statistics>
  );
};

hubspot.extend(({ runServerlessFunction }) => (
  <DealsSummary runServerless={runServerlessFunction} />
));
