import React from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import { action as AppActions } from '../../store/app/slices';
import { Small } from '../../assets/icons/logo';

const HeaderFrame = ({ title, leftBlock, rightBlock }) => {
  const dispatch = useDispatch();
  const { isFolded } = useSelector((state) => state.app);

  const handleClickToggleFold = () => {
    dispatch(AppActions.toggleIsFolded());
  };

  return (
    <div css={headerStyle}>
      <div css={leftBlockStyle}>
        {isFolded && <Small css={smallLogoStyle} onClick={handleClickToggleFold} />}
        <h1 css={titleStyle}>{title}</h1>
        {leftBlock}
      </div>
      <div css={rightBlockStyle}>
        {rightBlock}
      </div>
    </div>
  );
};

const headerStyle = css({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const leftBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
});

const smallLogoStyle = css({
  marginRight: 18,
  cursor: 'pointer',
});

const titleStyle = css({
  fontSize: 14,
  fontWeight: 500,
  marginRight: 4,
});

const rightBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
});

export default HeaderFrame;
