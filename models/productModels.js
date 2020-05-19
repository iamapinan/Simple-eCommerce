var sequelize = require('sequelize')
// sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: '../data/database.sqlite'
//   });

const list = () => {
  products = [
    {
      id: 10001,
      name: "Test product 1",
      description: "very good product",
      price: 1000,
      quantity: 10
    },
    {
      id: 10002,
      name: "Test product 2",
      description: "very good product 2",
      price: 1500,
      quantity: 8
    }
  ]
  return products
}

module.exports = {
  list
}