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

export const TeamsAtom = atom({
  key: 'teamsatom',
  default: [],
});

export const LogsCurrentPageValue = atom({
  key: 'LogsCurrentPageValue',
  default: {
    pagenumber: 1,
    pagesize: 10,
  },
});
