const mongoose = require('./connectDB')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const classesSchema = new Schema({
    id: ObjectId,
    name: String,
    student: Number
},{
    collection: 'classes'
})

const classesModel = mongoose.model('classes', classesSchema)

// classesModel.updateOne({name:"lop5"},{student: 31})
// .then(data => console.log(data))
// .catch(err => console.log(err))



module.exports = classesModel;