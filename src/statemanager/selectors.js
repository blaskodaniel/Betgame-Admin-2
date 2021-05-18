import { selector } from 'recoil';
import { cart } from './atoms';

export const cartSelector = selector({
  key: 'cartSelector',
  get: ({ get }) => {
    const carta = get(cart);
    const newcart = carta * 10;
    return newcart;
  },
});
