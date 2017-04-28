var mongoose = require('mongoose');

var productoSchema = new mongoose.Schema({
  descripcionCorta: String,
  descripcionLarga: String,
  completo: Boolean,
  precioMin: Integer,
  precioMax: Integer,
  foto: String,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('producto', productoSchema);
