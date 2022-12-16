const ProductModel = require('./product');

// function getDataPage(page, limit) {
//     ProductModel.find({})
//         .skip((page -1)*limit)
//         .limit(limit)
//         .then((data) => {
//             console.log('uyuyu', data);
//         });
// }

// getDataPage(1, 10);

// ProductModel.find({})
//     .sort({ 'option.price': -1 }).limit(10)

//     .then((data) => {
//         console.log(data);
//     });

ProductModel.find({
    'option.quantity': { $lt: 5 },
}).then((data) => {
    console.log(data);
});
