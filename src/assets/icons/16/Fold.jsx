import React, { memo } from 'react';

const Fold = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M1 2L1 14" stroke={color || '#21272A'} />
    <path d="M15 8L5 8" stroke={color || '#21272A'} />
    <path d="M10 13L5 8L10 3" stroke={color || '#21272A'} />
  </svg>
);

export default memo(Fold);
