import React from 'react';
import { css } from '@emotion/react';
import PhotoStorageHeader from './PhotoStorageHeader';
import BoardHeader from './BoardHeader';
import TrashStorageHeader from './TrashStorageHeader';
import { HEADER_TYPE } from '../../constants';

const headerStyle = css({
  width: 'calc(100% - 240px)',
  height: 48,
  position: 'fixed',
  marginLeft: 240,
  padding: '0 16px 0 20px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
});

const Header = ({ headerType }) => (
  <header css={headerStyle}>
    {headerType === HEADER_TYPE.PHOTO_STORAGE && <PhotoStorageHeader />}
    {headerType === HEADER_TYPE.BOARD && <BoardHeader />}
    {headerType === HEADER_TYPE.PHOTO_STORAGE && <TrashStorageHeader />}
  </header>
);

export default Header;
