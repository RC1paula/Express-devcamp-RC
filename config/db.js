const { connect } = require('../routes/BootcampRoutes')
const sequelize = require('./seq')

//Crear función asyncrona para generar conexión
const conectarBD = async () =>{
    try {
        await sequelize.authenticate()
        console.log('Se estableción conexión')
    } catch (error) {
        console.log(error)
    }
}

conectarBD()