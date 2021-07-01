import axios from 'axios';
import { readToken } from '../utils/common';

axios.defaults.timeout = 8000;

export const PublicAPIClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASEURL}/`,
});

/**
 * Axios instance wit JWT token authentication
 */
export const APIClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASEURL}/api/`,
});

/**
 * Axios interceptor allows you to add JWT token header to request
 */
APIClient.interceptors.request.use(
  (request) => {
    const token = readToken();

    if (token) {
      request.headers['x-access-token'] = token;
    }

    return request;
  },
  (err) => {
    return Promise.reject(err);
  },
);
