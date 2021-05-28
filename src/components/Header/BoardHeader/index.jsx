import React from 'react';
import { css } from '@emotion/react';
import WrappedIcon from '../WrappedIcon';
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

const wrapIconStyle = css({
  marginRight: 8,
  '&:last-child': {
    marginRight: 0,
  },
});

const BoardHeader = () => (
  <header css={headerStyle}>
    <div>
      <h2 css={headerTitleStyle}>카테고리명</h2>
    </div>
    <div css={rightBlockStyle}>
      <WrappedIcon css={wrapIconStyle} Icon={Column} />
      <WrappedIcon css={wrapIconStyle} Icon={Spacing} />
      <WrappedIcon css={wrapIconStyle} Icon={Share} />
    </div>
  </header>
);

export default BoardHeader;
