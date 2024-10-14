import React from 'react';
import { Divider, Text } from '@hubspot/ui-extensions';
import { LineChart, BarChart } from '@hubspot/ui-extensions';
import { hubspot } from '@hubspot/ui-extensions';
import {
  calculateTotalSalesPerMonth,
  formatToYearMonth,
  generateSalesOverTimeSamples,
} from './utils';

hubspot.extend(() => <Extension />);

const Extension = () => {
  const salesOverTimeSamples = generateSalesOverTimeSamples({
    nSamples: 100,
    periodInMonths: 6,
    categories: ['Outdoor apparel', 'Footwear', 'Camping gear', 'Accessories'],
  });

  // LineChart total sales data
  const totalSalesPerMonthBreakdown =
    calculateTotalSalesPerMonth(salesOverTimeSamples);

  // BarChart revenue data
  const revenuePerMonthBreakdown = salesOverTimeSamples.map(
    ({ date, ...salesItem }) => ({
      ...salesItem,
      yearMonth: formatToYearMonth(date),
    }),
  );

  return (
    <>
      <Text>
        This card shows how to use a line and bar chart to display external
        data. The line chart visualizes a customer’s purchase history trends
        over time and the stacked bar chart shows customer revenue data by
        category.
      </Text>

      <LineChart
        data={totalSalesPerMonthBreakdown}
        axes={{
          x: {
            field: 'yearMonth',
            fieldType: 'category',
            label: 'Time (months)',
          },
          y: {
            field: 'sales',
            fieldType: 'linear',
            label: 'Total Sales',
          },
        }}
        options={{ title: 'Purchase history' }}
      />

      <Divider />

      <BarChart
        data={revenuePerMonthBreakdown}
        axes={{
          x: {
            field: 'yearMonth',
            fieldType: 'category',
            label: 'Time (months)',
          },
          y: { field: 'price', fieldType: 'linear', label: 'Revenue ($)' },
          options: { groupFieldByColor: 'category', stacking: true },
        }}
        options={{ title: 'Sales distribution', showLegend: true }}
      />
    </>
  );
};
