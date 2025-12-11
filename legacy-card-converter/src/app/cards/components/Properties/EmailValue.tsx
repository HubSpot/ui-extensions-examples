import { Link } from '@hubspot/ui-extensions';

export interface EmailValueProps {
  value: string | number;
  testId?: string;
}

export function EmailValue({ value, testId }: EmailValueProps) {
  const emailValue = String(value);
  return (
    <Link
      testId={testId}
      href={{
        url: `mailto:${emailValue}`,
        external: false,
      }}
    >
      {emailValue}
    </Link>
  );
}
