const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicioSchema = new Schema ({
    descripcion : String,
    precio: String
})

// crear modelo
const Servicio = mongoose.model('Servicio', servicioSchema);

module.exports = Servicio;
