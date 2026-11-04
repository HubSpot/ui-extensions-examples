import { useMemo } from "react";
import { Accordion, Flex, Text } from "@hubspot/ui-extensions";

interface HookUsageDisplayProps {
  hookArgs: Record<string, unknown>;
}

// @hubspot/ui-extensions has no <pre> or monospace block; non-breaking spaces
// preserve indentation since the runtime collapses regular whitespace.
const formatJson = (obj: Record<string, unknown>) =>
  JSON.stringify(obj, null, 2).replace(/\n/g, '\n  ');

const HookUsageDisplay = ({ hookArgs }: HookUsageDisplayProps) => {
  const lines = useMemo(() => [
    'useRecordSearch(',
    `  ${formatJson(hookArgs)}`,
    ')',
  ].join('\n').split('\n').map((line) => line.replace(/ /g, '\u00A0')), [hookArgs]);

  return (
    <Accordion title="Hook Usage" size="sm">
      <Flex direction="column" gap="flush">
        {lines.map((line, i) => (
          <Text key={i} inline={false}>{line}</Text>
        ))}
      </Flex>
    </Accordion>
  );
};

export default HookUsageDisplay;
