import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    categories: [],
    createBoard: {},
    loading: {
      categories: false,
      createBoard: false,
    },
    error: {
      categories: {},
      createBoard: {},
    },
  },
  reducers: {
    // 카테고리 전체 가져오기
    getCategoriesRequest(state) {
      state.loading.categories = true;
    },
    getCategoriesSuccess(state, action) {
      state.loading.categories = false;
      state.categories = action.payload;
    },
    getCategoriesFailed(state, action) {
      state.loading.categories = false;
      state.error = action.payload;
    },
    // 보드 생성
    createBoardRequest(state) {
      state.loading.createBoard = true;
    },
    createBoardSuccess(state, action) {
      state.loading.createBoard = false;
      state.createBoard = action.payload;

      const categoryIndex = state.categories.findIndex(
        (c) => c.id === action.payload.categoryId,
      );
      state.categories[categoryIndex].boardList.push(action.payload);
    },
    createBoardFailed(state, action) {
      state.loading.createBoard = false;
      state.error.createBoard = action.payload;
    },
  },
});

const { actions, reducer } = navigationSlice;

export const action = { ...actions };
export default reducer;
