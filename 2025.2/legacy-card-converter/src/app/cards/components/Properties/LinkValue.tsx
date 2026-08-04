import { Link } from '@hubspot/ui-extensions';
import React from 'react';

export interface LinkValueProps {
  value: string | number;
  linkLabel?: string;
  testId?: string;
}

export function LinkValue({ value, linkLabel, testId }: LinkValueProps) {
  const linkValue = String(value);
  const label = linkLabel || linkValue;
  return (
    <Link
      testId={testId}
      href={{
        url: linkValue,
        external: true,
      }}
    >
      {label}
    </Link>
  );
}
