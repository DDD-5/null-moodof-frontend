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
    yield put(navigationActions.getCategoriesFailed(error));
  }
}

function* createBoard({ payload }) {
  try {
    const token = getToken();
    const response = yield call(boardApi.createBoard, token, payload);
    yield put(navigationActions.createBoardSuccess(response.data));
  } catch (error) {
    yield put(navigationActions.createBoardFailed(error));
    yield put(navigationActions.getCategoriesRequest());
  }
}

function* removeBoard({ payload }) {
  try {
    const { categoryId, boardId } = payload;
    const token = getToken();
    yield call(boardApi.removeBoard, token, boardId);
    yield put(navigationActions.removeBoardSuccess({ categoryId, boardId }));
  } catch (error) {
    yield put(navigationActions.removeBoardFailed(error));
    yield put(navigationActions.getCategoriesRequest());
  }
}

function* updateBoardName({ payload }) {
  try {
    const { boardId, name } = payload;
    const token = getToken();
    const response = yield call(boardApi.updateBoardName, token, boardId, { name });
    yield put(navigationActions.updateBoardNameSuccess(response.data));
  } catch (error) {
    yield put(navigationActions.updateBoardNameFailed(error));
    yield put(navigationActions.getCategoriesRequest());
  }
}

function* watchGetCategories() {
  yield takeLatest(navigationActions.getCategoriesRequest, getCategories);
}

function* watchCreateBoard() {
  yield takeLatest(navigationActions.createBoardRequest, createBoard);
}

function* watchRemoveBoard() {
  yield takeLatest(navigationActions.removeBoardRequest, removeBoard);
}

function* watchUpdateBoardName() {
  yield takeLatest(navigationActions.updateBoardNameRequest, updateBoardName);
}

export default function* rootSaga() {
  yield all([
    watchGetCategories(),
    watchCreateBoard(),
    watchRemoveBoard(),
    watchUpdateBoardName(),
  ]);
}
