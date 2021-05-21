import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';

import { CategoryMenu, BoardMenu } from './NavigationMenu';

import { action as appActions } from '../../store/app/slices';
import { MENU_TYPE } from '../../constants';

const appMenuWrapper = css({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '100%',
});

const appMenuStyle = (pageX, pageY) => css({
  position: 'absolute',
  top: pageY,
  left: pageX,
});

const MENU_COMPONENTS = {
  [MENU_TYPE.NAVIGATION.CATEGORY]: CategoryMenu,
  [MENU_TYPE.NAVIGATION.BOARD]: BoardMenu,
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
        css={appMenuStyle(menuProps.pageX, menuProps.pageY)}
        onClick={(e) => e.stopPropagation()}
      >
        <SpecificMenu {...menuProps} />
      </div>
    </div>
  );
};

export default AppMenu;
