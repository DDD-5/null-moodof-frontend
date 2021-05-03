import React, { useState } from 'react';
import { css } from '@emotion/react';
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
  const [isEditMode, setIsEditMode] = useState(false);

  const handleToggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <header css={headerStyle}>
      <div>
        <h2 css={headerTitleStyle} onClick={handleToggleEditMode}>이미지 보관함</h2>
      </div>
      <div css={rightBlockStyle}>
        {isEditMode
          ? <EditMode />
          : <Defulat />}
      </div>
    </header>
  );
};

export default StorageHeader;
