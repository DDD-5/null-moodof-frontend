import React from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
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

const iconBlockStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  marginRight: 8,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  '&:last-child': {
    marginRight: 0,
  },
});

const WrappedIcon = ({ Icon, handleClick }) => (
  <div css={iconBlockStyle} onClick={handleClick}>
    <Icon />
  </div>
);

const Default = () => {
  const dispatch = useDispatch();
  const { checkedList } = useSelector((state) => state.trashStorage);

  const handleClickDelete = () => {
    if (checkedList.length) {
      dispatch(appActions.openModal({
        modalType: MODAL_TYPE.DELETE_MODAL,
        modalProps: {
          checkedList,
        },
      }));
    }
  };

  const handleClickRestore = () => {
    if (checkedList.length) {
      dispatch(appActions.openModal({
        modalType: MODAL_TYPE.RESTORE_MODAL,
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
        <WrappedIcon Icon={TrashCan} handleClick={handleClickDelete} />
        <WrappedIcon Icon={Restore} handleClick={handleClickRestore} />
      </div>
    </header>
  );
};

export default Default;
