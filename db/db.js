'use strict';

const db = require('./index');

const Campus = require('./models/campus')

const Student = require('./models/student')

Campus.hasMany(Student);

Student.belongsTo(Campus);

// Campus.hasMany(Student, {foreignKey: 'student_id'});

// Student.belongsTo(Campus, {as: enrolledCampus});

module.exports = db;
