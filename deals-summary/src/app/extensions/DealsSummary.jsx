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
    const executeServerless = async () => {
      const serverlessResponse = await runServerless({
        name: 'get-data',
        propertiesToSend: ['hs_object_id'],
      });
      setLoading(false);
      if (serverlessResponse.status == 'SUCCESS') {
        const { response } = serverlessResponse;
        setDealsCount(response.dealsCount);
        setTotalAmount(response.totalAmount);
      } else {
        setErrorMessage(serverlessResponse.message);
      }
    };
    executeServerless();
  }, [runServerless]);

  if (loading) {
    return <LoadingSpinner label="Loading..." />;
  }
  if (errorMessage) {
    return (
      <Alert title="Error executing serverless function" variant="error">
        {errorMessage}
      </Alert>
    );
  }
  return (
    <Statistics>
      <StatisticsItem label="OPEN DEALS" number={dealsCount}>
        <Text>Total number of deals contact is associated with</Text>
      </StatisticsItem>
      <StatisticsItem label="UNIT PRICE" number={totalAmount}>
        <Text>High End</Text>
      </StatisticsItem>
    </Statistics>
  );
};

hubspot.extend(({ runServerlessFunction }) => (
  <DealsSummary runServerless={runServerlessFunction} />
));
