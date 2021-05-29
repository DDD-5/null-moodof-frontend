import React from 'react';
import { css } from '@emotion/react';

const HeaderFrame = ({ title, leftBlock, rightBlock }) => (
  <div css={headerStyle}>
    <div css={leftBlockStyle}>
      <h1 css={titleStyle}>{title}</h1>
      {leftBlock}
    </div>
    <div css={rightBlockStyle}>
      {rightBlock}
    </div>
  </div>
);

const headerStyle = css({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const leftBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
});

const titleStyle = css({
  fontSize: 14,
  fontWeight: 500,
  marginRight: 4,
});

const rightBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
});

export default HeaderFrame;
