
var http = require('http');

var options = {
	host:'d7kj.com',
	port:80,
	path:'/'
};

http.get(options, function(res){
	console.log(res.statusCode);
	if(200 == res.statusCode)
		console.log('The site is up!');
	else
		console.log('The site is down!');
}).on('error', function(e){
	console.log('There was an error: ' + e.message);
});
