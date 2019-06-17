const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ColaboradorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    foto: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ColaboradorSchema.plugin(mongoosePaginate);
mongoose.model("Colaborador", ColaboradorSchema);