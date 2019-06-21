const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Iniciando o db
mongoose.connect('mongodb://localhost:27017/api-lista-telefonica', { useNewUrlParser: true });
requireDir('./src/models');

//const Product = mongoose.model('Product');

//Rota coringa, recebe e encaminha p routes
app.use('/api', require('./src/routes'));

app.listen(3001);
