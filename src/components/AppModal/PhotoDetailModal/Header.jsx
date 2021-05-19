import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import {
  ChevronLeft, Tag, Save, TrashCan,
} from '../../../assets/icons/24';
import { action as appActions } from '../../../store/app/slices';
import { MODAL_TYPE } from '../../../constants';

const headerStyle = css({
  position: 'absolute',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 56,
  padding: '0 20px 0 20px',
});

const closeStyle = css({
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
  color: 'white',
  cursor: 'pointer',
});

const titleStyle = css({
  color: 'white',
  fontSize: 14,
});

const rightBlockStyle = css({
  '& svg': {
    cursor: 'pointer',
    marginRight: 25,
    '&:last-of-type': {
      marginRight: 0,
    },
  },
});

const PhotoDetailModal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(appActions.closeModal({
      modalType: MODAL_TYPE.PHOTO_DETAIL_MODAL,
    }));
  };

  return (
    <header css={headerStyle} onClick={(e) => e.stopPropagation()}>
      <div css={closeStyle} onClick={handleCloseModal}>
        <ChevronLeft css={{ marginRight: 2 }} />
        <span>나가기</span>
      </div>
      <div css={titleStyle}>
        <span>카테고리 / 보드</span>
      </div>
      <div css={rightBlockStyle}>
        <Tag color="white" />
        <Save color="white" />
        <TrashCan color="white" />
      </div>
    </header>
  );
};

export default PhotoDetailModal;
