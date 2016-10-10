
var http = require('http'),
	urls = ['shapeshed.com', 'www.bbc.co.uk', 'edition.cnn.com'];
var _ = require('underscore');

function fetchPage(url){
	var start = new Date;
	http.get({host : url}, function(res){
		console.log('Got response from: ' + url);
		console.log('Request took:', new Date - start, 'ms');
	});
}

_.each(urls, fetchPage);
