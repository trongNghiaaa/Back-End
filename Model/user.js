const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/BaitapDB');
const UserSchema = new Schema(
    {
        name: String,
        age: Number,
        date: Date,
    },
    {
        collection: 'user',
    },
);

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
