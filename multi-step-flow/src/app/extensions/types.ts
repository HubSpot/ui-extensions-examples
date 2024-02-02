import type {
  AddAlertAction,
  CrmContext,
  FetchCrmObjectPropertiesAction,
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

export interface Reactons {
  openPanel: (id: string) => void;
  closePanel: (id: string) => void;
}

export interface RestaurantRowProps {
  restaurant: Restaurant;
  onClick: (reactions: Reactons) => void;
}

export interface RestaurantsTableProps {
  pageNumber: number;
  onPageChange: (pageNumber: number) => void;
  searchTerm: string;
  onAddToCart: (cartItem: CartItem) => void;
  restaurants: Array<Restaurant>;
}

export interface MenuPanelContentProps {
  restaurant: Restaurant;
  onAddToCart: (cartItem: CartItem) => void;
  closePanel: (reactions: Reactons) => void;
}

export interface RestaurantsSearchProps {
  contactName: string;
  restaurants: Array<Restaurant>;
  onAddToCart: (cartItem: CartItem) => void;
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
  context: CrmContext;
  sendAlert: AddAlertAction;
}
