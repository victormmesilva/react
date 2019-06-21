const mongoose = require('mongoose');
const Colaborador = mongoose.model('Colaborador');

module.exports = {
    async index(req, res) {
        //const { page = 1 } = req.query;
        const colaboradores = await Colaborador.find();
        //const colaboradores = await Colaborador.paginate({}, { page, limit: 10 });

        return res.json(colaboradores);
    },

    async store(req, res) {
        const colaborador = await Colaborador.create(req.body);
        
        return res.json(colaborador);
    },

    async show(req, res) {
        const colaborador = await Colaborador.findById(req.params.id);

        return res.json(colaborador);
    },

    async update(req, res) {
        const colaborador = await Colaborador.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(colaborador);
    },

    async destroy(req, res) {
        const colaborador = await Colaborador.findByIdAndDelete(req.params.id);

        return res.json(colaborador);
    }    
}