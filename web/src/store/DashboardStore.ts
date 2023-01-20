import create from 'zustand';
import { immer } from 'zustand/middleware';
import { DashboardTab, DashboardTabType } from '../types/DashboardTab';

export interface DashboardState {
  DashboardTabs: DashboardTab[];
}

export const DashboardStore = create<DashboardState>()(
  immer<DashboardStore>((set, get) => ({
    DashboardTabs: [
      { name: 'Dashboard', current: true },
      { name: 'Order overview', current: false },
      { name: 'Recent', current: false },
    ],
    setAdminTab: (name: DashboardTabType) =>
      set(
        (state) =>
          void (state.DashboardTabs = get().DashboardTabs.map((t) => ({
            ...t,
            current: t.name === name,
          })))
      ),
    getCurrentAdminTab: () =>
      get().DashboardTabs.find((t) => t.current) as DashboardTab,
  }))
);
