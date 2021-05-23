import axios from 'axios';
import { ENV } from '../constants';

export const getCategories = (token) => axios.get(`${ENV.apiEndpoint}/categories`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const createCategory = (token, params) => axios.post(
  `${ENV.apiEndpoint}/categories`,
  params,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

export const removeCategory = (token, categoryId) => axios.delete(
  `${ENV.apiEndpoint}/categories/${categoryId}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

export const updateCategoryName = (token, categoryId, params) => axios.put(
  `${ENV.apiEndpoint}/categories/${categoryId}/title`,
  params,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);
