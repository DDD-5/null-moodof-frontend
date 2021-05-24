import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import { PhotoThumbnail } from '../../components';

import { action as appActions } from '../../store/app/slices';
import { action as photoStorageActions } from '../../store/photoStorage/slices';
import { MODAL_TYPE } from '../../constants';

const IMG_SRC = 'https://file2.nocutnews.co.kr/newsroom/image/2021/03/25/202103251659468108_0.jpg';
const IMG_ALT = 'IU is Love.';
const PADDING_SIZE = 18;

const photoStorageStyle = css({
  display: 'flex',
  padding: `40px ${PADDING_SIZE}px`,
  flexWrap: 'wrap',
});

const PhotoStorage = () => {
  const dispatch = useDispatch();
  const {
    isEditMode,
    checkedList,
    storagePhotos: { storagePhotos },
    columnCount,
    spacingSize,
  } = useSelector((state) => state.photoStorage);
  const [imagePercent, setImagePercent] = useState(0);
  const photoStorageRef = useRef(null);

  useEffect(() => {
    const storageWidth = photoStorageRef.current.clientWidth - (PADDING_SIZE * 2);
    const gutterPercent = ((spacingSize * (columnCount - 1)) / storageWidth) * 100;
    setImagePercent((100 - gutterPercent) / columnCount);
  }, [photoStorageRef]);

  useEffect(() => {
    dispatch(photoStorageActions.getStoragePhotosRequest());
    return () => {
      dispatch(photoStorageActions.clearCheckedList());
    };
  }, []);

  const getIsChecked = (photoId) => checkedList.indexOf(photoId) >= 0;

  const handleClickCheck = (photoId) => () => dispatch(photoStorageActions.checkPhoto({
    photoId,
  }));

  const handleClickUncheck = (photoId) => () => dispatch(photoStorageActions.unCheckPhoto({
    photoId,
  }));

  const handleClickPhoto = (photoId) => {
    const isChecked = getIsChecked(photoId);

    if (isEditMode) {
      if (isChecked) {
        return handleClickUncheck(photoId);
      }
      return handleClickCheck(photoId);
    }

    return () => dispatch(appActions.openModal({
      modalType: MODAL_TYPE.PHOTO_DETAIL,
      modalProps: {
        // TODO photoId를 넘겨 조회하도록 수정
        imgSrc: IMG_SRC,
        imgAlt: IMG_ALT,
      },
    }));
  };

  return (
    <div css={photoStorageStyle} ref={photoStorageRef}>
      {storagePhotos?.map((img, index) => (
        <PhotoThumbnail
          key={img.id}
          imgSrc={img.uri}
          imgAlt="imgAlt"
          imagePercent={imagePercent}
          isChecked={getIsChecked(index)}
          handleClickPhoto={handleClickPhoto(index)}
          handleClickCheck={handleClickCheck(index)}
          handleClickUncheck={handleClickUncheck(index)}
        />
      ))}
    </div>
  );
};

export default PhotoStorage;
