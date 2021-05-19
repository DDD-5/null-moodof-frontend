import React from 'react';
import { css } from '@emotion/react';
import PhotoStorageHeader from './PhotoStorageHeader';
import { HEADER_TYPE } from '../../constants';

const headerStyle = css({
  width: 'calc(100% - 280px)',
  height: 56,
  position: 'fixed',
  marginLeft: 280,
  padding: '0 16px 0 18px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
});

const Header = ({ headerType }) => (
  <header css={headerStyle}>
    {headerType === HEADER_TYPE.STORAGE && <PhotoStorageHeader />}
    {headerType === HEADER_TYPE.BOARD && <PhotoStorageHeader />}
    {headerType === HEADER_TYPE.TRASH && <PhotoStorageHeader />}
  </header>
);

export default Header;
