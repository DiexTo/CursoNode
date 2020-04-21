const mongoose = require('mongoose');
const express = require('express');
const modelo = require('../model/user');
const multer = require('multer');
const bcrypt = require('bcrypt');
const routes = express.Router();

const Users = mongoose.model('Users', modelo);
const usuarios = {};

var user;

routes.post('/', async (req, res) => {
    // Buscar si el correo/usuario existe; Sino existe crearlo; si existe, mandar mensaje de usuario existente.
    let user = Users.find({
        telefono: req.body.telefono
    }).exec()
    .then(user => {
        if(user.length > 0){
            return res.status(400).json({
                message: 'Telefono existente'
            });
        }
        else{
            bcrypt.hash(req.body.password, 10, (err, hash) =>{
                if(err){
                    return res.status(500).json({
                        error: err
                    });
                }
                else
                {
                    user = new Users({
                        _id: new mongoose.Types.ObjectId(),
                        correo: req.body.correo,
                        password: hash,
                        telefono: req.body.telefono
                    });
                    user.save()
                    .then(data =>{
                        console.log(data);
                        res.status(201).json({
                            message: "Usuario Registrado",
                        });
                    })
                    .catch(err =>{
                        res.status(409).json({
                            message: err.message
                            });
                        })
                }
            });
        }
    })
    .catch(err => {
        json.status(400).json({
            error: err
        })
    })
});

module.exports = routes;