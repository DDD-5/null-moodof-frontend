import React from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import WrappedIcon from '../WrappedIcon';

import { Move, Download, TrashCan } from '../../../assets/icons/16';
import { action as appActions } from '../../../store/app/slices';
import { MODAL_TYPE } from '../../../constants';

const countTextStyle = css({
  fontSize: 14,
  marginRight: 12,
  color: 'rgba(0, 0, 0, 0.4)',
});

const checkInputStyle = css({
  width: 16,
  height: 16,
  marginRight: 16,
});

const Default = () => {
  const dispatch = useDispatch();
  const { checkedList } = useSelector((state) => state.photoStorage);

  const handleClickGoTrash = () => {
    dispatch(appActions.openModal({
      modalType: MODAL_TYPE.GO_TRASH,
      modalProps: {
        checkedList,
      },
    }));
  };

  return (
    <>
      <span css={countTextStyle}>{checkedList.length}개 이미지가 선택됨</span>
      <input type="checkbox" css={checkInputStyle} />
      <WrappedIcon Icon={Move} />
      <WrappedIcon Icon={Download} />
      <WrappedIcon Icon={TrashCan} onClick={handleClickGoTrash} />
    </>
  );
};

export default Default;
