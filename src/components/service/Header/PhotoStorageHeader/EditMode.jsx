import React, { memo } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import WrappedIcon from '../WrappedIcon';

import { Move, Download, TrashCan } from '../../../../assets/icons/16';
import { action as photoStorageActions } from '../../../../store/photoStorage/slices';
import { action as appActions } from '../../../../store/app/slices';
import { MODAL_TYPE, MENU_TYPE } from '../../../../constants';

const EditMode = () => {
  const dispatch = useDispatch();
  const {
    checkedList,
    storagePhotos: {
      storagePhotos,
    },
  } = useSelector((state) => state.photoStorage);

  const handleChangeInputCheckbox = () => {
    if (checkedList.length === storagePhotos.length) {
      dispatch(photoStorageActions.clearCheckedList());
    } else {
      dispatch(photoStorageActions.checkAllPhotos());
    }
  };

  const handleClickMoveBoard = (e) => {
    dispatch(appActions.openMenu({
      menuType: MENU_TYPE.HEADER.PHOTO_STORAGE.MOVE_BORAD,
      menuProps: {
        clientX: e.clientX,
        clientY: e.clientY,
      },
    }));
  };

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
      <input
        type="checkbox"
        css={checkInputStyle}
        checked={checkedList.length === storagePhotos.length}
        onChange={handleChangeInputCheckbox}
      />
      <WrappedIcon css={wrapIconStyle} Icon={Move} onClick={handleClickMoveBoard} />
      <WrappedIcon css={wrapIconStyle} Icon={Download} />
      <WrappedIcon css={wrapIconStyle} Icon={TrashCan} onClick={handleClickGoTrash} />
    </>
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

const wrapIconStyle = css({
  marginRight: 8,
  '&:last-child': {
    marginRight: 0,
  },
});

export default memo(EditMode);
