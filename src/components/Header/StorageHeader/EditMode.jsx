import React from 'react';
import { css } from '@emotion/react';
import { Move, Save, TrashCan } from '../../../assets/icons';

const countTextStyle = css({
  fontSize: 14,
  marginRight: 26,
});

const checkInputStyle = css({
  width: 16,
  height: 16,
  marginRight: 24,
});

const iconBlockStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 48,
  height: 48,
  marginRight: 8,
  cursor: 'pointer',
  '&:last-child': {
    marginRight: 0,
  },
});

const WrappedIcon = ({ Icon }) => (
  <div css={iconBlockStyle}>
    <Icon />
  </div>
);

const Default = () => (
  <>
    <span css={countTextStyle}>N개 이미지가 선택됨</span>
    <input type="checkbox" css={checkInputStyle} />
    <WrappedIcon Icon={Move} />
    <WrappedIcon Icon={Save} />
    <WrappedIcon Icon={TrashCan} />
  </>
);

export default Default;
