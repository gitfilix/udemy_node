var express = require('express');
// extra module bodyParser
// var bodyParser = require('body-parser');

var app = express();

// get modules from apiController
var apiController = require( './controller/apiController');
// get modules from htmlController
var htmlController = require( './controller/htmlController');

// environment variable for standard
var port = process.env.PORT || 3000;

// // for POST requestsvar ulr
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// // for submitting json formated POST submits
// var jsonParser = bodyParser.json();


// middleware: assets will be provided in folder /public
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request URL:' +req.url);
    next();
});
// ejs view-engine middleware
app.set('view engine', 'ejs');


// ejx render file
app.get('/', function(req, res) {
    res.render('index', { ID: req.params.id});
})

// json
app.get('/api', function(req, res) {
    res.json({
        firstname: 'filix',
        lastname: 'adamyski'
    })
})


htmlController(app);

apiController(app);

// standard port
app.listen(port);
