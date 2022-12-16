const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/BaitapDB');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema(
    {
        listPrroduct: [
            {
                idProduct: {
                    type: String,
                    ref: 'product',
                },
                amount: Number,
            },
        ],
        customer: {
            type:    String,
            ref: 'user',
        },
    },
    {
        collection: 'order',
    },
);

const OrderModel = mongoose.model('Order', OrderSchema);
module.exports = OrderModel;
