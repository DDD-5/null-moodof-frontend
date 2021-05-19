import { createSlice } from '@reduxjs/toolkit';

const trashStorageSlice = createSlice({
  name: 'trashStorage',
  initialState: {
    checkedList: [],
  },
  reducers: {
    checkPhoto(state, action) {
      const { photoId } = action.payload;

      state.checkedList.push(photoId);
    },
    unCheckPhoto(state, action) {
      const { photoId } = action.payload;
      const checkIndex = state.checkedList.findIndex((i) => i === photoId);

      state.checkedList.splice(checkIndex, 1);
    },
    clearCheckedList(state) {
      state.checkedList = [];
    },
  },
});

const { actions, reducer } = trashStorageSlice;

export const action = { ...actions };
export default reducer;
