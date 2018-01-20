var express     = require('express');
var http        = require('http');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var config      = require('./config');

var port = process.env.PORT || 8080;

mongoose.connect(config.mongo.uri, { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

require('./routes.js')(app);

var server = http.createServer(app);

server.listen(port);
console.log('Magic happens at http://localhost:' + port);
