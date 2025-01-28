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
  })).sort((a, b) => a.date.diff(b.date));

export const calculatePurchaseHistory = (sales: SaleSample[]) => {
  const acc = {};
  sales.forEach(({ date }) => {
    const yearMonth = formatToYearMonth(date);
    if (acc[yearMonth]) {
      acc[yearMonth]++;
    } else {
      acc[yearMonth] = 1;
    }
  });
  return Object.entries(acc).map(([yearMonth, sales]) => ({
    yearMonth,
    sales,
  }));
};

export const calculateSalesDistribution = (sales: SaleSample[]) => {
  const acc = {};
  sales.forEach(({ date, category, price }) => {
    const yearMonth = formatToYearMonth(date);
    const key = `${yearMonth}-${category}`;
    acc[key] = acc[key] || {
      yearMonth,
      category,
      revenue: 0,
    };
    acc[key]['revenue'] += price;
  });

  return Object.values(acc);
};
