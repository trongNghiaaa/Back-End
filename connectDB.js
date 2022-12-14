const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/trongNghia');

const Schema = mongoose.Schema;
const Test2 = new Schema(
    {
        username: String,
        password: String,
        age: String,
    },
    {
        collection: 'Test2',
    },
);

const TestModel = mongoose.model('Test2', Test2);

TestModel.updateOne(
    {
        password: '000',
    },
    {
        password: '222',
    },
)
    .then((data) => {
        console.log('data', data);
    })
    .catch((err) => {
        console.log(err);
    });
