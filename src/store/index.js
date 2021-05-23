import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createReduxSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import app from './app/slices';
import auth from './auth/slices';
import photoStorage from './photoStorage/slices';
import trashStorage from './trashStorage/slices';
import userSaga from './auth/sagas';

const rootReducer = combineReducers({
  app,
  auth,
  photoStorage,
  trashStorage,
});

function* rootSaga() {
  yield all([
    userSaga(),
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
