const { Router } = require('express');
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

router.get('/crear', (req,res) => {
    res.render('crear')
})

router.post('/', async (req,res) =>{
    const body = req.body
    try {
      //  const ServicioDB = new Servicio(body) 
      //  await ServicioDB.save()

        await Servicio.create(body) 

        res.redirect('/servicios')
    } catch (error) {
        console.log(error)
    }
}
)
module.exports = router;