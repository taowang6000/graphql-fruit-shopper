const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  name: {
    type: Sequelize.ENUM(
      'citrus',
      'berries',
      'melons',
      'tropical',
      'US-grown',
      'organic'
    )
  }
})

module.exports = Category
