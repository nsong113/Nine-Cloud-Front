import { atom, selector } from 'recoil';

export const isActiveEditModal = atom({
  key: 'isActiveEditModal',
  default: false,
});

export const isActiveDeleteModal = atom({
  key: 'isActiveDeleteModal',
  default: false,
});