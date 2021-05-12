import axios from 'axios';
import tokenChecker from '../utils/tokenChecker';

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
    const token = tokenChecker();

    if (token) {
      request.headers['x-access-token'] = token;
    }

    return request;
  },
  (err) => {
    return Promise.reject(err);
  },
);
