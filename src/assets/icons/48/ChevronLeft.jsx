import React, { memo } from 'react';

const ChevronLeft = ({ color, ...args }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M30 12L18 24L30 36" stroke={color || 'white'} strokeWidth="3" />
  </svg>
);

export default memo(ChevronLeft);
