import { APIClient, PublicAPIClient } from './axios';

/**
 *
 *  Without token
 *
 */

export const Login = (email, password) => {
  return PublicAPIClient.post(`login`, { email, password });
};

export const GetAllMatches = (query = '') => {
  return PublicAPIClient.get(`getmatches${query}`);
};

export const GetMatchById = (id) => {
  return PublicAPIClient.get(`getmatches?_id=${id}`);
};

export const GetAllTeams = (query = '') => {
  return PublicAPIClient.get(`getteam${query}`);
};

export const GetAllGroups = (query = '') => {
  return PublicAPIClient.get(`getgroup${query}`);
};

export const getAvatars = () => {
  return PublicAPIClient.get(`getavatars`);
};

/**
 *
 *  With token
 *
 */
export const GetAllUsers = () => {
  return APIClient.get(`allusernew`);
};

export const GetChampionships = () => {
  return APIClient.get(`championships`);
};

export const SetChampionships = (body) => {
  return APIClient.patch(`championships`, body);
};

export const CreateChampionships = (body) => {
  return APIClient.post(`championships`, body);
};

export const DeleteChampionships = (id) => {
  return APIClient.delete(`championships/${id}`);
};

export const GetLogs = (pagenumber) => {
  return APIClient.post(`logs`, { page: pagenumber });
};

export const GetFlags = () => {
  return APIClient.get(`getflags`);
};

export const CreateTeam = (body) => {
  return APIClient.post(`addteam`, body);
};
