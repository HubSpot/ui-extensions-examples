import { Alert, Button, Flex, LoadingSpinner, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Text } from "@hubspot/ui-extensions";
import type { CrmSearchResult, PaginationState, SortDirection, SortState } from "../types";

interface ResultsProps {
  results: CrmSearchResult[];
  loading: boolean;
  error: Error | null;
  pagination: PaginationState;
  refetch: () => void;
  refetching: boolean;
  sortState: SortState;
  handleSortChange: (property: string, sortDirection: SortDirection) => void;
  resetSort: () => void;
  resetAll: () => void;
  properties: string[];
  propertyLabels: Record<string, string>;
}

interface ResultsBodyProps {
  loading: boolean;
  refetching: boolean;
  error: Error | null;
  results: CrmSearchResult[];
  properties: string[];
  columnCount: number;
}

const ResultsBody = ({ loading, refetching, error, results, properties, columnCount }: ResultsBodyProps) => {
  if (loading || refetching) {
    return (
      <TableRow>
        <TableCell colSpan={columnCount}>
          <Flex direction="column" align="center">
            <LoadingSpinner label="Loading search results..." size="md" layout="centered" />
          </Flex>
        </TableCell>
      </TableRow>
    );
  }
  if (error) {
    return (
      <TableRow>
        <TableCell colSpan={columnCount}>
          <Alert variant="danger" title="Error fetching search results:">{error.message}</Alert>
        </TableCell>
      </TableRow>
    );
  }
  if (results.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={columnCount}>
          <Alert variant="warning" title="No results found">No results. Try adjusting your search criteria.</Alert>
        </TableCell>
      </TableRow>
    );
  }
  return (
    <>
      {results.map((result) => (
        <TableRow key={result.objectId}>
          <TableCell>
            <Text format={{ fontWeight: 'bold' }}>{result.objectId}</Text>
          </TableCell>
          {properties.map((prop) => (
            <TableCell key={prop}>
              <Text>{result.properties[prop] ?? ''}</Text>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

const Results = ({
  results,
  loading,
  error,
  pagination,
  refetch,
  refetching,
  sortState,
  handleSortChange,
  resetSort,
  resetAll,
  properties,
  propertyLabels,
}: ResultsProps) => {
  const columnCount = properties.length + 1;

  return (
    <Flex direction="column" gap="sm">
      <Flex justify="end" direction="row" gap="sm">
        <Button onClick={refetch}>Fetch Latest</Button>
        <Button onClick={resetSort}>Reset Sort</Button>
        <Button onClick={resetAll}>Reset Search</Button>
      </Flex>
      <Table density="condensed">
        <TableHead>
          <TableRow>
            <TableHeader
              sortDirection={sortState.objectId}
              onSortChange={(dir: SortDirection) => handleSortChange('objectId', dir)}
            >
              Object ID
            </TableHeader>
            {properties.map((prop) => (
              <TableHeader
                key={prop}
                sortDirection={sortState[prop]}
                onSortChange={(dir: SortDirection) => handleSortChange(prop, dir)}
              >
                {propertyLabels[prop] || prop}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <ResultsBody
            loading={loading}
            refetching={refetching}
            error={error}
            results={results}
            properties={properties}
            columnCount={columnCount}
          />
        </TableBody>
      </Table>
      <Flex gap="sm" align="center" justify="center">
        <Button disabled={!pagination.hasPreviousPage} onClick={pagination.reset}>Go to Page 1</Button>
        <Button disabled={!pagination.hasPreviousPage} onClick={pagination.previousPage}>Previous</Button>
        <Button disabled={!pagination.hasNextPage} onClick={pagination.nextPage}>Next</Button>
      </Flex>
    </Flex>
  );
};

export default Results;
