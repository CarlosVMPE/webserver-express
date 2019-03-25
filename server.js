const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

// Heroku
const port = process.env.PORT || 3000;

// middleware
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {


    res.render('home', {
        title: 'Página web Demo',
        nombre: 'carlos'
    });

})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Demo'
    })
})

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${ port }`));