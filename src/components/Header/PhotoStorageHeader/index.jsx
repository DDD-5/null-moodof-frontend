import React from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultMode from './DefaultMode';
import EditMode from './EditMode';
import WrappedIcon from '../WrappedIcon';
import { RangeSlider } from '../..';

import { action as photoStorageActions } from '../../../store/photoStorage/slices';
import { SquareOn, SquareOff } from '../../../assets/icons/16';

const headerStyle = css({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const leftBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
});

const titleStyle = css({
  fontSize: 14,
  fontWeight: 500,
  marginRight: 4,
});

const rightBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
});

const PhotoStorageHeader = () => {
  const dispatch = useDispatch();
  const { isEditMode, isSquareOn, columnCount } = useSelector((state) => state.photoStorage);

  const handleClickSquareToggle = () => {
    dispatch(photoStorageActions.toggleIsSquare());
  };

  const handleMouseUpRangeSlider = (e) => {
    dispatch(photoStorageActions.setColumnCount(Number(e.target.value)));
  };

  return (
    <header css={headerStyle}>
      <div css={leftBlockStyle}>
        <h1 css={titleStyle}>이미지 보관함</h1>
        <WrappedIcon Icon={isSquareOn ? SquareOn : SquareOff} color="#A2A9B0" onClick={handleClickSquareToggle} />
        <RangeSlider
          css={{ marginLeft: 4 }}
          min="2"
          max="8"
          step="2"
          handleMouseUp={handleMouseUpRangeSlider}
        />
      </div>
      <div css={rightBlockStyle}>
        {isEditMode
          ? <EditMode />
          : <DefaultMode />}
      </div>
    </header>
  );
};

export default PhotoStorageHeader;
