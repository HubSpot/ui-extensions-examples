import React from "react";
import {
  Button,
  Text,
  Flex,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  hubspot,
} from "@hubspot/ui-extensions";
import { ModalExample } from './components/ModalExample';
import { PanelExample } from './components/PanelExample';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ actions }) => (
  <ButtonsExampleCard
    actions={actions}
  />
));

// Define the Extension component, taking in runServerless, context, & sendAlert as props
const ButtonsExampleCard = ({ actions }) => {
  return (
    <>
      <Flex direction="column" gap="small">
        <Heading>Buttons within Panels and Modals</Heading>
        <Text>
          Working with buttons within panels and modals can get tricky
          Here are some examples that we suggest you to follow.
        </Text>
        <Table bordered={true}>
          <TableHead width="min">
            <TableRow>
              <TableHeader width="min">Usage</TableHeader>
              <TableHeader width="max">Description</TableHeader>
              <TableHeader width="min">Example</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell width="min">Modal</TableCell>
              <TableCell>
                Use this to communicate a short message that needs the complete
                attention of the user. Buttons should be left aligned with the
                primary button placed leftmost. A primary button should only be used once on each surface.
              </TableCell>
              <TableCell>
                <Button
                  size="extra-small"
                  variant="secondary"
                  overlay={<ModalExample actions={actions} />}
                >
                  Open Modal
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell width="min">Panel</TableCell>
              <TableCell>
                When users need context from the page below, for longer forms
                and multi-step flows. These pair well with the Table component.
                Follow the same guidance as recommended above, but in this case, we suggest using buttons in the footer.              </TableCell>
              <TableCell>
                <Button
                  variant="secondary"
                  size="extra-small"
                  overlay={<PanelExample actions={actions} variant="default" />}
                >
                  Open Panel
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Flex>
    </>
  );
};
