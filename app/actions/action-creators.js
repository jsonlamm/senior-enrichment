



// increment
export function increment(whichItem) {
  return {
    type: 'INCREMENT',
    whichItem
  }
}

// adding comments
export function addComments(itemId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    itemId,
    author,
    comment
  }
}

export function removeComment(itemId, i) {
  return {
    type: 'REMOVE_COMMENT',
    itemId,
    i
  }
}

import { LOAD_CAMPUSES, SELECT_CAMPUS } from '../constants';

export const loadCampuses = (campuses) => {
	return {
		type: LOAD_CAMPUSES,
		campuses: campuses
	}
};

export const selectCampus = (selectedCampus) => {
	return {
		type: SELECT_CAMPUS,
		selectedCampus: selectedCampus
	}
};

import { LOAD_STUDENTS, SELECT_STUDENT } from '../constants';


export const loadStudents = (students) => {
	return {
		type: LOAD_STUDENTS,
		students: students
	}
};

export const selectStudent = (selectedStudent) => {
	return {
		type: SELECT_STUDENT,
		selectedStudent: selectedStudent
	}
};