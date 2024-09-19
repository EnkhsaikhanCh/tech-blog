export interface NavItem {
  title: string;
  href: string;
  label?: string;
}

export interface SelectCategoryItem {
  label: string;
  value: string;
}

export interface MainNavItem extends NavItem {}
