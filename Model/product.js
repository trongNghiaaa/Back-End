const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/BaitapDB');
const ProductSchema = new Schema(
    {
        name: String,
        categoryId: {
            type: String,
            ref: 'category',
        },
        Option: [
            {
                price: Number,
                optionName: String,
                quantity: Number,
            },
        ],
        date: Date,
    },
    {
        collection: 'product',
    },
);

const ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel;
