import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { css } from '@emotion/react';

import {
  Intro,
  PhotoStorage,
  PhotoBoard,
  TrashStorage,
  NotFound,
} from './pages';
import { Navigation, Header } from './components';

import { HEADER_TYPE, ENV } from './constants';

const AppFrame = ({ children, headerType }) => {
  const globalWrapperStyle = css({
    paddingTop: 48,
    paddingLeft: 240,
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
        <AppFrame headerType={HEADER_TYPE.BOARD}>
          <PhotoBoard />
        </AppFrame>
      </Route>
      <Route exact path="/trash">
        <AppFrame headerType={HEADER_TYPE.TRASH_STORAGE}>
          <TrashStorage />
        </AppFrame>
      </Route>
      <Route exact path="/">
        <AppFrame headerType={HEADER_TYPE.PHOTO_STORAGE}>
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
