export interface MenuItem {
  name: string;
  description: string;
  price: string;
  highlight?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}