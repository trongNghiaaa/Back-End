const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/BaitapDB', () => {
    console.log('đã kết nối Database thành công');
});

const Schema = mongoose.Schema;
const shop = new Schema({
    name : String
   
},{collection: 'shop'})

const ShopModel = mongoose.model('Shop', shop)


ShopModel.find({})
.then(data=>{
    console.log(data)
})
.catch(err =>{
    console.log(err)
})