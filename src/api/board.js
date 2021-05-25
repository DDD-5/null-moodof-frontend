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

export const removeBoard = (token, boardId) => axios.delete(
  `${ENV.apiEndpoint}/boards/${boardId}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

export const updateBoardName = (token, boardId, params) => axios.put(
  `${ENV.apiEndpoint}/boards/${boardId}/name`,
  params,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);
