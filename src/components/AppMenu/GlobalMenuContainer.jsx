import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import AppMenu from '.';

const GlobalMenuContainer = () => {
  const { menu } = useSelector((state) => state.app);

  return (
    !!Object.keys(menu).length && (
      <AppMenu
        menuType={menu.menuType}
        menuProps={menu.menuProps}
      />
    )
  );
};

export default memo(GlobalMenuContainer);
