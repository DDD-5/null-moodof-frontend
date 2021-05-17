import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import app from './app/slices';
import photoStorage from './photoStorage/slices';

const rootReducer = combineReducers({ app, photoStorage });

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
  });

  return store;
};

export default configureAppStore;
