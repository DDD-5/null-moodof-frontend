import React from 'react';
import { css } from '@emotion/react';

const wrappedIconStyle = css({
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

const WrappedIcon = ({ Icon, color, ...args }) => (
  <div css={wrappedIconStyle} {...args}>
    <Icon color={color} />
  </div>
);

export default WrappedIcon;
