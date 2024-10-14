import moment from 'moment';
import type { Moment } from 'moment';

type SaleSample = {
  date: Moment;
  category: string;
  price: number;
};

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const formatToYearMonth = (date: Moment) => {
  return date.format('YYYY-MM');
};

export const generateSalesOverTimeSamples = ({
  nSamples,
  periodInMonths,
  categories,
}) =>
  Array.from({ length: nSamples }, () => ({
    date: moment().subtract(random(0, periodInMonths), 'months'),
    category: categories[random(0, categories.length)],
    price: random(1, 101),
  }));

export const calculateTotalSalesPerMonth = (sales: SaleSample[]) => {
  const salesPerMonthAccumulation = {};
  sales.forEach(({ date }) => {
    const yearMonth = formatToYearMonth(date);
    if (salesPerMonthAccumulation[yearMonth]) {
      salesPerMonthAccumulation[yearMonth]++;
    } else {
      salesPerMonthAccumulation[yearMonth] = 1;
    }
  });
  return Object.entries(salesPerMonthAccumulation).map(
    ([yearMonth, sales]) => ({
      yearMonth,
      sales,
    }),
  );
};
