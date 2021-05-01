import React, { useState } from 'react';
import { css } from '@emotion/react';
import { ChevronUp, ChevronDown, Logout } from '../../assets/icons';

const profileStyle = css({
  position: 'fixed',
  bottom: 0,
});

const imageStyle = css({
  width: 40,
  height: 40,
  backgroundColor: '#005B70',
  color: 'white',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const nameBlockStyle = css({
  paddingLeft: 12,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: 160,
  '& span': {
    width: '100%',
  },
});

const logoutStyle = css({
  width: '100%',
  fontSize: 14,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '0 16px 0 16px',
  color: '#616161',
});

const chevronStyle = css({
  position: 'absolute',
  right: 16,
  cursor: 'pointer',
});

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileToggle = () => {
    setIsOpen(!isOpen);
  };

  const defaultBlockStyle = css({
    width: 280,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '0 16px 0 16px',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    background: isOpen ? '#F5F5F5' : '#FAFAFA',
  });

  const expandBlockStyle = css({
    height: 56,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    background: isOpen ? '#F5F5F5' : '#FAFAFA',
  });

  return (
    <div css={profileStyle}>
      {isOpen && (
        <div css={expandBlockStyle}>
          <div css={logoutStyle}>
            <Logout css={{ marginRight: 12 }} />
            <span>로그아웃</span>
          </div>
        </div>
      )}

      <div css={defaultBlockStyle}>
        <div css={imageStyle}>MK</div>
        <div css={nameBlockStyle}>
          <span css={{ fontSize: 14 }}>Mood Kim</span>
          <span css={{ fontSize: 12, marginTop: 4 }}>moodkim@gmail.com</span>
        </div>
        {isOpen
          ? <ChevronDown css={chevronStyle} onClick={handleProfileToggle} />
          : <ChevronUp css={chevronStyle} onClick={handleProfileToggle} />}
      </div>
    </div>
  );
};

export default Profile;
