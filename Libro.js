class Libro{
    
    constructor(nombre, autor, editorial){
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;
    }

    leer(){
        console.log(`Estoy leyendo ${this.nombre}`);
    }
    
    publicar(){
        console.log(`Publicando el ${this.nombre} del autor ${this.autor}`);
    }
}


module.exports = Libro;