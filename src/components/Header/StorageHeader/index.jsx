import React from 'react';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import Defulat from './Default';
import EditMode from './EditMode';

const headerStyle = css({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const headerTitleStyle = css({
  fontSize: 14,
  fontWeight: 500,
});

const rightBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
});

const StorageHeader = () => {
  const { isCheckReady } = useSelector((state) => state.photoStorage);

  return (
    <header css={headerStyle}>
      <div>
        <h2 css={headerTitleStyle}>이미지 보관함</h2>
      </div>
      <div css={rightBlockStyle}>
        {isCheckReady
          ? <EditMode />
          : <Defulat />}
      </div>
    </header>
  );
};

export default StorageHeader;
