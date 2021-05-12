import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    modal: {},
  },
  reducers: {
    openModal(state, action) {
      const { modalType, modalProps } = action.payload;
      state.modalType = modalType;
      state.modal[modalType] = {
        ...modalProps,
        open: true,
      };
    },
    closeModal(state, action) {
      const { modalType } = action.payload;
      state.modal[modalType] = { open: false };
    },
  },
});

const { actions, reducer } = appSlice;

export const action = { ...actions };
export default reducer;
