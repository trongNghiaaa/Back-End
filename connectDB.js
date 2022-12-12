const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/trongNghia');

const Schema = mongoose.Schema;
const Test = new Schema(
    {
        author: Schema.ObjectId,
        usename: String,
        password: String,
    },
    {
        collection: 'Test',
    },
);

const TestModel = mongoose.model('Test', Test);

TestModel.find({})
    .then((data) => {
        console.log('data',data);
    })
    .catch((err) => {
        console.log(err);
    });
