import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';

import { CategoryMenu, BoardMenu } from './NavigationMenu';
import {
  SortMenu as PhotoStorageSortMenu, TagFilterMenu as PhotoStorageTagFilterMenu,
} from './HeaderMenu/PhotoStorage';

import { action as appActions } from '../../store/app/slices';
import { MENU_TYPE } from '../../constants';

const appMenuWrapper = css({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 20,
});

const appMenuStyle = (clientX, clientY, innerWidth, innerHeight) => {
  const halfWidth = innerWidth / 2;
  const halfHeight = innerHeight / 2;

  return css({
    position: 'absolute',
    top: halfHeight > clientY ? clientY : 'auto',
    left: halfWidth > clientX ? clientX : 'auto',
    bottom: halfHeight < clientY ? innerHeight - clientY : 'auto',
    right: halfWidth < clientX ? innerWidth - clientX : 'auto',
  });
};

const MENU_COMPONENTS = {
  [MENU_TYPE.NAVIGATION.CATEGORY]: CategoryMenu,
  [MENU_TYPE.NAVIGATION.BOARD]: BoardMenu,
  [MENU_TYPE.HEADER.PHOTO_STORAGE.SORT]: PhotoStorageSortMenu,
  [MENU_TYPE.HEADER.PHOTO_STORAGE.TAG_FILTER]: PhotoStorageTagFilterMenu,
};

const AppMenu = (props) => {
  const dispatch = useDispatch();
  const { menuType, menuProps } = props;
  const SpecificMenu = MENU_COMPONENTS[menuType];

  const handleClickClose = () => {
    dispatch(appActions.closeMenu());
  };

  return (
    <div css={appMenuWrapper} onClick={handleClickClose}>
      <div
        css={appMenuStyle(
          menuProps.clientX, menuProps.clientY, window.innerWidth, window.innerHeight,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <SpecificMenu {...menuProps} />
      </div>
    </div>
  );
};

export default AppMenu;
