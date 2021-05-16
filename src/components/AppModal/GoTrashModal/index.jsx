import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { action as appActions } from '../../../store/app/slices';
import { MODAL_TYPE } from '../../../constants';

const goTrashModalStyle = css({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5);',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const modalContentStyle = css({
  backgroundColor: 'white',
  borderRadius: 4,
  width: 320,
  height: 170,
  border: '1px solid rgba(0, 0, 0, 0.1)',
});

const textBlock = css({
  paddingTop: 45,
  textAlign: 'center',
  height: 105,
});

const titleStyle = css({
  display: 'block',
  fontWeight: 500,
  fontSize: 14,
});

const subTitleStyle = css({
  display: 'block',
  fontSize: 12,
  marginTop: 8,
  color: 'rgba(0, 0, 0, 0.4)',
});

const buttonBlock = css({
  height: 65,
  display: 'flex',
  justifyContent: 'space-between',
  padding: 16,
  '& button': {
    width: 138,
    height: 32,
  },
});

const closeButtonStyle = css({
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  color: 'rgba(255, 255, 255, 0.6)',
  border: 'none',
  cursor: 'pointer',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
  },
});

const goTrashButtonStyle = css({
  backgroundColor: 'rgba(33, 39, 42, 1)',
  color: 'rgba(255, 255, 255, 0.6)',
  border: 'none',
  cursor: 'pointer',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: 'rgba(18, 22, 25, 1)',
    color: 'white',
  },
});

const GoTrashModal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(appActions.closeModal({
      modalType: MODAL_TYPE.GO_TRASH_MODAL,
    }));
  };

  const handleClickGoTrash = () => {};

  return (
    <div css={goTrashModalStyle} onClick={handleCloseModal}>
      <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <div css={textBlock}>
          <span css={titleStyle}>휴지통으로 이동하시겠습니까?</span>
          <span css={subTitleStyle}>선택한 이미지가 30일 후 완전히 삭제됩니다.</span>
        </div>
        <div css={buttonBlock}>
          <button type="button" css={closeButtonStyle} onClick={handleCloseModal}>취소</button>
          <button type="button" css={goTrashButtonStyle} onClick={handleClickGoTrash}>휴지통으로 이동</button>
        </div>
      </div>
    </div>
  );
};

export default GoTrashModal;
