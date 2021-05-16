import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { Move, Save, TrashCan } from '../../../assets/icons/24';
import { action as appActions } from '../../../store/app/slices';
import { MODAL_TYPE } from '../../../constants';

const countTextStyle = css({
  fontSize: 14,
  marginRight: 26,
});

const checkInputStyle = css({
  width: 16,
  height: 16,
  marginRight: 24,
});

const iconBlockStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 48,
  height: 48,
  marginRight: 8,
  cursor: 'pointer',
  '&:last-child': {
    marginRight: 0,
  },
});

const WrappedIcon = ({ Icon, onClick }) => (
  <div css={iconBlockStyle}>
    <Icon onClick={onClick} />
  </div>
);

const Default = () => {
  const dispatch = useDispatch();

  const handleClickGoTrash = () => {
    dispatch(appActions.openModal({
      modalType: MODAL_TYPE.GO_TRASH_MODAL,
    }));
  };

  return (
    <>
      <span css={countTextStyle}>N개 이미지가 선택됨</span>
      <input type="checkbox" css={checkInputStyle} />
      <WrappedIcon Icon={Move} />
      <WrappedIcon Icon={Save} />
      <WrappedIcon Icon={TrashCan} onClick={handleClickGoTrash} />
    </>
  );
};

export default Default;
