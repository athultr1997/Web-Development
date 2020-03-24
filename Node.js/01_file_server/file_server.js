hostName = 'localhost'
port = 8080;

http = require('http');
url = require('url');
fs = require('fs')
url = require('url')

const server = http.createServer(function(req, res) {
	fileName = req.path

	fs.readFile()


	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.write();
	res.end();
});

server.listen(8080, hostName); 