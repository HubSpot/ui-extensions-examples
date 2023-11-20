import React, { useState } from 'react';
import { hubspot } from '@hubspot/ui-extensions';
import { LoadingSpinner, Flex, StepIndicator } from '@hubspot/ui-extensions';
import { TripDetails } from './components/TripDetails.jsx';
import { BusOptions } from './components/BusOptions.jsx';
import { QuotesView } from './components/QuotesView.jsx';
import { QuoteName } from './components/QuoteName.jsx';

const Steps = {
  QuotesView: 0,
  TripDetails: 1,
  BusOptions: 2,
  QuoteName: 3,
};

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ runServerlessFunction }) => (
  <ShuttleBusQuotes runServerless={runServerlessFunction} />
));

const ShuttleBusQuotes = ({ runServerless }) => {
  const [step, setStep] = useState(Steps.QuotesView);
  const [passengers, setPassengers] = useState();
  const [distance, setDistance] = useState();
  const [sku, setSku] = useState();
  const [numberOfBuses, setNumberOfBuses] = useState();
  const [loading, setLoading] = useState(false);

  const generateQuote = ({ ...payload }) => {
    // Execute serverless function to generate a quote
    return runServerless({
      name: 'createQuote',
      propertiesToSend: ['hs_object_id'],
      payload,
    });
  };

  const handleTripDetails = ({ passengers, distance }) => {
    // Save passengers and distance form data
    setPassengers(passengers);
    setDistance(distance);
    setStep(Steps.BusOptions);
  };

  const handleBusOption = ({ sku, numberOfBuses }) => {
    // Save bus options form data
    setSku(sku);
    setNumberOfBuses(numberOfBuses);
    setStep(Steps.QuoteName);
  };

  const handleQuoteName = ({ quoteName }) => {
    setLoading(true);
    // Generate a quote and render initial view
    generateQuote({ distance, sku, numberOfBuses, quoteName }).then(() => {
      setLoading(false);
      setStep(Steps.QuotesView);
    });
  };

  return (
    <>
      {loading == false && (
        <Flex direction="column" gap="xs">
          {/* Render a step indicator  */}
          {step != Steps.QuotesView && (
            <StepIndicator
              currentStep={step - 1}
              stepNames={['Trip details', 'Bus options']}
            />
          )}
          {step === Steps.QuotesView && (
            <QuotesView onNext={() => setStep(Steps.TripDetails)} />
          )}
          {step === Steps.TripDetails && (
            <TripDetails onNext={handleTripDetails} />
          )}
          {step === Steps.BusOptions && (
            <BusOptions passengers={passengers} onNext={handleBusOption} />
          )}
          {step === Steps.QuoteName && (
            <QuoteName
              onNext={handleQuoteName}
              defaultName={`Quote-${sku}-${distance}-x${numberOfBuses}`}
            />
          )}
        </Flex>
      )}
      {/* If loading, show a spinner */}
      {loading === true && <LoadingSpinner />}
    </>
  );
};
