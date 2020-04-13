const mongoose = require('mongoose');
const modelo = require('../model/product');

const Products = mongoose.model('Product', modelo);

const products = {};

products.addProduct = async (req, res) =>{
    let productoagregdo = new Products(req.body);
    productoagregdo.save()
    .then(data =>{
        console.log(data);
        res.status(201).json({
            message: "Producto Agregado",
        })
//        res.json(data);
    })
    .catch(err =>{
        res.status(409).json({
            message: err.message
        })
    })
};

products.getProduct = async (req, res )=>{
    const listaproductos = await Products.find()
    .select("name cantidad")
    .exec()
    .then(data =>{
        res.status(202).json(data);
    })
    .catch(err =>{
        res.status(404).json({
            message: "Lista de productos vacios"
        })
    })
    //res.json(listaproductos);
}

products.getProductid = async (req, res) =>{
    const id = req.params.id;
    //console.log(id);
    res.json(id);
}




module.exports = products;