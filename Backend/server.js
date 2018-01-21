var express     = require('express');
var cors        = require('cors');
var http        = require('http');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var config      = require('./config');
var seed        = require('./seed');

var port = process.env.PORT || 8080;

mongoose.connect(config.mongo.uri, { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(cors());

require('./routes.js')(app);

seed();

var server = http.createServer(app);

server.listen(port);
console.log('Magic happens at http://localhost:' + port);
