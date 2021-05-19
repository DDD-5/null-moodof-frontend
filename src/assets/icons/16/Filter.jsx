import React from 'react';

const Filter = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M1.125 1.125L6.625 8.13241V13.3935L9.375 14.875V8.13241L14.875 1.125H1.125Z" stroke={color || '#21272A'} />
  </svg>
);

export default Filter;
