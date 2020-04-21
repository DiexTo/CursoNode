const mongoose = require('mongoose');

const usuarios = mongoose.Schema;

const user = new usuarios({
    correo:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = user;