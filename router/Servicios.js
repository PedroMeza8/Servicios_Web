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

router.get('/:id', async(req,res) =>{
    const id = req.params.id
    
    try {
        
        const ServicioDB = await Servicio.findOne({ _id : id})
        console.log(ServicioDB)

        res.render('detalle', {
            servicio: ServicioDB,
            error : false  
        })

    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error : true,
            mensaje: 'No se encuentra el id solicitado'  
        })
    }
})

router.delete('/id', async(req,res) =>{
    console.log("delete inicio")
    const id = req.params.id

    try {
        const servicioDB = await Servicio.findByIdAndDelete({_id: id})

        if (servicioDB) {
            res.json({
                estado: true,
                mensaje: 'Eliminado'
            })
        }else {
            res.json({
                estado: false,
                mensaje: 'Falló Eliminar'
            })
        }

    } catch (error) {
        console.log(error)
        
    }
})
module.exports = router;