import type {
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

export interface ButtonOnClickReactons {
  openPanel: (id: string) => void;
  closePanel: (id: string) => void;
}

export interface RestaurantRowProps {
  restaurant: Restaurant;
  onClick: (reactions: ButtonOnClickReactons) => void;
}

export interface RestaurantsTableProps {
  pageNumber: number;
  onPageChange: (pageNumber: number) => void;
  searchTerm: string;
  onAddToCartClick: (cartItem: CartItem) => void;
  restaurants: Array<Restaurant>;
}

export interface MenuPanelContentProps {
  restaurant: Restaurant;
  onAddToCartClick: (cartItem: CartItem) => void;
  closePanel: (reactions: ButtonOnClickReactons) => void;
}

export interface RestaurantsSearchProps {
  contactName: string;
  restaurants: Array<Restaurant>;
  onAddToCartClick: (cartItem: CartItem) => void;
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
