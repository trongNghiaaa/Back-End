const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
const { execFile, exec, spawn } = require('child_process');
const cliProgress = require('cli-progress');
const chalk = require('chalk')
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color




// console.log(error('Error!'));
// console.log(warning('Warning!'));



const server = http.createServer((request, response) => {
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
            if (data) {
                response.writeHead(200, { 'Content-type': 'text' }, 'utf-8');
                response.write(data, 'utf-8');
                response.end();
            }
        });
    }).listen(3000, () => {
        console.log('Server đã khởi tạo thành công');
        setTimeout(() => {
            exec('start chrome "http://localhost:3000/"');
        }, 1000);
        //  spawn('C:\\Program Files\\Google\\Chrome\\Application\\Chrome.exe ', ['-new-tab', 'http://localhost:3000/']);
    });

// var url_to_open = 'http://http://localhost:3000/';
// spawn('C:\\Program Files\\Google\\Chrome\\Application\\Chrome.exe ' , ['-new-tab', 'http://http://localhost:3000/']);
