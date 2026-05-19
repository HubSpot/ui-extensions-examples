import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalFooter,
  Tag,
  useExtensionActions,
} from "@hubspot/ui-extensions";
import { OPERATORS } from "../constants/operators";
import { ASSOCIATION_OBJECT_TYPES } from "../constants/associations";
import type { CrmFilter, PropertyOption } from "../types";
import { fromCrmFilter, type FilterFormState } from "../utils/filterForm";
import FilterForm from "./FilterForm";

interface FilterRowProps {
  filter: CrmFilter;
  onRemove: () => void;
  editModalId: string;
  formState: FilterFormState;
  setFormState: (s: FilterFormState | ((prev: FilterFormState) => FilterFormState)) => void;
  onSubmitEdit: () => void;
  availableProperties: PropertyOption[];
}

const operatorLabel = (op: string) => OPERATORS.find((o) => o.value === op)?.label ?? op;

const associationTypeLabel = (propertyName: string): string => {
  const type = propertyName.replace('associations.', '');
  return ASSOCIATION_OBJECT_TYPES.find((t) => t.value === type)?.label ?? type;
};

const filterSummary = (filter: CrmFilter): string => {
  const op = operatorLabel(filter.operator);

  if (filter.filterType === 'association') {
    const typeLabel = associationTypeLabel(filter.propertyName);
    const valueLabel = filter.displayValue || filter.value || '?';
    return `${typeLabel} = ${valueLabel}`;
  }

  const prop = filter.propertyName;
  if (filter.operator === 'HAS_PROPERTY' || filter.operator === 'NOT_HAS_PROPERTY') {
    return `${prop} ${op}`;
  }
  if (filter.operator === 'BETWEEN') {
    return `${prop} ${op} ${filter.value} — ${filter.highValue}`;
  }
  if (filter.operator === 'IN' || filter.operator === 'NOT_IN') {
    return `${prop} ${op} [${filter.values?.join(', ')}]`;
  }
  return `${prop} ${op} "${filter.value}"`;
};

const FilterRow = ({
  filter,
  onRemove,
  editModalId,
  formState,
  setFormState,
  onSubmitEdit,
  availableProperties,
}: FilterRowProps) => {
  const { closeOverlay } = useExtensionActions<'home'>();

  return (
    <Flex direction="row" gap="sm" align="center" justify="between">
      <Box flex={1}>
        <Tag variant={filter.filterType === 'association' ? 'info' : 'default'}>
          {filterSummary(filter)}
        </Tag>
      </Box>
      <Flex direction="row" gap="flush">
        <Button
          size="xs"
          variant="secondary"
          onClick={() => {
            setFormState(fromCrmFilter(filter));
          }}
          overlay={
            <Modal id={editModalId} title="Edit Filter" width="md">
              <ModalBody>
                <FilterForm
                  formState={formState}
                  setFormState={setFormState}
                  availableProperties={availableProperties}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="primary"
                  onClick={() => {
                    closeOverlay(editModalId);
                    onSubmitEdit();
                  }}
                >
                  Update Filter
                </Button>
              </ModalFooter>
            </Modal>
          }
        >
          Edit
        </Button>
        <Button size="xs" variant="destructive" onClick={onRemove}>
          Remove
        </Button>
      </Flex>
    </Flex>
  );
};

export default FilterRow;
