import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import { PhotoThumbnail, Pagination } from '../../components';

import { action as appActions } from '../../store/app/slices';
import { action as photoStorageActions } from '../../store/photoStorage/slices';
import { MODAL_TYPE } from '../../constants';

const PADDING_SIZE = 18;

const photoStorageStyle = css({
  padding: ` 0 ${PADDING_SIZE}px 40px ${PADDING_SIZE}px`,
  userSelect: 'none',
});

const photoStorageTitleStyle = css({
  padding: '16px 0',
  color: 'rgba(0, 0, 0, 0.4)',
  fontSize: 14,
  fontWeight: 500,
});

const photoContainerStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
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
  const [wrapperSize, setWrapperSize] = useState(0);
  const photoStorageRef = useRef(null);

  useEffect(() => {
    const storageWidth = photoStorageRef.current.clientWidth - (PADDING_SIZE * 2);
    const size = ((storageWidth - (spacingSize * (columnCount - 1))) / columnCount);
    setWrapperSize(size);
  }, [photoStorageRef, columnCount]);

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

  const {
    storagePhotos: photoList = [],
    totalPageCount = 0,
    totalStoragePhotoCount = 0,
  } = storagePhotos || {};

  return (
    <div css={photoStorageStyle} ref={photoStorageRef}>
      <h2 css={photoStorageTitleStyle}>{totalStoragePhotoCount}장의 이미지</h2>
      <div css={photoContainerStyle}>
        {photoList.map((image) => (
          <PhotoThumbnail
            key={image.id}
            id={image.id}
            imgSrc={image.uri}
            imgAlt=""
            wrapperSize={wrapperSize}
            isChecked={getIsChecked(image.id)}
            handleClickCheck={handleClickCheck(image.id)}
            handleClickUncheck={handleClickUncheck(image.id)}
            handleClickPhoto={handleClickPhoto(image.id)}
          />
        ))}
        <div css={paginationWrapperStyle}>
          <Pagination
            currentPageIndex={page}
            totalPageCount={totalPageCount}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoStorage;
