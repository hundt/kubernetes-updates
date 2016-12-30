var http = require('http');
var handleRequest = function(request, response) {
    response.writeHead(200);
    response.end('backend v2 running on ' + process.env.HOSTNAME);
};
var www = http.createServer(handleRequest);
www.listen(8081);
