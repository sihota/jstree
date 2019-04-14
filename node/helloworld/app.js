const http = require('http');

const hostname = '127.0.0.1'
const port = '3000';

const server = http.createServer( 
	(request,response) =>
	{
			response.statusCode = 200;
			response.setHeader('Content-Type','text/html');
			//response.send('<html><head><title>Hello World!</head><body><h1>Hello World!</h1></body></html>');
			response.end('<html><head><title>Hello World!</title></head><body><h1>Hello World!</h1></body></html>');
		
	}
);

server.listen(port,hostname,() =>
	{
		console.log(`Server is running at http://${hostname}:${port}/`);	
	}
);