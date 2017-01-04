import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux';

// import reducers:
import campusesReducer from './reducer-campuses.js';
import studentsReducer from './reducer-students.js';


// const initialState = {}

const rootReducer = combineReducers({campusesReducer, studentsReducer, routing: routerReducer})

export default rootReducer;

// // first draft:
// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

// export default rootReducer

