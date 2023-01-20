export type DashboardTab = {
  name: DashboardTabType;
  icon: IconType;
  current: boolean;
};

export type DashboardTabType = 'Dashboard' | 'Order overview' | 'Recent';

export type AdminTabType = "Products" | "Categories" | "Attributes" | "Users";

export type AdminTab = {
  name: AdminTabType;
  Icon: IconType;
  current: boolean;
};
