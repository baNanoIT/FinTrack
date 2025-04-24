const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Importar subdocumentos
const DivisaSchema = require('./Divisa');
const CategoriaSchema = require('./Categoria');
const PresupuestoSchema = require('./Presupuesto');
const TransaccionSchema = require('./Transaccion');
const MovimientoSchema = require('./Movimiento');

const UsuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  nombres: { type: String, required: true },
  apellido_paterno: { type: String },
  apellido_materno: { type: String },
  numero_telefono: { type: String },
  monto_inicial: { type: Number },
  notificacion: { type: Boolean, default: false },

  tipo_divisa: [DivisaSchema],
  Categorias: [CategoriaSchema],
  Presupuestos: [PresupuestoSchema],
  Transacciones: [TransaccionSchema],
  Movimientos: [MovimientoSchema]
});

// Encriptar contraseña
UsuarioSchema.pre('save', async function (next) {
  if (!this.isModified('contraseña')) return next();
  const salt = await bcrypt.genSalt(10);
  this.contraseña = await bcrypt.hash(this.contraseña, salt);
  next();
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
