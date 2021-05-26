import React from 'react';
import { css } from '@emotion/react';
import { Column, Spacing, Share } from '../../../assets/icons/16';

const headerStyle = css({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const headerTitleStyle = css({
  fontSize: 14,
  fontWeight: 500,
});

const rightBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
});

const iconBlockStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  marginRight: 8,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  '&:last-child': {
    marginRight: 0,
  },
});

const WrappedIcon = ({ Icon, handleClick }) => (
  <div css={iconBlockStyle} onClick={handleClick}>
    <Icon />
  </div>
);

const BoardHeader = () => (
  <header css={headerStyle}>
    <div>
      <h2 css={headerTitleStyle}>보드</h2>
    </div>
    <div css={rightBlockStyle}>
      <WrappedIcon Icon={Column} />
      <WrappedIcon Icon={Spacing} />
      <WrappedIcon Icon={Share} />
    </div>
  </header>
);

export default BoardHeader;
