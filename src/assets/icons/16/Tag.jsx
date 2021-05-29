import React, { memo } from 'react';

const Tag = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M15.0424 9.43034L9.43351 15.0421C8.82334 15.6526 7.82986 15.6526 7.21969 15.0421L0.5 8.32677V0.5H8.32269L15.0424 7.22319C15.6525 7.83368 15.6525 8.81985 15.0424 9.43034Z" stroke={color || 'white'} />
    <path d="M4.875 5.5C5.22018 5.5 5.5 5.22018 5.5 4.875C5.5 4.52982 5.22018 4.25 4.875 4.25C4.52982 4.25 4.25 4.52982 4.25 4.875C4.25 5.22018 4.52982 5.5 4.875 5.5Z" fill={color || 'white'} />
  </svg>
);

export default memo(Tag);
