import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    loading: {
      user: false,
    },
    error: {
      user: {},
    },
  },
  reducers: {
    // logout
    logout() {
      window.localStorage.removeItem('token');
      window.location.reload();
    },
    // getUser
    getUserRequest(state) {
      state.loading.user = true;
    },
    getUserSuccess(state, action) {
      state.loading.user = false;
      state.user = action.payload;
    },
    getUserFailed(state, action) {
      state.loading.user = false;
      state.error.user = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const action = { ...actions };
export default reducer;
