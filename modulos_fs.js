const archivos = require('fs');
const path = require('path');

/*
archivos.mkdir(path.join(__dirname, '/nuevo'),{}, err =>{
    if(err) {
        console.log("Folder existente");
    }
    else{
        console.log("Creación exitosa");
    }
});
archivos.writeFile(path.join(__dirname, '/nuevo', 'hola.txt'), 
'Hola mundo, desde mi curso de node', err => {
    if(err) {
        console.log("Folder existente");
    }
    else{
        console.log("Creación exitosa");
    }
});
*/

archivos.readFile(path.join(__dirname, '/nuevo', 'hola.json'), (err,data) =>{
    if(err) {
        console.log(err);
    }
    else{
        var data = JSON.parse(data);
        console.log(data.nombre);
    }
});







//path.basename();