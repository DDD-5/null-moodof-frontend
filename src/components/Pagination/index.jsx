import React, { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';

import {
  ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight,
} from '../../assets/icons/16';

const Pagination = ({
  currentPageIndex = 0,
  totalPageCount = 1,
  handlePageChange = () => {},
}) => {
  const [inputValue, setInputValue] = useState(currentPageIndex + 1);
  const inputRef = useRef(null);

  useEffect(() => {
    setInputValue(currentPageIndex + 1);
  }, [currentPageIndex]);

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlurInput = () => {
    if (
      inputValue - 1 !== currentPageIndex
      && inputValue - 1 >= 0
      && inputValue - 1 < totalPageCount
    ) {
      handlePageChange(inputValue - 1);
    } else {
      setInputValue(currentPageIndex + 1);
    }
  };

  const handleKeyPressInput = (e) => {
    if (e.key === 'Enter') {
      if (
        inputValue - 1 !== currentPageIndex
        && inputValue - 1 >= 0
        && inputValue - 1 < totalPageCount
      ) {
        handlePageChange(inputValue - 1);
      } else {
        setInputValue(currentPageIndex + 1);
      }
    }
  };

  const handleClickFirst = () => {
    if (currentPageIndex !== 0) {
      handlePageChange(0);
    }
  };

  const handleClickPrev = () => {
    if ((currentPageIndex - 1) >= 0) {
      handlePageChange(currentPageIndex - 1);
    }
  };

  const handleClickNext = () => {
    if ((currentPageIndex + 1) < totalPageCount) {
      handlePageChange(currentPageIndex + 1);
    }
  };

  const handleClickLast = () => {
    if (currentPageIndex !== totalPageCount) {
      handlePageChange(totalPageCount - 1);
    }
  };

  return (
    <div css={paginationStyle}>
      <div css={leftIconBlockStyle}>
        <ChevronsLeft onClick={handleClickFirst} />
        <ChevronLeft onClick={handleClickPrev} />
      </div>
      <div>
        <input
          type="number"
          css={paginationInputStyle}
          value={inputValue}
          onChange={handleChangeInput}
          ref={inputRef}
          onBlur={handleBlurInput}
          onKeyPress={handleKeyPressInput}
        />
        <span css={paginationSlashStyle}> / </span>
        <span css={paginationSpanStyle}>{totalPageCount}</span>
      </div>
      <div css={rightIconBlockStyle}>
        <ChevronRight onClick={handleClickNext} />
        <ChevronsRight onClick={handleClickLast} />
      </div>
    </div>
  );
};

const paginationStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
});

const leftIconBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
  marginRight: 10,
  '& svg': {
    marginRight: 10,
    cursor: 'pointer',
    '&:last-child': {
      marginRight: 0,
    },
    '& path': {
      stroke: 'rgba(0, 0, 0, 0.4);',
    },
    '&:hover': {
      '& path': {
        stroke: '#21272A',
      },
    },
  },
});

const rightIconBlockStyle = css({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 10,
  '& svg': {
    marginLeft: 10,
    cursor: 'pointer',
    '&:first-of-type': {
      marginLeft: 0,
    },
    '& path': {
      stroke: 'rgba(0, 0, 0, 0.4);',
    },
    '&:hover': {
      '& path': {
        stroke: '#21272A',
      },
    },
  },
});

const paginationInputStyle = css({
  width: 32,
  height: 24,
  backgroundColor: '#FAFAFA',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: 2,
  textAlign: 'center',
  fontSize: 12,
  '&::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
  },
  '&:focus': {
    border: '1px solid #2F80ED',
    outline: 'none',
  },
});

const paginationSlashStyle = css({
  display: 'inline-block',
  padding: '0 8px',
  fontSize: 12,
});

const paginationSpanStyle = css({
  fontSize: 12,
});

export default Pagination;
