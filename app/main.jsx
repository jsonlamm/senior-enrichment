'use strict'
// react dependencies:
import React from 'react';
import {render} from 'react-dom';

import Root from './components/Root';

// import css:
// import css from './styles/style.styl';

// import components:
import MainComp from './components/MainComp';
import CampusesComp from './components/CampusesComp';
import SingleCampusComp from './components/SingleCampusComp';

// import router dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';

// <Router history={browserHistory}>
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={MainComp}>
      <IndexRoute component={CampusesComp}></IndexRoute>
      <Route path='/campus/:id' component={SingleCampusComp} />
      </Route>
    </Router>
  </Provider>
)
// render (
//   <Provider store={store}>
//   <div>
//     <Root/>
//     <h4>hello there</h4>
//     <MainComp />
//   </div>
//   </Provider>
//   , document.getElementById('main')
// )

render (
router
  , document.getElementById('main')
)
