import { selector, selectorFamily } from 'recoil';
import {
  GetAllGroups,
  GetAllMatches,
  GetAllTeams,
  GetAllUsers,
  GetChampionships,
  GetFlags,
  GetLogs,
  GetMatchById,
} from '../services/api-functions';
import { LogsCurrentPageValue } from './atoms';

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
      throw new Error(`${e.message}`);
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

export const getFlagSelector = selector({
  key: 'getFlagSelector',
  get: async () => {
    try {
      const resp = await GetFlags();
      return resp.data || [];
    } catch (e) {
      console.log('ERROR');
      return [];
    }
  },
});

export const getUsersSelector = selector({
  key: 'getUsersSelector',
  get: async () => {
    try {
      const resp = await GetAllUsers();
      return resp.data || [];
    } catch (e) {
      console.log('ERROR');
      return [];
    }
  },
});

export const getChampionshipsSelector = selector({
  key: 'getChampionshipsSelector',
  get: async () => {
    try {
      const resp = await GetChampionships();
      return resp.data || null;
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  },
});

export const getLogsSelector = selector({
  key: 'getLogsSelector',
  get: async ({ get }) => {
    try {
      const resp = await GetLogs(get(LogsCurrentPageValue).pagenumber);
      return resp.data || [];
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  },
});
