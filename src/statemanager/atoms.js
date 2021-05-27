import { atom } from 'recoil';

export const currentUser = atom({
  key: 'currentuser',
  default: {
    name: 'Visitor',
  },
});

export const MatchesAtom = atom({
  key: 'matchesatom',
  default: [],
});
