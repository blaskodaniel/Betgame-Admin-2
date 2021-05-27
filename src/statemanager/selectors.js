import { selector } from 'recoil';
import { GetAllMatches } from '../services/api-functions';

export const getMatchesSct = selector({
  key: 'getMatchesSct',
  get: async () => {
    const resp = await GetAllMatches();
    return resp.data;
  },
});
