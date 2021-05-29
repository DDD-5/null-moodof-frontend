import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';

import {
  Intro,
  PhotoStorage,
  PhotoBoard,
  TrashStorage,
  NotFound,
} from './pages';
import { Navigation, Header } from './components';

import { ENV, APP, HEADER_TYPE } from './constants';

const AppFrame = ({ children, headerType, isFolded }) => {
  const globalWrapperStyle = css({
    minHeight: '100vh',
    paddingTop: APP.headerHeight,
    paddingLeft: isFolded ? 0 : APP.navigationWidth,
    paddingRight: isFolded && 0,
  });

  return (
    <>
      <Navigation />
      <Header headerType={headerType} />
      <div css={globalWrapperStyle}>
        {children}
      </div>
    </>
  );
};

const Router = () => {
  const history = useHistory();
  const { isFolded } = useSelector((state) => state.app);

  const localToken = window.localStorage.getItem('token');
  const params = new URLSearchParams(window.location.search);
  const tokenParam = params.get('token');

  if (localToken) {
    window.localStorage.setItem('token', localToken);
  } else if (tokenParam) {
    window.localStorage.setItem('token', tokenParam);
    history.replace('/');
  } else {
    window.location.href = (`${ENV.oAuthUrl}?redirect_uri=${window.location.href}`);
  }

  return (
    <Switch>
      <Route exact path="/intro">
        <Intro />
      </Route>
      <Route exact path="/board/:boardId">
        <AppFrame headerType={HEADER_TYPE.BOARD} isFolded={isFolded}>
          <PhotoBoard />
        </AppFrame>
      </Route>
      <Route exact path="/trash">
        <AppFrame headerType={HEADER_TYPE.TRASH_STORAGE} isFolded={isFolded}>
          <TrashStorage />
        </AppFrame>
      </Route>
      <Route exact path="/">
        <AppFrame headerType={HEADER_TYPE.PHOTO_STORAGE} isFolded={isFolded}>
          <PhotoStorage />
        </AppFrame>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Router;
