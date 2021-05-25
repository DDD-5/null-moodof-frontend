import axios from 'axios';
import { ENV } from '../constants';

export const getStoragePhotos = (token, params) => axios.get(`${ENV.apiEndpoint}/storage-photos`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params,
});

export const getStoragePhotoDetail = (token, photoId) => axios.get(`${ENV.apiEndpoint}/storage-photos/${photoId}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
