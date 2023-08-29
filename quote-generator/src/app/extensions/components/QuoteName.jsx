import { Button, ButtonRow, Input } from '@hubspot/ui-extensions';
import React, { useState } from 'react';

export const QuoteName = ({ onNext, defaultName }) => {
  const [quoteName, setQuoteName] = useState(defaultName);

  return (
    <>
      <Input
        label="Quote title"
        name="quoteName"
        value={quoteName}
        required={true}
        onChange={setQuoteName}
      />
      <ButtonRow>
        <Button
          onClick={() => onNext({ quoteName })}
          variant="primary"
          type="button"
          disabled={!quoteName}
        >
          Generate quote
        </Button>
      </ButtonRow>
    </>
  );
};
