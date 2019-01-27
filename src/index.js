import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/main';
import store from './store';

render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
  , document.getElementById('root')
);
