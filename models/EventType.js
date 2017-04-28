var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var ProductCategorySchema = mongoose.model('ProductCategory').schema
var ProductCategorySchema = require('./ProductCategory')

var EventTypeSchema = new Schema({
	name: { type: String, default: '', required: 'Please fill EventType name', trim: true },
  	description: { type: String, trim: true }, 
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now },
  	productCategories: [ProductCategorySchema]
});

// The first argument is the singular name of the collection your model is for. 
// Mongoose automatically looks for the plural version of your model name. Thus, for example, the model EventType is for the eventTypes collection in the database.
module.exports = mongoose.model('EventType', EventTypeSchema);

// Para  salvar un eventType en productCategorias se pueden poner instancias de ProductCategory o poner directamente el json (siempre dentro de un arreglo)
