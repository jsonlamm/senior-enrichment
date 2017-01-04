// // a reducer takes in two things:

// // 1. the action (info about what happened)
// // 2. copy of the current this.state.
// function reducerCampuses(state = [], action) {
//   console.log('from reducer-campuses');
//   console.log(state, action);
//   return state;
// }

// export default reducerCampuses;



const initialState = {
	campuses: [],
	selectedCampus: {}
}

const campusesReducer = function(state = initialState, action) {

  switch (action.type) {
  	case LOAD_CAMPUSES:
    return Object.assign({}, state, {
      campuses: action.campuses
      })

  	case SELECT_CAMPUS:
  	return Object.assign({}, state, {
      selectedCampus: action.selectedCampus
      })

    default:
    return state
  }
};

export default campusesReducer;
