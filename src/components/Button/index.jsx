import React from 'react';
import { css } from '@emotion/react';

const buttonStyle = (colorType) => {
  let bgColor = '';
  let bgHoverColor = '';

  switch (colorType) {
    case 'main': {
      bgColor = 'rgba(33, 39, 42, 1)';
      bgHoverColor = 'rgba(18, 22, 25, 1)';
      break;
    }
    case 'sub': {
      bgColor = 'rgba(0, 0, 0, 0.4)';
      bgHoverColor = 'rgba(0, 0, 0, 0.6)';
      break;
    }
    default: {
      bgColor = 'rgba(33, 39, 42, 1)';
      bgHoverColor = 'rgba(18, 22, 25, 1)';
      break;
    }
  }

  return css({
    backgroundColor: bgColor,
    color: 'rgba(255, 255, 255, 0.6)',
    border: 'none',
    cursor: 'pointer',
    borderRadius: 4,
    fontSize: 14,
    '&:hover': {
      backgroundColor: bgHoverColor,
      color: 'white',
    },
  });
};

const Button = ({
  colorType = 'main',
  customStyle,
  onClick,
  children,
}) => (
  <button
    type="button"
    css={[buttonStyle(colorType), customStyle]}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
