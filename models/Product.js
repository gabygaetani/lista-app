var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: { type: String, default: '', required: 'Please fill ProductCategory name', trim: true }, // descripcion corta del producto
    description: { type: String, trim: true, default: '' }, // descripcion larga del producto
    picture: { type: String, default: ''},
    minprice: { type: Number, default: 0}, // indica el valor inferior del rango de precio
    maxprice: { type: Number, default: 0}, // indica el valor superior del rango de precio
    completed: { type: Boolean, default: Boolean.true}, // indica si el regalo es total o parcial
    created_at: { type: Date, default: Date.now }, // fecha creación. Control de cambios
  	updated_at: { type: Date, default: Date.now }, // fecha actualización. Control de cambios
    
  /*	productCategory: { type: Schema.ObjectId }, // categoría a la que pertenece el producto
  	// Como las categorias estan dentro de los tipos de eventos, imagino que los ids se pueden repetir en distintos tipos de evento, por eso agregue el eventType
  	eventType: {
    	type: Schema.ObjectId,
    	ref: 'EventType'
  	}*/
    
});

// The first argument is the singular name of the collection your model is for. 
// Mongoose automatically looks for the plural version of your model name. Thus, for example, the model EventType is for the eventTypes collection in the database.
module.exports = mongoose.model('Product', ProductSchema);
