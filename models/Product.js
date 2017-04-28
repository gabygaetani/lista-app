var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: { type: String, default: '', required: 'Please fill ProductCategory name', trim: true },
    description: { type: String, trim: true }, 
    created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now },
  	productCategory: { type: Schema.ObjectId },
  	// Como las categorias estan dentro de los tipos de eventos, imagino que los ids se pueden repetir en distintos tipos de evento, por eso agregue el eventType
  	eventType: {
    	type: Schema.ObjectId,
    	ref: 'EventType'
  	}
});

// The first argument is the singular name of the collection your model is for. 
// Mongoose automatically looks for the plural version of your model name. Thus, for example, the model EventType is for the eventTypes collection in the database.
module.exports = mongoose.model('Product', ProductSchema);