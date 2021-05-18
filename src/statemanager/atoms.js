import { atom } from 'recoil';

export const currentUser = atom({
  key: 'currentuser',
  default: {
    name: 'Visitor',
  },
});

export const cart = atom({
  key: 'cart',
  default: 0,
});
