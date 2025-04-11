const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  Id_Categoria: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  Titulo: { type: String, required: true },
  Descripcion: { type: String },
});

module.exports = CategoriaSchema; // embebido
