import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultMode from './DefaultMode';
import EditMode from './EditMode';
import WrappedIcon from '../WrappedIcon';
import HeaderFrame from '../HeaderFrame';
import { RangeSlider } from '../..';

import { action as photoStorageActions } from '../../../store/photoStorage/slices';
import { SquareOn, SquareOff } from '../../../assets/icons/16';

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
    <HeaderFrame
      title="이미지 보관함"
      leftBlock={(
        <>
          <WrappedIcon Icon={isSquareOn ? SquareOn : SquareOff} color="#A2A9B0" onClick={handleClickSquareToggle} />
          <RangeSlider
            css={{ marginLeft: 4 }}
            min="2"
            max="8"
            step="2"
            handleMouseUp={handleMouseUpRangeSlider}
          />
        </>
      )}
      rightBlock={isEditMode
        ? <EditMode />
        : <DefaultMode />}
    />
  );
};

export default memo(PhotoStorageHeader);
