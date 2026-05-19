import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalFooter,
  Tag,
  Text,
  useExtensionActions,
} from "@hubspot/ui-extensions";
import type { CrmFilterGroup, PropertyOption } from "../types.ts";
import { emptyFormState } from "../utils/filterForm";
import { useFilterGroupState } from "../hooks/useFilterGroupState";
import FilterForm from "./FilterForm";
import FilterRow from "./FilterRow";

interface FilterGroupsBuilderProps {
  filterGroups: CrmFilterGroup[];
  onChange: (groups: CrmFilterGroup[]) => void;
  availableProperties: PropertyOption[];
}

const FilterGroupsBuilder = ({
  filterGroups,
  onChange,
  availableProperties,
}: FilterGroupsBuilderProps) => {
  const { closeOverlay } = useExtensionActions<'home'>();
  const {
    getAddFormState,
    getEditFormState,
    setAddFormState,
    setEditFormState,
    handleAddFilterSubmit,
    handleAddFilterGroupSubmit,
    handleEditFilterSubmit,
    removeFilter,
    removeGroup,
  } = useFilterGroupState(filterGroups, onChange);

  return (
    <Flex direction="column" gap="sm">
      <Text format={{ fontWeight: 'bold' }}>Filter Groups</Text>
      <Text format={{ italic: true }}>
        Filter groups are combined with OR logic. Filters within a group use AND logic.
      </Text>

      {filterGroups.length === 0 && (
        <Text>No filter groups configured. Add one to refine your search results.</Text>
      )}

      {filterGroups.map((group, groupIndex) => (
        <Flex direction="column" gap="flush" key={group.id}>
          {groupIndex > 0 && (
            <Flex justify="center" align="center">
              <Divider />
              <Box>
                <Tag variant="warning">OR</Tag>
              </Box>
              <Divider />
            </Flex>
          )}
          <Box>
            <Flex direction="column" gap="flush">
              <Flex direction="row" justify="between" align="center">
                <Text format={{ fontWeight: 'bold' }}>Group {groupIndex + 1}</Text>
                <Button size="xs" variant="destructive" onClick={() => removeGroup(groupIndex)}>
                  Remove Group
                </Button>
              </Flex>

              {group.filters.map((filter, filterIndex) => (
                <Flex direction="column" gap="flush" key={filter.id}>
                  {filterIndex > 0 && (
                    <Flex justify="center">
                      <Tag variant="success">AND</Tag>
                    </Flex>
                  )}
                  <FilterRow
                    filter={filter}
                    onRemove={() => removeFilter(groupIndex, filterIndex)}
                    editModalId={`edit-filter-${filter.id}`}
                    formState={getEditFormState(filter.id)}
                    setFormState={(updater) => setEditFormState(filter.id, updater)}
                    onSubmitEdit={() => handleEditFilterSubmit(groupIndex, filterIndex)}
                    availableProperties={availableProperties}
                  />
                </Flex>
              ))}

              <Box>
                <Button
                  size="xs"
                  variant="transparent"
                  onClick={() => setAddFormState(`add-filter-${group.id}`, emptyFormState())}
                  overlay={
                    <Modal id={`add-filter-${group.id}`} title={`Add Filter to Group ${groupIndex + 1}`} width="md">
                      <ModalBody>
                        <FilterForm
                          formState={getAddFormState(`add-filter-${group.id}`)}
                          setFormState={(updater) => setAddFormState(`add-filter-${group.id}`, updater)}
                          availableProperties={availableProperties}
                        />
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          variant="primary"
                          onClick={() => {
                            closeOverlay(`add-filter-${group.id}`);
                            handleAddFilterSubmit(groupIndex, group.id);
                          }}
                        >
                          Add Filter
                        </Button>
                      </ModalFooter>
                    </Modal>
                  }
                >
                  + Add Filter
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      ))}

      <Button
        variant="secondary"
        onClick={() => setAddFormState('add-filter-group-modal', emptyFormState())}
        overlay={
          <Modal id="add-filter-group-modal" title="Add Filter to New Group" width="md">
            <ModalBody>
              <FilterForm
                formState={getAddFormState('add-filter-group-modal')}
                setFormState={(updater) => setAddFormState('add-filter-group-modal', updater)}
                availableProperties={availableProperties}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                variant="primary"
                onClick={() => {
                  closeOverlay('add-filter-group-modal');
                  handleAddFilterGroupSubmit();
                }}
              >
                Add Filter
              </Button>
            </ModalFooter>
          </Modal>
        }
      >
        + Add Filter Group
      </Button>
    </Flex>
  );
};

export default FilterGroupsBuilder;
