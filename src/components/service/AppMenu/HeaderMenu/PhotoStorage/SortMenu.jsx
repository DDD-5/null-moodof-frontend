import React from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import MenuFrame from './MenuFrame';

import { action as photoStorageActions } from '../../../../../store/photoStorage/slices';
import { Check } from '../../../../../assets/icons/16';

const SortMenu = () => {
  const {
    isDesc,
  } = useSelector((state) => state.photoStorage);
  const dispatch = useDispatch();

  const handleClickToggleDesc = () => {
    dispatch(photoStorageActions.toggleIsDesc());
  };

  const isNewOn = isDesc;
  const isOldOn = !isDesc;

  return (
    <MenuFrame width={240} height={140}>
      <div css={titleWrapperStyle}>
        <span>정렬</span>
      </div>
      <div css={buttonWrapperStyle}>
        <div css={buttonStyle(isNewOn)} onClick={!isNewOn ? handleClickToggleDesc : () => {}}>
          <span>최신 순</span>
          {isNewOn && <Check />}
        </div>
        <div css={buttonStyle(isOldOn)} onClick={!isOldOn ? handleClickToggleDesc : () => {}}>
          <span>오래된 순</span>
          {isOldOn && <Check />}
        </div>
      </div>
    </MenuFrame>
  );
};

const titleWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  height: 40,
  padding: '0 16px',
  fontWeight: 500,
  fontSize: 14,
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
});

const buttonWrapperStyle = css({
  padding: 8,
});

const buttonStyle = (isActive) => css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 224,
  height: 40,
  borderRadius: 4,
  marginBottom: 2,
  padding: '0 12px 0 16px',
  fontSize: 14,
  cursor: 'pointer',
  backgroundColor: isActive ? 'rgba(0, 0, 0, 0.05)' : 'inherit',
  '&:hover': {
    backgroundColor: isActive ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.02)',
  },
  '&:last-child': {
    marginBottom: 0,
  },
});

export default SortMenu;
