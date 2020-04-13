const mongoose = require('mongoose');
const _URI = 'mongodb://localhost/productos';

mongoose.connect(_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('BD Funcionando'))
    .catch(err => console.log(err));


module.exports = mongoose;

