// should be moved to server
'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    // validate: {
      allowNull: false,
    //   isAlpha: true
    // }
  },
  email: {
    type: Sequelize.STRING,
      allowNull: false,
    validate: {
      isEmail: true
    }
  }
})
