

import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import AppContainer from './AppContainer.jsx'
import store from './store';

const AppContainer = () => {
  console.log('in AppContainer');
  return (
    <h1>Here we go. finally.</h1>
  );
};

// console.log('HASHHISTORY', browserHistory, "Router", Router)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById('app'),
);

