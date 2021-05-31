import { createSlice } from '@reduxjs/toolkit';

const photoStorageSlice = createSlice({
  name: 'photoStorage',
  initialState: {
    isEditMode: false,
    isSquareOn: false,
    columnCount: 6,
    spacingSize: 6,
    isDesc: true,
    page: 0,
    size: 48,
    storagePhotos: {},
    storagePhotoDetail: {},
    checkedList: [],
    loading: {
      storagePhotos: false,
      storagePhotoDetail: false,
    },
    error: {
      storagePhotos: {},
      storagePhotoDetail: {},
    },
  },
  reducers: {
    // 체크 리스트 변경
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
    checkAllPhotos(state) {
      state.checkedList = state.storagePhotos.storagePhotos.map((photo) => photo.id);
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
    // 사진 상세 조회
    getStoragePhotoDetailRequest(state) {
      state.storagePhotoDetail = {};
      state.loading.storagePhotoDetail = true;
    },
    getStoragePhotoDetailSuccess(state, action) {
      state.loading.storagePhotoDetail = false;
      state.storagePhotoDetail = action.payload;
    },
    getStoragePhotoDetailFailed(state, action) {
      state.loading.storagePhotoDetail = false;
      state.error.storagePhotoDetail = action.payload;
    },
    // 페이지 변경
    setPage(state, action) {
      state.page = action.payload;
      state.checkedList = [];
      state.isEditMode = false;
    },
    // 스퀘어 토글
    toggleIsSquare(state) {
      state.isSquareOn = !state.isSquareOn;
    },
    // 컬럼 수 변경
    setColumnCount(state, action) {
      state.columnCount = action.payload;
    },
    // 정렬 토글
    toggleIsDesc(state) {
      state.isDesc = !state.isDesc;
    },
  },
});

const { actions, reducer } = photoStorageSlice;

export const action = { ...actions };
export default reducer;
