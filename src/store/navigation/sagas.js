import {
  put, call, takeLatest, all,
} from 'redux-saga/effects';
import { action as navigationActions } from './slices';
import * as categoryApi from '../../api/category';
import * as boardApi from '../../api/board';

const getToken = () => window.localStorage.getItem('token');

function* getCategories() {
  try {
    const token = getToken();
    const response = yield call(categoryApi.getCategories, token);
    yield put(navigationActions.getCategoriesSuccess(response.data));
  } catch (error) {
    alert('문제가 발생했습니다.');
    yield put(navigationActions.getCategoriesFailed(error));
  }
}

function* createBoard({ payload }) {
  try {
    const token = getToken();
    const response = yield call(boardApi.createBoard, token, payload);
    yield put(navigationActions.createBoardSuccess(response.data));
  } catch (error) {
    alert('문제가 발생했습니다.');
    yield put(navigationActions.createBoardFailed(error));
    yield put(navigationActions.getCategoriesRequest());
  }
}

function* watchGetCategories() {
  yield takeLatest(navigationActions.getCategoriesRequest, getCategories);
}

function* watchCreateBoard() {
  yield takeLatest(navigationActions.createBoardRequest, createBoard);
}

export default function* rootSaga() {
  yield all([
    watchGetCategories(),
    watchCreateBoard(),
  ]);
}
