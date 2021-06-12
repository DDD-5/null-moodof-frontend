import React from 'react';
import { css } from '@emotion/react';

const MenuFrame = ({
  width,
  height,
  maxHeight,
  css: style,
  children,
  ...args
}) => (
  <div css={[menuStyle(width, height, maxHeight), style]} {...args}>
    {children}
  </div>
);

const menuStyle = (width, height, maxHeight) => css({
  width,
  height,
  maxHeight,
  border: '0.5px solid rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(245, 245, 245, 0.7)',
  backdropFilter: 'blur(40px)',
  borderRadius: 4,
  userSelect: 'none',
});

export default MenuFrame;
