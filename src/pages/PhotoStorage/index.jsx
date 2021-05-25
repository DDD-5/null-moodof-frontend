import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import { PhotoThumbnail, Pagination } from '../../components';

import { action as appActions } from '../../store/app/slices';
import { action as photoStorageActions } from '../../store/photoStorage/slices';
import { MODAL_TYPE } from '../../constants';

const PADDING_SIZE = 18;

const photoStorageStyle = css({
  display: 'flex',
  padding: `40px ${PADDING_SIZE}px`,
  flexWrap: 'wrap',
  userSelect: 'none',
});

const paginationWrapperStyle = css({
  width: '100%',
  marginTop: 16,
  textAlign: 'center',
});

const PhotoStorage = () => {
  const dispatch = useDispatch();
  const {
    isEditMode,
    checkedList,
    storagePhotos,
    columnCount,
    spacingSize,
    page,
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
        photoId,
      },
    }));
  };

  const handlePageChange = (pageIndex) => {
    dispatch(photoStorageActions.setPage(pageIndex));
    dispatch(photoStorageActions.getStoragePhotosRequest());
  };

  return (
    <div css={photoStorageStyle} ref={photoStorageRef}>
      {storagePhotos?.storagePhotos?.map((image) => (
        <PhotoThumbnail
          key={image.id}
          id={image.id}
          imgSrc={image.uri}
          imgAlt="imgAlt"
          imagePercent={imagePercent}
          isChecked={getIsChecked(image.id)}
          handleClickCheck={handleClickCheck(image.id)}
          handleClickUncheck={handleClickUncheck(image.id)}
          handleClickPhoto={handleClickPhoto(image.id)}
        />
      ))}
      <div css={paginationWrapperStyle}>
        <Pagination
          currentPageIndex={page}
          totalPageCount={storagePhotos?.totalPageCount}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PhotoStorage;
