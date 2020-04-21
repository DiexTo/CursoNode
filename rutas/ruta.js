const express = require('express');
const routes = express.Router();
const producto = require('../controller/products');
const multer = require('multer');
const mongoose = require('mongoose');
const modelo = require('../model/product');


//const subir = multer({dest: 'imagenes'});
const Products = mongoose.model('Product', modelo);

const metodos = multer.diskStorage({
    destination: function (req, file, res) {
        res(null, 'imagenes');        
    },
    filename: function (req, file, res) {
        res(null, file.originalname);
    }
})

const subir = multer({storage: metodos})

routes.get('/', producto.getProduct);

//routes.post('/', producto.addProduct);

//routes.post('/', subir.single('imagenes'), producto.addProduct);

routes.post('/', subir.single('imagenes'), (req, res) => {
    console.log(req.file);
    let productoagregdo = new Products({
        name: req.body.name,
        price: req.body.price,
        cantidad: req.body.cantidad
    });
    productoagregdo.save()
    .then(data =>{
        console.log(data);
        res.status(201).json({
            message: "Producto Agregado",
        });
    })
    .catch(err =>{
        res.status(409).json({
            message: err.message
        });
    })
});

routes.get('/:id', producto.getProductid)

routes.patch('/:productid', producto.patch)

routes.delete('/:productid', producto.delProduct)

module.exports = routes;

