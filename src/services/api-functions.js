import { APIClient, PublicAPIClient } from './axios';

// Without token
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

// With token
export const GetAllUsers = () => {
  return APIClient.get(`alluser`);
};
