const express = require('express');
const ordenrt = express.Router();

ordenrt.get('/', (req, res) =>{
    res.send('Hola estas en orden de compra')
});

module.exports = ordenrt;