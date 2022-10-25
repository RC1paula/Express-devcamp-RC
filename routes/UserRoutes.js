const express = require('express')

const router = express.Router()

//get:obtender datos Read
router.get('/' , (req, res) =>{
    res.status(200).json(
        {
            "Buenos dias" : `se trae todos los Users`
        }
    )
})

//OBTENER RECURSOS POR ID
router.get('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "Buenos dias" :  `Users cuyo ID es: ${req.params.id}`
        }
    )
})

//POST:  CREAR UN NUEVO RECURSO
router.post('/', (req, res)=>{
    res.status(201).json(
        {
            "Buenos dias" : `aqui se crea un nuevo Users`
        }
    )
})

//PUT - PATCH: ACTUALIZAR
router.put('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "Buenos dias" : `actualizar el Users: ${req.params.id}`
        }
    )
})

//DELETE: ELIMINAR
router.delete('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "Buenos dias" : `eliminar el Users: ${req.params.id}`
        }
    )
})

module.exports = router

