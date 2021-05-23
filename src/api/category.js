import axios from 'axios';
import { ENV } from '../constants';

export const getCategories = (token) => axios.get(`${ENV.apiEndpoint}/categories`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
