import React from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import WrappedIcon from '../WrappedIcon';
import HeaderFrame from '../HeaderFrame';

import { TrashCan, Restore } from '../../../../assets/icons/16';
import { action as appActions } from '../../../../store/app/slices';
import { MODAL_TYPE } from '../../../../constants';

const Default = () => {
  const dispatch = useDispatch();
  const { checkedList } = useSelector((state) => state.trashStorage);

  const handleClickDelete = () => {
    if (checkedList.length) {
      dispatch(appActions.openModal({
        modalType: MODAL_TYPE.DELETE,
        modalProps: {
          checkedList,
        },
      }));
    }
  };

  const handleClickRestore = () => {
    if (checkedList.length) {
      dispatch(appActions.openModal({
        modalType: MODAL_TYPE.RESTORE,
        modalProps: {
          checkedList,
        },
      }));
    }
  };

  return (
    <HeaderFrame
      title="휴지통"
      rightBlock={(
        <>
          <span css={countTextStyle}>{checkedList.length}개 이미지가 선택됨</span>
          <input type="checkbox" css={checkInputStyle} />
          <WrappedIcon css={wrappedIconStyle} Icon={TrashCan} onClick={handleClickDelete} />
          <WrappedIcon css={wrappedIconStyle} Icon={Restore} onClick={handleClickRestore} />
        </>
      )}
    />
  );
};

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

const wrappedIconStyle = css({
  marginRight: 8,
  '&:last-child': {
    marginRight: 0,
  },
});

export default Default;
