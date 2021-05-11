import React from 'react';
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

const photoImgStyle = css({
  transform: 'translate(-50%, -50%)',
});

const Photo = () => {
  const dispatch = useDispatch();

  const handleClickPhoto = () => {
    dispatch(appActions.openModal({
      modalType: MODAL_TYPE.IMAGE_DETAIL_MODAL,
    }));
  };

  return (
    <div css={photoWrapperStyle} onClick={handleClickPhoto}>
      <div css={photoStyle}>
        <div css={photoCenteredStyle}>
          <img
            css={photoImgStyle}
            src="http://image.chosun.com/sitedata/image/201904/10/2019041001881_0.png"
            alt="IU"
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
