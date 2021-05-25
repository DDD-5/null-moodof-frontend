import {
  put, call, takeLatest, all, select,
} from 'redux-saga/effects';
import { action as photoStorageActions } from './slices';
import * as photoApi from '../../api/photo';

const getToken = () => window.localStorage.getItem('token');

function* getStoragePhotos() {
  try {
    const token = getToken();
    const { photoStorage: photoStorageState } = yield select();
    const { isDesc: descending, page, size } = photoStorageState;
    const response = yield call(photoApi.getStoragePhotos, token, { descending, page, size });
    yield put(photoStorageActions.getStoragePhotosSuccess(response.data));
  } catch (error) {
    yield put(photoStorageActions.getStoragePhotosFailed(error));
  }
}

function* getStoragePhotoDetail({ payload }) {
  try {
    const token = getToken();
    const response = yield call(photoApi.getStoragePhotoDetail, token, payload);
    yield put(photoStorageActions.getStoragePhotoDetailSuccess(response.data));
  } catch (error) {
    yield put(photoStorageActions.getStoragePhotoDetailFailed(error));
  }
}

function* watchGetStoragePhotos() {
  yield takeLatest(photoStorageActions.getStoragePhotosRequest, getStoragePhotos);
}

function* watchGetStoragePhotoDetail() {
  yield takeLatest(photoStorageActions.getStoragePhotoDetailRequest, getStoragePhotoDetail);
}

export default function* rootSaga() {
  yield all([
    watchGetStoragePhotos(),
    watchGetStoragePhotoDetail(),
  ]);
}
