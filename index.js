//const path = require('path');
//const data = require('./data.json');
const express = require('express');
const _PORT = 3000;
const app = express();
const bd = require('./config/database');

/*
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/vistas'));

app.get('/', (req, res)=>{
    //res.json(data);
    //res.send('Hola Mundo desde express');
    //res.sendFile(path.join(__dirname, '/src/vistas/index.html'));
    res.render('index', { 
        title: "EJS", 
        pname: "Nelia",
        plname: "Argile",
        pemail: "nargile0@umich.edu"
    });
});
*/

//PRODUCTOS
//COMPRAS

const prodrt = require('./rutas/ruta');
const ordenrt = require('./rutas/orden');

app.get('/', (req, res) =>{
    res.send('<h1>Bienvenido a nuestra aplicacion</h1>');
});

app.use('/productos', prodrt);
app.use('/orden', ordenrt);


app.use((req, res, next) =>{
    const error = new Error('No se encuentra');
    //error.status(404);
    error.statusCode = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.statusCode || 500);
    res.json({
        error:
        {
            message: error.message
        }
    });
});




app.listen(_PORT, ()=>{
    console.log(`Mi servidor esta corriendo en el puerto ${_PORT}`)
    //console.log(data);
})

/*
app.use(express.static(path.join(__dirname, '/src', '/images')));

app.use(express.static('/src'));

app.use('/src', express.static('src'));


var servidor = app.createServer(function(request, response) {
    var url = request.url;
    var parametros = ruta.parse(url, true);

    var nombre = parametros.name;
    var edad = parametros.age;

    if(url === '/contact'){
        response.write('<h1> Hola estoy en contacto </h1>');
        response.end();
    }
    else if(url === '/'){
        response.write('<h1> Hola desde mi curso de node </h1>');
        response.end();
    }
    else{
        response.write(`<h1> Hola ${nombre} </h1>`)
        response.write(`<h1> Tu edad es ${edad} </h1>`)
        response.end();
    }
    
}).listen(3000);
console.log("Servidor corriendo");

*/



