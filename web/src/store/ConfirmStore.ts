import create from 'zustand';

export interface ConfirmStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ConfirmStore = create<ConfirmStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
