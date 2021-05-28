import React from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import WrappedIcon from '../WrappedIcon';

import { TrashCan, Restore } from '../../../assets/icons/16';
import { action as appActions } from '../../../store/app/slices';
import { MODAL_TYPE } from '../../../constants';

const headerStyle = css({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const headerTitleStyle = css({
  fontSize: 14,
  fontWeight: 500,
});

const rightBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
});

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

const wrapIconStyle = css({
  marginRight: 8,
  '&:last-child': {
    marginRight: 0,
  },
});

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
    <header css={headerStyle}>
      <div>
        <h2 css={headerTitleStyle}>휴지통</h2>
      </div>
      <div css={rightBlockStyle}>
        <span css={countTextStyle}>{checkedList.length}개 이미지가 선택됨</span>
        <input type="checkbox" css={checkInputStyle} />
        <WrappedIcon css={wrapIconStyle} Icon={TrashCan} onClick={handleClickDelete} />
        <WrappedIcon css={wrapIconStyle} Icon={Restore} onClick={handleClickRestore} />
      </div>
    </header>
  );
};

export default Default;
