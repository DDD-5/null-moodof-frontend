import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { GlobalModalContainer } from './components';

const App = () => (
  <BrowserRouter>
    <Router />
    <GlobalModalContainer />
  </BrowserRouter>
);

export default App;
