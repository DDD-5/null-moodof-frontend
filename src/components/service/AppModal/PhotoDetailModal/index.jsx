import React, { memo, useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';

import { ChevronLeft, ChevronRight } from '../../../../assets/icons/48';
import { action as appActions } from '../../../../store/app/slices';
import { action as photoStorageActions } from '../../../../store/photoStorage/slices';
import { MODAL_TYPE } from '../../../../constants';

const PhotoDetailModal = ({ photoId }) => {
  const dispatch = useDispatch();
  const {
    storagePhotoDetail,
  } = useSelector((state) => state.photoStorage);
  const [currentPhotoId, setCurrentPhotoId] = useState(photoId);
  const {
    previousStoragePhotoId,
    nextStoragePhotoId,
    uri = '',
  } = storagePhotoDetail || {};

  useEffect(() => {
    dispatch(photoStorageActions.getStoragePhotoDetailRequest(currentPhotoId));
  }, [currentPhotoId]);

  const handleCloseModal = () => {
    dispatch(appActions.closeModal({
      modalType: MODAL_TYPE.PHOTO_DETAIL,
    }));
  };

  const handleClickImg = (e) => {
    e.stopPropagation();
  };

  const handleClickPrev = (e) => {
    e.stopPropagation();
    if (previousStoragePhotoId) setCurrentPhotoId(previousStoragePhotoId);
  };

  const handleClickNext = (e) => {
    e.stopPropagation();
    if (nextStoragePhotoId) setCurrentPhotoId(nextStoragePhotoId);
  };

  return (
    <div css={photoDetailModalStyle} onClick={handleCloseModal}>
      <Header />

      <img
        onClick={handleClickImg}
        css={imageStyle}
        src={uri}
        alt=""
      />

      <ChevronLeft css={prevButtonStyle} onClick={handleClickPrev} />
      <ChevronRight css={nextButtonStyle} onClick={handleClickNext} />
    </div>
  );
};

const photoDetailModalStyle = css({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.95);',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  zIndex: 20,
});

const imageStyle = css({
  zIndex: 10,
  maxWidth: '70%',
  maxHeight: '70%',
});

const prevButtonStyle = css({
  position: 'fixed',
  left: 48,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#212121',
    borderRadius: 4,
  },
});

const nextButtonStyle = css({
  position: 'fixed',
  right: 48,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#212121',
    borderRadius: 4,
  },
});

export default memo(PhotoDetailModal);
