var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductCategorySchema = new Schema({
    name: { type: String, default: '', required: 'Please fill ProductCategory name', trim: true },
    description: { type: String, trim: true }, 
    created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now },
    subcategories: [{type: Schema.ObjectId}]
});

//module.exports = mongoose.model('ProductCategory', ProductCategorySchema);
module.exports = ProductCategorySchema;