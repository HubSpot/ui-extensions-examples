import React from 'react';
import {
  BarChart,
  Divider,
  LineChart,
  Link,
  Text,
} from '@hubspot/ui-extensions';
import { hubspot } from '@hubspot/ui-extensions';
import {
  calculatePurchaseHistory,
  calculateSalesDistribution,
  generateSalesOverTimeSamples,
} from './utils';

hubspot.extend(() => <Extension />);

const Extension = () => {
  const salesOverTimeSamples = generateSalesOverTimeSamples({
    nSamples: 100,
    periodInMonths: 6,
    categories: ['Outdoor apparel', 'Footwear', 'Camping gear', 'Accessories'],
  });

  // LineChart data
  const purchaseHistory = calculatePurchaseHistory(salesOverTimeSamples);

  // BarChart data
  const salesDistribution = calculateSalesDistribution(salesOverTimeSamples);

  return (
    <>
      <Text>
        This card shows how to use a{' '}
        <Link
          href={
            'https://developers.hubspot.com/docs/platform/ui-components/linechart'
          }
        >
          line
        </Link>{' '}
        and{' '}
        <Link
          href={
            'https://developers.hubspot.com/docs/platform/ui-components/barchart'
          }
        >
          bar
        </Link>{' '}
        chart to display external data. The line chart visualizes a customer’s
        purchase history trends over time and the stacked bar chart shows
        customer revenue data by category.
      </Text>

      <LineChart
        data={purchaseHistory}
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
        options={{
          title: 'Purchase history',
          showLegend: true,
          showDataLabels: true,
          showTooltips: true,
        }}
      />

      <Divider />

      <BarChart
        data={salesDistribution}
        axes={{
          x: {
            field: 'yearMonth',
            fieldType: 'category',
            label: 'Time (months)',
          },
          y: { field: 'revenue', fieldType: 'linear', label: 'Revenue ($)' },
          options: { groupFieldByColor: 'category', stacking: true },
        }}
        options={{
          title: 'Sales distribution',
          showLegend: true,
          showDataLabels: true,
          showTooltips: true,
        }}
      />
    </>
  );
};
