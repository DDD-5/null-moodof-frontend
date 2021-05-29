import React, { memo } from 'react';

const ChevronLeft = ({ color, ...args }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M18 36L30 24L18 12" stroke={color || 'white'} strokeWidth="3" />
  </svg>
);

export default memo(ChevronLeft);
