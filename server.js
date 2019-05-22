const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

//##CARPETA PUBLICA####
//eso hace el llamado al archivo que esta dentro de public, en caso de tener mas de uno
//en la url del browser poner el nombre completo example.html
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS
app.set('view engine', 'hbs');

// Esto muestra el JSON salida cuando la url es asi http://localhost:3000/ el app.get manda 
// a llamar lo que esta en el /
app.get('/', (req, res) => {
    // res.send('Hola Mundo Express')
    res.render('home', {
        nombre: 'Felipe'
    });
});

// Esto muestra el JSON llamado /data ejemplo http://localhost:3000/data
app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Felipe'
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})