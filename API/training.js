// var x = require('./child')
// const path = require('path');

// console.log(path.join(__dirname, './note.txt'))

const path = require('path');
const fs = require('fs');

const http = require('http');
const url = require('url');
const { execFile, exec ,spawn} = require('child_process');

// // fs.readFile(path.join(__dirname, './note.txt'), 'utf-8', (err, data)=>{
// //     console.log(data)
// // })

// let readStream = fs.createReadStream(path.join(__dirname,'note.txt'), 'utf-8', )
// let writeStream = fs.createWriteStream(path.join(__dirname,'newnote.txt'), 'utf-8', )

// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk)
// })
// readStream.on('')

// var url_to_open = 'http://http://localhost:3000/'
// spawn('C:\\Program Files\\Google\\Chrome\\Application\\Chrome.exe', ['-new-tab', url_to_open]) 
   
