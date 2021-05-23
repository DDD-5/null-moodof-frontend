import { createSlice } from '@reduxjs/toolkit';

const getCategoryIndex = (state, categoryID) => state.categories.findIndex(
  (c) => c.id === categoryID,
);

const getBoardIndex = (
  state, categoryIndex, boardId,
) => state.categories[categoryIndex].boardList.findIndex(
  (b) => b.id === boardId,
);

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    categories: [],
    createBoard: {},
    removeBoard: {},
    updateBoardName: {},
    renameBoardInput: {
      isOpen: false,
      categoryId: '',
      boardId: '',
    },
    loading: {
      categories: false,
      createBoard: false,
      removeBoard: false,
      updateBoardName: false,
    },
    error: {
      categories: {},
      createBoard: {},
      removeBoard: {},
      updateBoardName: {},
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

      const categoryIndex = getCategoryIndex(state, action.payload.categoryId);
      state.categories[categoryIndex].boardList.push(action.payload);
    },
    createBoardFailed(state, action) {
      state.loading.createBoard = false;
      state.error.createBoard = action.payload;
    },
    // 보드 제거
    removeBoardRequest(state) {
      state.loading.removeBoard = true;
    },
    removeBoardSuccess(state, action) {
      state.loading.removeBoard = false;
      state.removeBoard = action.payload;

      const categoryIndex = getCategoryIndex(state, action.payload.categoryId);
      const boardIndex = getBoardIndex(state, categoryIndex, action.payload.boardId);
      state.categories[categoryIndex].boardList.splice(boardIndex, 1);
    },
    removeBoardFailed(state, action) {
      state.loading.removeBoard = false;
      state.error.removeBoard = action.payload;
    },
    // 보드 이름 변경 인풋 업데이트
    setRenameBoardInput(state, action) {
      const { isOpen, categoryId, boardId } = action.payload;
      state.renameBoardInput = {
        isOpen,
        categoryId,
        boardId,
      };
    },
    // 보드 이름 변경
    updateBoardNameRequest(state) {
      state.loading.updateBoardName = true;
    },
    updateBoardNameSuccess(state, action) {
      state.loading.updateBoardName = false;
      state.updateBoardName = action.payload;

      const categoryIndex = getCategoryIndex(state, action.payload.categoryId);
      const boardIndex = getBoardIndex(state, categoryIndex, action.payload.id);
      state.categories[categoryIndex].boardList[boardIndex].name = action.payload.name;
    },
    updateBoardNameFailed(state, action) {
      state.loading.updateBoardName = false;
      state.error.updateBoardName = action.payload;
    },
  },
});

const { actions, reducer } = navigationSlice;

export const action = { ...actions };
export default reducer;
