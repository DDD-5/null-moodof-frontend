import React from 'react';
import { css } from '@emotion/react';
import {
  Logo, Fold, Storage, TrashCan,
} from '../../assets/icons';
import Project from './Project';

const navigationStyle = css({
  width: 280,
  height: '100vh',
  position: 'fixed',
  top: 0,
  backgroundColor: '#FAFAFA',
  borderRight: '1px solid rgba(0, 0, 0, 0.1)',
  overflow: 'scroll',
});

const titleStyle = css({
  height: 56,
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  padding: '0 16px 0 19px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const menuStyle = css({
  margin: '24px 16px 24px 16px',
});

const storageStyle = css({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  margin: '0 8px 7.5px 8px',
  fontSize: 14,
  cursor: 'pointer',
});

const trashCanStyle = css({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  margin: '7.5px 8px 0 8px',
  fontSize: 14,
  cursor: 'pointer',
});

const Navigation = () => (
  <nav css={navigationStyle}>
    <div css={titleStyle}>
      <Logo />
      <Fold style={{ cursor: 'pointer' }} />
    </div>

    <div css={menuStyle}>
      <div css={storageStyle}>
        <Storage style={{ marginRight: '6px' }} />
        <span>이미지 보관함</span>
      </div>
      <div>
        <Project />
        <Project />
      </div>
      <div css={trashCanStyle}>
        <TrashCan style={{ marginRight: '6px' }} />
        <span>휴지통</span>
      </div>
    </div>
  </nav>
);

export default Navigation;
