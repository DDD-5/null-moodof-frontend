import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Intro,
  PhotoStorage,
  PhotoBoard,
  NotFound,
} from './pages';

const Router = () => (
  <Switch>
    <Route exact path="/intro">
      <Intro />
    </Route>
    <Route exact path="/board/:boardId">
      <PhotoBoard />
    </Route>
    <Route exact path="/">
      <PhotoStorage />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Router;
