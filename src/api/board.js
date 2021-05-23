import axios from 'axios';
import { ENV } from '../constants';

export const createBoard = (token, params) => axios.post(
  `${ENV.apiEndpoint}/boards`,
  params,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);
