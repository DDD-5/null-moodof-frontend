import { createSlice } from '@reduxjs/toolkit';

const photoStorageSlice = createSlice({
  name: 'photoStorage',
  initialState: {
    isEditMode: false,
    columnCount: 6,
    spacingSize: 12,
    isDesc: true,
    page: 0,
    size: 48,
    storagePhotos: {},
    checkedList: [],
    loading: {
      storagePhotos: false,
    },
    error: {
      storagePhotos: {},
    },
  },
  reducers: {
    checkPhoto(state, action) {
      const { photoId } = action.payload;

      state.checkedList.push(photoId);
      state.isEditMode = true;
    },
    unCheckPhoto(state, action) {
      const { photoId } = action.payload;
      const checkIndex = state.checkedList.findIndex((i) => i === photoId);

      state.checkedList.splice(checkIndex, 1);
      if (!state.checkedList.length) {
        state.isEditMode = false;
      }
    },
    clearCheckedList(state) {
      state.isEditMode = false;
      state.checkedList = [];
    },
    // 전체 사진 조회
    getStoragePhotosRequest(state) {
      state.loading.storagePhotos = true;
    },
    getStoragePhotosSuccess(state, action) {
      state.loading.storagePhotos = false;
      state.storagePhotos = action.payload;
    },
    getStoragePhotosFailed(state, action) {
      state.loading.storagePhotos = false;
      state.error.storagePhotos = action.payload;
    },
  },
});

const { actions, reducer } = photoStorageSlice;

export const action = { ...actions };
export default reducer;
