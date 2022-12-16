const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/BaitapDB');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
        name : String,
       img: String
    },{
        collection: 'category',
    },
);

const CategoryModel = mongoose.model('Category', CategorySchema);
module.exports = CategoryModel;