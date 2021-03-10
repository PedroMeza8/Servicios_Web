const express  = require('express');
const app = express();

const port = 3000;

// Motor de plantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
// Rutas Web
app.use('/', require('./router/RutasWeb'));

app.use((req, res, next) => {
   res.status(404).render('404', {
       titulo: '404',
       descripcion: 'Titulo del sitio Web'
   })
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})