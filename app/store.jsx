import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import { createStore, applyMiddleware } from 'redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'; // connects router with redux

import rootReducer from './reducers/index';

// need data
import dummyCampusData from './dummy-data/campuses.js';
import dummyStudentData from './dummy-data/students.js';


const defaultState = { // need a reducer for each part of state
  reducerCampuses: dummyCampusData,
  reducerStudents: dummyStudentData
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

// export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
