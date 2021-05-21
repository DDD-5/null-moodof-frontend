import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    modals: [],
    menu: {},
  },
  reducers: {
    // 모달
    openModal(state, action) {
      const { modalType, modalProps } = action.payload;

      state.modals.push({
        modalType,
        modalProps,
      });
    },
    closeModal(state, action) {
      const { modalType } = action.payload;
      const modalIndex = state.modals.findIndex((m) => m.modalType === modalType);

      state.modals.splice(modalIndex, 1);
    },
    // 메뉴
    openMenu(state, action) {
      const { menuType, menuProps } = action.payload;

      state.menu.menuType = menuType;
      state.menu.menuProps = menuProps;
    },
    closeMenu(state) {
      state.menu = {};
    },
  },
});

const { actions, reducer } = appSlice;

export const action = { ...actions };
export default reducer;
