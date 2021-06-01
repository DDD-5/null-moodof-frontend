import React from 'react';
import { css } from '@emotion/react';

import WrappedIcon from '../WrappedIcon';
import HeaderFrame from '../HeaderFrame';

import { Column, Spacing, Share } from '../../../../assets/icons/16';

const BoardHeader = () => (
  <HeaderFrame
    title="카테고리"
    rightBlock={(
      <>
        <WrappedIcon css={wrappedIconStyle} Icon={Column} />
        <WrappedIcon css={wrappedIconStyle} Icon={Spacing} />
        <WrappedIcon css={wrappedIconStyle} Icon={Share} />
      </>
    )}
  />
);

const wrappedIconStyle = css({
  marginRight: 8,
  '&:last-child': {
    marginRight: 0,
  },
});

export default BoardHeader;
