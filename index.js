const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const server = http.createServer(function (request, response) {
	console.log('request ', request.url);

	let filePath = '.' + request.url;
	if (filePath == './') {
		filePath = './index.html';
	}
	const extname = String(path.extname(filePath)).toLowerCase();
	let contentType = 'text/html';
	const mimeTypes = {
		'.html': 'text/html',
		'.js': 'text/javascript',
		'.css': 'text/css',
		'.json': 'application/json',
		'.png': 'image/png',
		'.jpg': 'image/jpg',
		'.gif': 'image/gif',
		'.wav': 'audio/wav',
		'.mp4': 'video/mp4',
		'.woff': 'application/font-woff',
		'.ttf': 'application/font-ttf',
		'.eot': 'application/vnd.ms-fontobject',
		'.otf': 'application/font-otf',
		'.svg': 'application/image/svg+xml'
	};

	contentType = mimeTypes[extname] || 'application/octet-stream';

	fs.readFile(filePath, function(error, content) {
		if (error) {
			console.log('error', error);
			if(error.code == 'ENOENT'){
				response.writeHead(404, { 'Content-Type': contentType });
				response.end();
			}
			else {
				response.writeHead(500);
				response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
				response.end();
			}
		}
		else {
			response.writeHead(200, { 'Content-Type': contentType });
			response.end(content, 'utf-8');
		}
	});

});
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

server.listen(port);
console.log(`server started on ${port} port`);