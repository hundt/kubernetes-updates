var http = require('http');
console.log('Backend is', process.env.BACKEND_URL);
var handleRequest = function(request, response) {
    response.writeHead(200);
    response.write('v1 running on ' + process.env.HOSTNAME);
	http.get(process.env.BACKEND_URL, function(res) {
	    var data = '';
	    res.on('data', function (chunk) {
	        data += chunk;
	    });
	    res.on('end', function () {
	        response.end('; ' + data);
	    });
	}).on('error', function() {
		response.end('; ERROR calling backend');
	});
};
var www = http.createServer(handleRequest);
www.listen(8080);
