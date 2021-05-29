import React, { memo } from 'react';

const Download = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M15.5 9.25V12.5833C15.5 13.5 14.75 14.25 13.8333 14.25H2.16667C1.25 14.25 0.5 13.5 0.5 12.5833V9.25" stroke={color || '#21272A'} />
    <path d="M4.25 7.375L8 11.125L11.75 7.375" stroke={color || '#21272A'} />
    <path d="M8 11.125V1.125" stroke={color || '#21272A'} />
  </svg>
);

export default memo(Download);
