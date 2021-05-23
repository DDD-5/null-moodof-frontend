import {
  put, call, takeLatest, all,
} from 'redux-saga/effects';
import { action as userActions } from './slices';
import * as userApi from '../../api/user';

const getToken = () => window.localStorage.getItem('token');

function* getUser() {
  try {
    const token = getToken();
    const response = yield call(userApi.getUser, token);
    yield put(userActions.getUserSuccess(response));
  } catch (error) {
    yield put(userActions.getUserFailed(error));
  }
}

function* watchGetUser() {
  yield takeLatest(userActions.getUserRequest, getUser);
}

export default function* rootSaga() {
  yield all([
    watchGetUser(),
  ]);
}
