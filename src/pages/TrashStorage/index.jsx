import React, { memo, useEffect } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoThumbnail } from '../../components';
import { action as trashStorageActions } from '../../store/trashStorage/slices';

const IMG_SRC = 'https://seoulhype.files.wordpress.com/2020/05/iu_full.jpg?w=1500&h=768&crop=1';
const IMG_ALT = 'IU is Love.';
const dummayArray = Array(10).fill(null);

const PhotoStorage = () => {
  const dispatch = useDispatch();
  const { checkedList } = useSelector((state) => state.trashStorage);

  useEffect(() => () => {
    dispatch(trashStorageActions.clearCheckedList());
  }, []);

  const getIsChecked = (photoId) => checkedList.indexOf(photoId) >= 0;

  const handleClickCheck = (photoId) => () => dispatch(trashStorageActions.checkPhoto({
    photoId,
  }));

  const handleClickUncheck = (photoId) => () => dispatch(trashStorageActions.unCheckPhoto({
    photoId,
  }));

  const handleClickPhoto = (photoId) => {
    const isChecked = getIsChecked(photoId);

    if (isChecked) {
      return handleClickUncheck(photoId);
    }
    return handleClickCheck(photoId);
  };

  return (
    <div css={photoStorageStyle}>
      {dummayArray.map((img, index) => (
        <PhotoThumbnail
          key={index}
          imgSrc={IMG_SRC}
          imgAlt={IMG_ALT}
          isChecked={getIsChecked(index)}
          handleClickPhoto={handleClickPhoto(index)}
          handleClickCheck={handleClickCheck(index)}
          handleClickUncheck={handleClickUncheck(index)}
        />
      ))}
    </div>
  );
};

const photoStorageStyle = css({
  display: 'flex',
  padding: 50,
  flexWrap: 'wrap',
});

export default memo(PhotoStorage);
