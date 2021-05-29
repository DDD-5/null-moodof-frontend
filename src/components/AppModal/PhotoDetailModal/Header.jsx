import React, { memo } from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import {
  ChevronLeft, Tag, Download, TrashCan,
} from '../../../assets/icons/16';
import { action as appActions } from '../../../store/app/slices';
import { MODAL_TYPE } from '../../../constants';

const WrappedIcon = ({ Icon, handleClick, color }) => (
  <div css={iconBlockStyle} onClick={handleClick}>
    <Icon color={color} />
  </div>
);

const PhotoDetailModal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(appActions.closeModal({
      modalType: MODAL_TYPE.PHOTO_DETAIL,
    }));
  };

  return (
    <header css={headerStyle} onClick={(e) => e.stopPropagation()}>
      <div css={closeStyle} onClick={handleCloseModal}>
        <ChevronLeft color="white" css={{ marginRight: 2 }} />
        <span>나가기</span>
      </div>

      <div css={rightBlockStyle}>
        <WrappedIcon Icon={Tag} color="white" />
        <WrappedIcon Icon={Download} color="white" />
        <WrappedIcon Icon={TrashCan} color="white" />
      </div>
    </header>
  );
};

const headerStyle = css({
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 56,
  padding: '0 20px 0 20px',
});

const closeStyle = css({
  width: 65,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
  color: 'white',
  padding: '0 4px',
  borderRadius: 4,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(33, 33, 33, 0.8)',
  },
});

const rightBlockStyle = css({
  display: 'flex',
});

const iconBlockStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  marginRight: 8,
  borderRadius: 4,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(33, 33, 33, 0.8)',
  },
  '&:last-child': {
    marginRight: 0,
  },
});

export default memo(PhotoDetailModal);
