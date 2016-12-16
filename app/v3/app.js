var http = require('http');
var handleRequest = function(request, response) {
    if (request.url == '/health') {
        response.writeHead(500);
        response.end();
        return;
    }
    response.writeHead(200);
    response.end('v3 running on ' + process.env.HOSTNAME);
};
var www = http.createServer(handleRequest);
www.listen(8080);
