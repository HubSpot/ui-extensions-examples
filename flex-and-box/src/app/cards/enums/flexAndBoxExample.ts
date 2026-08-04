import { getCurrentDate } from '../utils/date';

export enum PropertyType {
  Bedroom = 'bedroom',
  Studio = 'studio',
  BedroomX2 = 'bedroom_x2',
}

export enum ListingItemStatus {
  Available = 'success',
  InProgress = 'warning',
  Occupied = 'error',
  Undefined = 'default',
}

export interface CreationDate {
  year: number;
  month: number;
  date: number;
  formattedDate?: string;
}

export interface ListingItem {
  address: string;
  propertyType: PropertyType;
  rentalPrice?: number;
  creationDate: CreationDate;
  status: ListingItemStatus;
}

export const propertyTypeSelectOptions = [
  { label: 'Studio', value: 'studio' },
  { label: '1 bedroom', value: 'bedroom' },
  { label: '2 bedroom', value: 'bedroom_x2' },
];

export const listingItemStatusSelectOptions = [
  { label: 'Available', value: ListingItemStatus.Available },
  { label: 'In progress', value: ListingItemStatus.InProgress },
  { label: 'Occupied', value: ListingItemStatus.Occupied },
  { label: 'Undefined', value: ListingItemStatus.Undefined },
];

const ListingItemDefaultCreationDate: CreationDate = {
  year: 2023,
  month: 6,
  date: 20,
  formattedDate: 'Jul 20, 2023',
};
export const listingItemsSamples: ListingItem[] = [
  {
    address: '31 Beacon St, Boston, MA',
    propertyType: PropertyType.Bedroom,
    rentalPrice: 3100,
    creationDate: ListingItemDefaultCreationDate,
    status: ListingItemStatus.Occupied,
  },
  {
    address: '27 Rossmore St, Somerville, MA',
    propertyType: PropertyType.BedroomX2,
    rentalPrice: 1700,
    creationDate: ListingItemDefaultCreationDate,
    status: ListingItemStatus.Available,
  },
  {
    address: '789 Pine St',
    propertyType: PropertyType.BedroomX2,
    rentalPrice: 3250,
    creationDate: ListingItemDefaultCreationDate,
    status: ListingItemStatus.Undefined,
  },
  {
    address: '101 Elm St',
    propertyType: PropertyType.Studio,
    rentalPrice: 2450,
    creationDate: ListingItemDefaultCreationDate,
    status: ListingItemStatus.InProgress,
  },
  {
    address: '202 Maple St',
    propertyType: PropertyType.BedroomX2,
    rentalPrice: 3400,
    creationDate: ListingItemDefaultCreationDate,
    status: ListingItemStatus.Available,
  },
];

export const listingItemDefaultFields: ListingItem = {
  address: '',
  rentalPrice: undefined,
  creationDate: getCurrentDate(),
  propertyType: PropertyType.Studio,
  status: ListingItemStatus.Available,
};

export interface PropertyFormProps {
  onSubmit: (item: ListingItem) => void;
}

export interface PropertyTileProps {
  listingItem: ListingItem;
}
