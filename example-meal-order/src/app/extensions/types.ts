import {
  AddAlertAction,
  Context,
  FetchCrmObjectPropertiesAction,
  ServerlessFuncRunner
} from '@hubspot/ui-extensions';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface Menu {
  items: Array<MenuItem>;
  bases: Array<string>;
  toppings: Array<string>;
  premiums: Array<string>;
  dressings: Array<string>;
}

export interface Restaurant {
  id: number;
  name: string;
  image: string;
  category: string;
  ratings: number;
  rating: number;
  deliveryInMinutes: number;
  deliveryCost: number;
  menu: Menu;
}

export interface RatingProps {
  value: number;
}

export interface RestaurantRowProps {
  restaurant: Restaurant;
  onClick: () => void;
}

export interface RestaurantsTableProps {
  pageNumber: number;
  onPageChange: (pageNumber: number) => void;
  searchTerm: string;
  onClick: (id: number) => void;
  restaurants: Array<Restaurant>;
}

export interface RestaurantsSearchProps {
  contactName: string;
  restaurants: Array<Restaurant>;
  onRestaurantClick: (id: number) => void;
}

export interface CartItemRowProps {
  item: CartItem;
  onRemoveClick: () => void;
}

export interface CartProps {
  cart: Array<CartItem>;
  onRemoveClick: (id: number) => void;
}

export interface CheckoutProps {
  deliveryCost?: number;
  subtotal: number;
  onCheckoutClick: (message: string) => void;
}

export interface CartItem {
  restaurantId: number;
  id: number;
  name: string;
  price: number;
  bases: Array<string>;
  toppings?: Array<string>;
  premiums?: Array<string>;
  dressing: string;
}

export type OnAddClick = (item: CartItem) => void;

export interface MenuItemDetailsProps {
  restaurantId: number;
  menu: Menu;
  item: MenuItem;
  onCancelClick: () => void;
  onAddClick: OnAddClick;
}

export interface RestaurantMenuProps {
  restaurant: Restaurant;
  onBackClick: () => void;
  onAddClick: OnAddClick;
}

export interface MenuItemRowProps {
  item: MenuItem;
  onClick: () => void;
}

export interface AddonsProps {
  label: string;
  children: string;
}

export interface OrderMealProps {
  fetchCrmObjectProperties: FetchCrmObjectPropertiesAction;
  context: Context;
  runServerless: ServerlessFuncRunner;
  sendAlert: AddAlertAction;
}
