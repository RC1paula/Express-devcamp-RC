const Sequelize = require('sequelize')

//Objeto conexión de sequelize
const sequelize = new Sequelize(
    'devcamp-rc',
    'root',
    '',
    {
        host:'localhost',
        dialect: 'mysql',
        port: '3307'
    }
)

module.exports = sequelize