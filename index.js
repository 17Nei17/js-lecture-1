// index.js
//console.log('hello world!');
const http = require ('http');
const fs = require ('fs');

const server = http.createServer(function (request, responce) {
    console.log(request.method, request.url);
    if (request.url == '/'){
       const content = fs.readFileSync ('index.html','utf8'); 
       responce.end(content); 
    }
    else if (request.url == '/style.css'){
        const content = fs.readFileSync ('style.css','utf8'); 
        responce.end(content); 
    }
})
server.listen(process.env.PORT || 3000 );
console.log('server started');