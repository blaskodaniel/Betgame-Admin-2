import { selector } from 'recoil';
import { GetAllMatches } from '../services/api-functions';

export const getMatchesSct = selector({
  key: 'getMatchesSct',
  get: async () => {
    try {
      const resp = await GetAllMatches();
      return resp.data;
    } catch (e) {
      console.log('ERROR');
      return e;
    }
  },
});
