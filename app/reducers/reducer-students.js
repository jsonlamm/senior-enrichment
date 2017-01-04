// // a reducer takes in two things:

// // 1. the action (info about what happened)
// // 2. copy of the current this.state.
// function reducerStudents(state = [], action) {
//   console.log('from reducer-student');
//   console.log(state, action);
//   return state;
// }

// export default reducerStudents;

import { LOAD_STUDENTS, SELECT_STUDENT } from '../constants';

const initialState = {
	students: [],
	selectedStudent: {}
}


const studentsReducer = function(state = initialState, action) {

  switch (action.type) {
  	case LOAD_STUDENTS:
    return Object.assign({}, state, {
      students: action.students
      })

  	case SELECT_STUDENT:
  	return Object.assign({}, state, {
      selectedStudent: action.selectedStudent
      })

    default:
    return state
  }
};

export default studentsReducer;