import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
  },
  reducers: {
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
    },
    logout(state) {
      state.token = '';
      window.localStorage.removeItem('token');
      window.location.reload();
    },
  },
});

const { actions, reducer } = userSlice;

export const action = { ...actions };
export default reducer;
