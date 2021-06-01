import React from 'react';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';

import PhotoStorageHeader from './PhotoStorageHeader';
import BoardHeader from './BoardHeader';
import TrashStorageHeader from './TrashStorageHeader';

import { APP, HEADER_TYPE } from '../../../constants';

const Header = ({ headerType }) => {
  const { isFolded } = useSelector((state) => state.app);

  return (
    <header css={headerStyle(isFolded)}>
      {headerType === HEADER_TYPE.PHOTO_STORAGE && <PhotoStorageHeader />}
      {headerType === HEADER_TYPE.BOARD && <BoardHeader />}
      {headerType === HEADER_TYPE.TRASH_STORAGE && <TrashStorageHeader />}
    </header>
  );
};

const headerStyle = (isFolded) => css({
  width: isFolded ? '100%' : `calc(100% - ${APP.navigationWidth}px)`,
  height: APP.headerHeight,
  position: 'absolute',
  marginLeft: isFolded ? 0 : APP.navigationWidth,
  padding: '0 16px 0 20px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  userSelect: 'none',
  zIndex: 10,
});

export default Header;
