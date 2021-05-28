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
