import React from 'react';
import {
  Link,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@hubspot/ui-extensions';

export const CompaniesWithDistanceTable = ({
  portalId,
  companies,
  propertiesToDisplay,
}) => {
  return (
    <Table bordered={true}>
      <TableHead>
        <TableRow>
          <TableHeader>Company Name</TableHeader>
          <TableHeader>Distance</TableHeader>
          {propertiesToDisplay.map((p) => (
            <TableHeader>{p.title}</TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {companies.map((company) => {
          return (
            <TableRow key={company.id}>
              <TableCell>
                <Link
                  href={`https://app.hubspot.com/contacts/${portalId}/record/0-2/${company.id}`}
                >
                  {company.properties.name}
                </Link>
              </TableCell>
              <TableCell>{company.distance.toFixed(2)} miles</TableCell>
              {propertiesToDisplay.map((p) => (
                <TableCell>{company.properties[p.propertyName]}</TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
