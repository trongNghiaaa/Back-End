// var x = require('./child')
// const path = require('path');

// console.log(path.join(__dirname, './note.txt'))
var fs = require('fs')
const path = require('path')

// fs.readFile(path.join(__dirname, './note.txt'), 'utf-8', (err, data)=>{
//     console.log(data)
// })

let readStream = fs.createReadStream(path.join(__dirname,'note.txt'), 'utf-8', )
let writeStream = fs.createWriteStream(path.join(__dirname,'newnote.txt'), 'utf-8', )

readStream.on('data',(chunk)=>{
    writeStream.write(chunk)
})
readStream.on('')






