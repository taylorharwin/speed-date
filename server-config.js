var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.end('index.html');
});


