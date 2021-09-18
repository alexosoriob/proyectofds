var http = require('http');
http.createServer(function(req, res) {
    console.log('Iniciando el server');
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1>hola mundo' + req.url + '</h1>');
}).listen(5050);