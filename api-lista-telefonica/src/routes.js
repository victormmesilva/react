const express = require('express');
const routes = express.Router();
const ColaboradorController = require('./controllers/ColaboradorController');

routes.get('/colaboradores', ColaboradorController.index);
routes.post('/colaboradores', ColaboradorController.store);
routes.get('/colaboradores/:id', ColaboradorController.show);
routes.put('/colaboradores/:id', ColaboradorController.update);
routes.delete('/colaboradores/:id', ColaboradorController.destroy);

module.exports = routes;