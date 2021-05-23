import axios from 'axios';
import { ENV } from '../constants';

export const getUser = (token) => axios.get(`${ENV.apiEndpoint}/me`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
