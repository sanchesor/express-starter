var express  = require('express');
var app      = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.listen(8080);

app.get('/', function(req, res) {		
	res.status(200).json({'x': 'y1'});		
});

