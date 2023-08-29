import React, { useState } from 'react';
import {
  Alert,
  Form,
  LoadingSpinner,
  NumberInput,
  Flex,
  Button,
  Box
} from '@hubspot/ui-extensions';
import { CompaniesWithDistanceTable } from './components/CompaniesWithDistanceTable.jsx';
import { hubspot } from '@hubspot/ui-extensions';

const TopValueCompanies = ({ context, runServerless }) => {
  const [topValueCompaniesSorted, setTopValueCompaniesSorted] = useState([]);
  const [radius, setRadius] = useState(50);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const companiesBatchSize = 30;
  const companiesToDisplay = 3;

  const executeServerless = async () => {
    setLoading(true);
    const companiesServerlessResponse = await runServerless({
      name: 'getCompaniesWithDistanceBatch',
      propertiesToSend: ['hs_object_id', 'city', 'state', 'address'],
      payload: { batchSize: companiesBatchSize }
    });
    if (companiesServerlessResponse.status == 'SUCCESS') {
      const { companies } = companiesServerlessResponse.response;
      setTopValueCompaniesSorted(
        companies
          .filter(company => company.distance <= radius)
          .sort(
            (c1, c2) =>
              c2.properties.annualrevenue - c1.properties.annualrevenue
          )
      );
    } else {
      setErrorMessage(companiesServerlessResponse.message);
    }
    setLoading(false);
  };

  if (errorMessage) {
    return (
      <Alert title="Error executing serverless function" variant="error">
        {errorMessage}
      </Alert>
    );
  }
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <Flex direction="column" gap="xs">
      <Form>
        <NumberInput
          label="Radius"
          name="radius"
          description="Please enter the radius in miles"
          required={true}
          value={radius}
          min={0}
          onChange={setRadius}
        />
      </Form>
      {topValueCompaniesSorted.length > 0 && (
        <CompaniesWithDistanceTable
          portalId={context.portal.id}
          companies={topValueCompaniesSorted.slice(0, companiesToDisplay)}
          propertiesToDisplay={[
            { title: 'Annual Revenue', propertyName: 'annualrevenue' }
          ]}
        />
      )}
      <Box>
        <Button onClick={executeServerless} variant="primary" type="button">
          Fetch companies
        </Button>
      </Box>
    </Flex>
  );
};

hubspot.extend(({ context, runServerlessFunction }) => (
  <TopValueCompanies context={context} runServerless={runServerlessFunction} />
));
