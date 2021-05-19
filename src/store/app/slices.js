import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    modal: [],
  },
  reducers: {
    openModal(state, action) {
      const { modalType, modalProps } = action.payload;

      state.modal.push({
        modalType,
        modalProps,
        open: true,
      });
    },
    closeModal(state, action) {
      const { modalType } = action.payload;
      const modalIndex = state.modal.findIndex((m) => m.modalType === modalType);

      state.modal.splice(modalIndex, 1);
    },
  },
});

const { actions, reducer } = appSlice;

export const action = { ...actions };
export default reducer;
