import React, { useState, useEffect } from 'react';
import { Alert, LoadingSpinner } from '@hubspot/ui-extensions';
import { CompaniesWithDistanceTable } from './components/CompaniesWithDistanceTable.jsx';
import { hubspot } from '@hubspot/ui-extensions';

const NearestCompanies = ({ context, runServerless, fetchProperties }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [nearestCompaniesSorted, setNearestCompaniesSorted] = useState([]);
  const companiesToDisplay = 3;

  useEffect(() => {
    async function fetchCompaniesWithDistanceBatch() {
      setLoading(true);
      const companiesServerlessResponse = await runServerless({
        name: 'getCompaniesWithDistanceBatch',
        propertiesToSend: ['hs_object_id', 'city', 'state', 'address'],
        payload: { batchSize: 30 }
      });
      if (companiesServerlessResponse.status == 'SUCCESS') {
        const { companies } = companiesServerlessResponse.response;
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
    <CompaniesWithDistanceTable
      portalId={context.portal.id}
      companies={nearestCompaniesSorted.slice(0, companiesToDisplay)}
      propertiesToDisplay={[
        { title: 'Domain', propertyName: 'domain' },
        { title: 'Phone', propertyName: 'phone' }
      ]}
    />
  );
};

hubspot.extend(({ actions, context, runServerlessFunction }) => (
  <NearestCompanies
    runServerless={runServerlessFunction}
    context={context}
    fetchProperties={actions.fetchCrmObjectProperties}
  />
));
