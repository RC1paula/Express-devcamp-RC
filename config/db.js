const sequelize = require('./seq')
//Dependencia del Modelo
const UserModel = require('../models/user')

//Dependencia DataTypes
const { DataTypes } = require('sequelize')

const User = UserModel( sequelize , DataTypes )
//Crear función asyncrona para generar conexión
const conectarBD = async () =>{
    try {
        await sequelize.authenticate()
        console.log('Se estableción conexión'.bgCyan.magenta)
        //Seleccionar Users
        // const users = await User.findAll();
        // console.log(users)

        //Crear 
        // const marco = await User.create({
        //     name: "Marco",
        //     email: "marcopolo@gmail",
        //     password: "mar123",
        // });

    } catch (error) {
        console.log(error)
    }
}

// const update = async () =>{

// }
// 

module.exports = conectarBD