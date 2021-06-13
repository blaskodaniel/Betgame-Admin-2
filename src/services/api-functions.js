import { APIClient, PublicAPIClient } from './axios';

export const Login = (email, password) => {
  return PublicAPIClient.post(`login`, { email, password });
};

export const GetAllMatches = (query = '') => {
  return PublicAPIClient.get(`getmatches${query}`);
};

export const GetMatchById = (id) => {
  return PublicAPIClient.get(`getmatches?_id=${id}`);
};
