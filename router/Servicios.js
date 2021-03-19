const express = require('express');
const router = express.Router();

const Servicio = require('../models/servicio')

router.get('/',async (req,res)=>{

    try {
        const arrayServiciosDB = await Servicio.find()
        console.log(arrayServiciosDB)
        res.render("servicios",{
            arrayServicios: arrayServiciosDB
       
        })
        
    } catch (error) {
        console.log(error)
        
    }



   
})

module.exports = router;