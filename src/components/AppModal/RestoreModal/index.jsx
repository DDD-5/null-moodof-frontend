import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { Button } from '../..';
import { action as appActions } from '../../../store/app/slices';
import { MODAL_TYPE } from '../../../constants';

const restoreModalStyle = css({
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
});

const RestoreModal = ({ checkedList }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(appActions.closeModal({
      modalType: MODAL_TYPE.RESTORE,
    }));
  };

  const handleClickRestore = () => {
    // TODO checkedList를 가지고 Restore로 보내는 API 호출
  };

  return (
    <div css={restoreModalStyle} onClick={handleCloseModal}>
      <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <div css={textBlock}>
          <span css={titleStyle}>이미지를 복구하시겠습니까?</span>
          <span css={subTitleStyle}>{checkedList.length}개의 이미지가 이미지 보관함으로 복구됩니다.</span>
        </div>
        <div css={buttonBlock}>
          <Button
            onClick={handleCloseModal}
            colorType="sub"
            customStyle={{ width: 138, height: 32 }}
          >
            취소
          </Button>
          <Button
            onClick={handleClickRestore}
            colorType="main"
            customStyle={{ width: 138, height: 32 }}
          >
            복구
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestoreModal;
