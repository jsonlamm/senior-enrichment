// should be moved to server
'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
  name: {
  type: Sequelize.STRING
}
})
