import React, { memo } from 'react';

const ChevronLeft = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M10.5 13L5.5 8L10.5 3" stroke={color || '#21272A'} />
  </svg>
);

export default memo(ChevronLeft);
