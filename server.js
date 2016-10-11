
var http = require('http'),
	url = require('url'),
	fs = require('fs');

var log = console.log;

var server = http.createServer(function(req, res){
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

server.listen(3000);
log('Server running at http://127.0.0.1:3000/');

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	log('User connected');
	socket.on('disconnect', function(){
		log('User disconnected');
	});
});
