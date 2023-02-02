export type DashboardTab = {
  name: DashboardTabType;
  icon: IconType;
  current: boolean;
};

export type AlertType = 'failure' | 'gray' | 'info' | 'success' | 'warning';

export type Alert = {
  id: string;
  message: string;
  type: AlertType;
};

export type DashboardTabType = 'Dashboard' | 'Order overview' | 'Recent';

export type AdminTabType = 'Products' | 'Categories' | 'Attributes' | 'Users';

export type AdminTab = {
  name: AdminTabType;
  Icon: IconType;
  current: boolean;
};

export interface Root {
  email: string;
  sub: number;
  iat: number;
}
