import React from 'react';
import { css } from '@emotion/react';
import { Plus, Minus } from '../../assets/icons/12';

const RangeSlider = ({
  css: style,
  width = 60,
  min,
  max,
  step,
  value,
  handleMouseUp = () => {},
  ...args
}) => (
  <div css={[rangeSliderWrapperStyle, style]} {...args}>
    <Minus />
    <input
      css={rangeSliderStyle(width)}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      defaultValue={value}
      onMouseUp={handleMouseUp}
    />
    <Plus />
  </div>
);

const rangeSliderWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  '& input': {
    margin: '0 4px',
  },
});

const rangeSliderStyle = (width) => css({
  appearance: 'none',
  width,
  height: 2,
  backgroundColor: '#DDE1E6',
  '&::-webkit-slider-thumb ': {
    appearance: 'none',
    width: 12,
    height: 12,
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    borderRadius: '100%',
    cursor: 'pointer',
  },
});

export default RangeSlider;
