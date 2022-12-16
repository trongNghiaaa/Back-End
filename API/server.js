const fs = require('fs');
const path = require('path');
const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-type': 'text' });
    response.write('<h1>oke </h1>');
    response.end();
}).listen(3030);
