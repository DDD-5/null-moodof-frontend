import React from 'react';

const Tag = ({ ...args }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M21.34 14.16L14.17 21.33C13.39 22.11 12.12 22.11 11.34 21.33L2.75 12.75V2.75H12.75L21.34 11.34C22.12 12.12 22.12 13.38 21.34 14.16Z" stroke="#FAFAFA" strokeWidth="1.5" />
    <path d="M7.75 7.75H7.76" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Tag;
