import { createSlice } from '@reduxjs/toolkit';

const photoStorageSlice = createSlice({
  name: 'photoStorage',
  initialState: {
    isCheckReady: false,
    checkedList: [],
  },
  reducers: {
    checkPhoto(state, action) {
      const { photoId } = action.payload;

      state.checkedList.push(photoId);
      state.isCheckReady = true;
    },
    unCheckPhoto(state, action) {
      const { photoId } = action.payload;
      const checkIndex = state.checkedList.findIndex((i) => i === photoId);

      state.checkedList.splice(checkIndex, 1);
      if (!state.checkedList.length) {
        state.isCheckReady = false;
      }
    },
  },
});

const { actions, reducer } = photoStorageSlice;

export const action = { ...actions };
export default reducer;
