import React, { memo } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import WrappedIcon from '../WrappedIcon';

import { Move, Download, TrashCan } from '../../../../assets/icons/16';
import { action as photoStorageActions } from '../../../../store/photoStorage/slices';
import { action as appActions } from '../../../../store/app/slices';
import { MODAL_TYPE } from '../../../../constants';

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

const EditMode = () => {
  const dispatch = useDispatch();
  const {
    checkedList,
    storagePhotos: {
      storagePhotos,
    },
  } = useSelector((state) => state.photoStorage);

  const handleClickGoTrash = () => {
    dispatch(appActions.openModal({
      modalType: MODAL_TYPE.GO_TRASH,
      modalProps: {
        checkedList,
      },
    }));
  };

  const handleChangeInputCheckbox = () => {
    if (checkedList.length === storagePhotos.length) {
      dispatch(photoStorageActions.clearCheckedList());
    } else {
      dispatch(photoStorageActions.checkAllPhotos());
    }
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
      <WrappedIcon css={wrapIconStyle} Icon={Move} />
      <WrappedIcon css={wrapIconStyle} Icon={Download} />
      <WrappedIcon css={wrapIconStyle} Icon={TrashCan} onClick={handleClickGoTrash} />
    </>
  );
};

export default memo(EditMode);
