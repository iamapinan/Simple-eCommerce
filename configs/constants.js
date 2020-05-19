
// Database config
const database = {
    dialect: 'sqlite',
    storage: '../data/database.sqlite'
}

const secretKey = '34fb11694c85268928ca410'

module.exports = {
    database,
    secretKey
}