
var http = require('http'),
	url = require('url'),
	fs = require('fs');

var s = http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	if(pathname === '/'){
		fs.readFile('./index.html', function(error, data){
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(data, 'utf-8');
		});
	}else if(pathname === '/about'){
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.end('About Us\n');		
	}else if(pathname === '/redirect'){
		res.writeHead(301, {'Location':'/'});
		res.end('About Us\n');		
	}else{
		res.writeHead(404, {'Content-Type':'text/plain'});
		res.end('Page Not Found!\n');		
	}
});

s.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
