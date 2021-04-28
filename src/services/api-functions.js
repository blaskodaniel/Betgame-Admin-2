import { APIClient, PublicAPIClient } from './axios';

export const Login = (email, password) => {
  return PublicAPIClient.post(`login`, { email, password });
};
