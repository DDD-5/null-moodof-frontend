import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import GlobalModalContainer from './components/AppModal/GlobalModalContainer';
import GlobalMenuContainer from './components/AppMenu/GlobalMenuContainer';

const App = () => (
  <BrowserRouter>
    <Router />
    <GlobalModalContainer />
    <GlobalMenuContainer />
  </BrowserRouter>
);

export default App;
