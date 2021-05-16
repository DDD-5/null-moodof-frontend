import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { ChevronLeft, ChevronRight } from '../../../assets/icons/48';
import { action as appActions } from '../../../store/app/slices';
import { MODAL_TYPE } from '../../../constants';

const imageDetailModalStyle = css({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.95);',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const imageStyle = css({
  zIndex: 10,
  maxWidth: '60%',
  maxHeight: '60%',
});

const navigationButtons = css({
  position: 'fixed',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 48px 0 48px',
  '& svg': {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#212121',
      borderRadius: 4,
    },
  },
});

const ImageDetailModal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(appActions.closeModal({
      modalType: MODAL_TYPE.IMAGE_DETAIL_MODAL,
    }));
  };

  const handleClickImg = (e) => {
    e.stopPropagation();
  };

  const handleClickPrev = (e) => {
    e.stopPropagation();
  };

  const handleClickNext = (e) => {
    e.stopPropagation();
  };

  return (
    <div css={imageDetailModalStyle} onClick={handleCloseModal}>
      <Header />
      <img
        onClick={handleClickImg}
        css={imageStyle}
        src="https://seoulhype.files.wordpress.com/2020/05/iu_full.jpg?w=1500&h=768&crop=1"
        alt="IU"
      />
      <div css={navigationButtons}>
        <ChevronLeft onClick={handleClickPrev} />
        <ChevronRight onClick={handleClickNext} />
      </div>
    </div>
  );
};

export default ImageDetailModal;
