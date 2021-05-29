import React, { memo } from 'react';

const Move = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M6 9.25L12 9.25" stroke={color || '#21272A'} />
    <path d="M9.6 6.75L12 9.25L9.6 11.75" stroke={color || '#21272A'} />
    <path d="M14.25 3H4.25V15.5H14.25V3Z" stroke={color || '#21272A'} />
    <path d="M3.89286 13H1.75V0.5H11.75V2.84375" stroke={color || '#21272A'} />
  </svg>
);

export default memo(Move);
