import React from 'react';

const Photo = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M4 10C4.55228 10 5 9.55228 5 9C5 8.44772 4.55228 8 4 8C3.44772 8 3 8.44772 3 9C3 9.55228 3.44772 10 4 10Z" stroke={color || '#21272A'} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12.125L8.53846 9L3 14" stroke={color || '#21272A'} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.3913 6H1V14H12V11.6107" stroke={color || '#21272A'} strokeLinecap="round" />
    <path d="M15 3.94787L3.71579 2L3 5.99177H11.9684V11.7257L13.5474 12L15 3.94787Z" stroke={color || '#21272A'} strokeLinecap="round" />
  </svg>
);

export default Photo;
