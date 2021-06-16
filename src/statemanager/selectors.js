import { selector, selectorFamily } from 'recoil';
import { GetAllGroups, GetAllMatches, GetAllTeams, GetMatchById } from '../services/api-functions';

export const getMatchesSelector = selector({
  key: 'getMatchesSelector',
  get: async () => {
    try {
      const resp = await GetAllMatches();
      return resp.data || [];
    } catch (e) {
      console.log('ERROR');
      return [];
    }
  },
});

export const getMatchSelector = selectorFamily({
  key: 'getMatchSelector',
  get: (matchID) => async () => {
    try {
      const resp = await GetMatchById(matchID);
      return resp.data[0] || {};
    } catch (e) {
      console.log('ERROR');
      return [];
    }
  },
});

export const getTeamsSelector = selector({
  key: 'getTeamsSelector',
  get: async () => {
    try {
      const resp = await GetAllTeams();
      return resp.data || [];
    } catch (e) {
      console.log('ERROR');
      return [];
    }
  },
});

export const getGroupSelector = selector({
  key: 'getGroupSelector',
  get: async () => {
    try {
      const resp = await GetAllGroups();
      return resp.data || [];
    } catch (e) {
      console.log('ERROR');
      return [];
    }
  },
});
