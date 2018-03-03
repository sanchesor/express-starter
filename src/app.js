var express  = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.listen(8080);

app.get('/', function(req, res) {		
	res.status(200).json({'x': 'y12345'});		
});

