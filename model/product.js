const mongoose = require('mongoose');

const producto = mongoose.Schema;

const product = new producto({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    cantidad:{
        type: Number,
        required: false
    }
});

module.exports = product;