import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import app from './app/slices';

const rootReducer = combineReducers({ app });

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
  });

  return store;
};

export default configureAppStore;
