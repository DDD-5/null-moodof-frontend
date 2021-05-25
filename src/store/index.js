import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createReduxSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import app from './app/slices';
import auth from './auth/slices';
import navigation from './navigation/slices';
import photoStorage from './photoStorage/slices';
import trashStorage from './trashStorage/slices';

import appSaga from './app/sagas';
import authSaga from './auth/sagas';
import navigationSaga from './navigation/sagas';
import photoStorageSaga from './photoStorage/sagas';

const rootReducer = combineReducers({
  app,
  auth,
  navigation,
  photoStorage,
  trashStorage,
});

function* rootSaga() {
  yield all([
    appSaga(),
    authSaga(),
    navigationSaga(),
    photoStorageSaga(),
  ]);
}

const configureAppStore = () => {
  const sagaMiddleware = createReduxSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      sagaMiddleware,
    ],
  });
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureAppStore;
