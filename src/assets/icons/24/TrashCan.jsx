import React from 'react';

const TrashCan = ({ color, ...args }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M2 6H4.22222H22" stroke={color || 'black'} strokeWidth="1.5" />
    <path d="M10 10.5L10 11.1667L10 16.5" stroke={color || 'black'} strokeWidth="1.5" />
    <path d="M14 10.5L14 11.1667L14 16.5" stroke={color || 'black'} strokeWidth="1.5" />
    <path d="M16.5161 22H7.48387C6.11097 22 5 20.8558 5 19.4419V6.4186H6.35484V19.4419C6.35484 20.0837 6.86065 20.6047 7.48387 20.6047H16.5161C17.1394 20.6047 17.6452 20.0837 17.6452 19.4419V6.4186H19V19.4419C19 20.8558 17.889 22 16.5161 22ZM16.2903 6.4186H14.9355V3.39535H9.06452V6.4186H7.70968V2H16.2903V6.4186Z" fill={color || 'black'} />
  </svg>
);

export default TrashCan;
