import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { PhotoThumbnail } from '../../components';
import { action as appActions } from '../../store/app/slices';
import { MODAL_TYPE } from '../../constants';

const IMG_SRC = 'https://seoulhype.files.wordpress.com/2020/05/iu_full.jpg?w=1500&h=768&crop=1';
const IMG_ALT = 'IU is Love.';
const dummayArray = Array(10).fill(null);

const photoStorageStyle = css({
  display: 'flex',
  padding: 50,
  flexWrap: 'wrap',
});

const PhotoStorage = () => {
  const dispatch = useDispatch();

  const handleClickPhoto = () => {
    dispatch(appActions.openModal({
      modalType: MODAL_TYPE.IMAGE_DETAIL_MODAL,
      modalProps: {
        // TODO photoId를 넘겨 조회하도록 수정
        imgSrc: IMG_SRC,
        imgAlt: IMG_ALT,
      },
    }));
  };

  return (
    <div css={photoStorageStyle}>
      {dummayArray.map((img, index) => (
        <PhotoThumbnail
          key={index}
          imgSrc={IMG_SRC}
          imgAlt={IMG_ALT}
          handleClickPhoto={handleClickPhoto}
        />
      ))}
    </div>
  );
};

export default PhotoStorage;
