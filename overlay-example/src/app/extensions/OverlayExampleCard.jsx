import React from 'react';
import {
  Heading,
  Button,
  Text,
  TableCell,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  Flex,
  hubspot,
} from '@hubspot/ui-extensions';
import { ModalDefault } from './components/ModalDefault';
import { ModalDanger } from './components/ModalDanger';
import { TshirtPanel } from './components/TshirtPanel';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ actions }) => <OverlayExampleCard actions={actions} />);

// Define the Extension component, taking actions as props
const OverlayExampleCard = ({ actions }) => {
  return (
    <>
      <Flex direction="column" gap="small">
        <Heading>Types of Overlays</Heading>
        <Text>
          There are multiple different kinds of overlays. Find below examples of
          how each of them can be used.
        </Text>
        <Table bordered={true}>
          <TableHead width="min">
            <TableRow>
              <TableHeader>Type of Overlay</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Example</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell width="min">Modal (default)</TableCell>
              <TableCell>
                Use this to communicate a short message that needs the complete
                attention of the user. Can also be used to confirm an action and
                provide more contextual information about the action.
              </TableCell>
              <TableCell>
                <Button
                  size="extra-small"
                  variant="secondary"
                  overlay={<ModalDefault actions={actions} />}
                >
                  Open "default" Modal
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell width="min">Modal (danger)</TableCell>
              <TableCell>
                Use this variant when a user is performing a destructive action,
                something that cannot be undone. The primary CTA should be
                explicit in what is being deleted. For example, never use the
                language "Okay" to confirm the deletion of an item
              </TableCell>
              <TableCell>
                <Button
                  variant="secondary"
                  size="extra-small"
                  overlay={<ModalDanger actions={actions} />}
                >
                  Open "danger" Modal
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell width="min">Panel (default)</TableCell>
              <TableCell>
                When users need context from the page below, for longer forms
                and multi-step flows. These pair well with the Table component.{' '}
              </TableCell>
              <TableCell>
                <Button
                  variant="secondary"
                  size="extra-small"
                  overlay={<TshirtPanel actions={actions} variant="default" />}
                >
                  Open "default" Panel
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell width="min">Panel (modal)</TableCell>
              <TableCell>
                This Panel consumes the complete focus of the screen. Use for
                longer forms that don't need information from the bottom page.
                This variant is better for accessibility.
              </TableCell>
              <TableCell>
                <Button
                  variant="secondary"
                  size="extra-small"
                  overlay={<TshirtPanel actions={actions} variant="modal" />}
                >
                  Open "modal" Panel
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Flex>
    </>
  );
};
