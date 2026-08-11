import React from 'react';
import {
  Heading,
  Select,
  Image,
  TextArea,
  Button,
  StepperInput,
  Text,
  Flex,
  Form,
  Panel,
  PanelBody,
  PanelSection,
  PanelFooter,
  Icon,
} from '@hubspot/ui-extensions';

export const TshirtPanel = ({ actions, variant }) => {
  return (
    <Panel id="red-panel" title="Customize your Red Tshirt" variant={variant}>
      <Form
        onSubmit={() => {
          // Add here on-submit logic
          actions.closeOverlay('red-panel');
        }}
      >
        <PanelBody>
          <PanelSection>
            <Flex direction="column" gap="medium">
              <Flex align="center" gap="medium">
                <Image
                  src="https://media.istockphoto.com/id/685779142/photo/red-tshirt-clothes.jpg?s=612x612&w=0&k=20&c=SJfbPSpSMhQtQi4NKDXn6JEf9qQqV-z_97czLZaKAoo="
                  width={200}
                  height={100}
                  alt="red tshirt"
                ></Image>
                <Heading>Red Tshirt!</Heading>
              </Flex>
              <Text>Here is the description for this beautiful red tshirt</Text>
              <Flex direction="column" gap="small">
                <Select
                  name="szType"
                  label="Size"
                  options={[
                    { label: 'Small', value: 'sm' },
                    { label: 'Medium', value: 'md' },
                    { label: 'Large', value: 'lg' },
                    { label: 'Extra large', value: 'xl' },
                  ]}
                />
                <Select
                  name="matType"
                  label="Material"
                  options={[
                    { label: 'Nylon', value: 'n' },
                    { label: 'Cotton', value: 'c' },
                    {
                      label: 'Cashmere',
                      value: 'ch',
                    },
                  ]}
                />
                <StepperInput label="Quantity" name="qty" defaultValue={1} />
                <TextArea
                  name="customText"
                  label="Customize your Tshirt"
                  description="Add text to the Tshirt"
                ></TextArea>
                <TextArea
                  name="notes"
                  label="Anything else to add?"
                  description="Add any specific notes for the vendor"
                ></TextArea>
              </Flex>
            </Flex>
          </PanelSection>
        </PanelBody>
        <PanelFooter>
          <Button variant="primary" type="submit">
            <Icon name="shoppingCart" /> Add to Cart
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              actions.closeOverlay('red-panel');
            }}
          >
            <Icon name="remove" /> Cancel
          </Button>
        </PanelFooter>
      </Form>
    </Panel>
  );
};
