import React, { useRef, useState } from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { action as appActions } from '../../store/app/slices';
import { MODAL_TYPE } from '../../constants';

const photoWrapperStyle = css({
  '@media (min-width: 1200px)': {
    width: '18%',
    margin: '0 2.5% 2.5% 0',
    '&:nth-of-type(5n)': {
      marginRight: 0,
    },
  },
  '@media (max-width: 1200px)': {
    width: '22%',
    margin: '0 4% 4% 0',
    '&:nth-of-type(4n)': {
      marginRight: 0,
    },
  },
});

const photoStyle = css({
  position: 'relative',
  paddingTop: '100%',
  overflow: 'hidden',
});

const photoCenteredStyle = css({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  transform: 'translate(50%, 50%)',
});

const Photo = () => {
  // TODO 수정 필요
  const wrapperRef = useRef(null);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const photoImgStyle = css({
    height: `${isImgLoaded ? wrapperRef?.current?.clientHeight : 0}px`,
    transform: 'translate(-50%, -50%)',
  });

  const dispatch = useDispatch();

  const handleClickPhoto = () => {
    dispatch(appActions.openModal({
      modalType: MODAL_TYPE.IMAGE_DETAIL_MODAL,
    }));
  };

  return (
    <div css={photoWrapperStyle} onClick={handleClickPhoto} ref={wrapperRef}>
      <div css={photoStyle}>
        <div css={photoCenteredStyle}>
          <img
            css={photoImgStyle}
            onLoad={() => setIsImgLoaded(true)}
            src="https://seoulhype.files.wordpress.com/2020/05/iu_full.jpg?w=1500&h=768&crop=1"
            alt="IU"
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
