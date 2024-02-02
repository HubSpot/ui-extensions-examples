import React, { useState, useEffect } from 'react';
import { Alert, LoadingSpinner, Flex, Text } from '@hubspot/ui-extensions';
import { CompaniesWithDistanceTable } from './components/CompaniesWithDistanceTable.jsx';
import { hubspot } from '@hubspot/ui-extensions';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ actions, context, runServerlessFunction }) => (
  <NearestCompanies
    runServerless={runServerlessFunction}
    context={context}
    fetchProperties={actions.fetchCrmObjectProperties}
  />
));

const NearestCompanies = ({ context, runServerless, fetchProperties }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [nearestCompaniesSorted, setNearestCompaniesSorted] = useState([]);
  const companiesToDisplay = 3;

  useEffect(() => {
    async function fetchCompaniesWithDistanceBatch() {
      setLoading(true);
      // Request companies batch from serverless function
      const companiesServerlessResponse = await runServerless({
        name: 'getCompaniesWithDistanceBatch',
        propertiesToSend: ['hs_object_id', 'city', 'state', 'address'],
        payload: { batchSize: 30 },
      });
      if (companiesServerlessResponse.status == 'SUCCESS') {
        const { companies } = companiesServerlessResponse.response;
        // Sort companies by distance
        setNearestCompaniesSorted(
          companies.sort((c1, c2) => c1.distance - c2.distance)
        );
      } else {
        setErrorMessage(companiesServerlessResponse.message);
      }
      setLoading(false);
    }
    fetchCompaniesWithDistanceBatch();
  }, [fetchProperties, runServerless]);

  if (errorMessage) {
    // If there's an error, show an alert
    return (
      <Alert title="Error executing serverless function" variant="error">
        {errorMessage}
      </Alert>
    );
  }
  if (loading) {
    // If loading, show a spinner
    return <LoadingSpinner />;
  }
  return (
    <Flex direction={'column'} gap={'lg'}>
      <Text variant="microcopy"> View the companies nearest to the currently displaying record.</Text>
      <CompaniesWithDistanceTable
        portalId={context.portal.id}
        companies={nearestCompaniesSorted.slice(0, companiesToDisplay)}
        propertiesToDisplay={[
          { title: 'Domain', propertyName: 'domain' },
          { title: 'Phone', propertyName: 'phone' },
        ]}
      />
    </Flex>
  );
};
