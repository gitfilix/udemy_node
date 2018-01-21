var express = require('express');

var app = express();

// environment variable for standard
var port = process.env.PORT || 3000;

// middleware: assets will be provided in folder /public
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request URL:' +req.url);
    next();
});

// static file
app.get('/', function(req, res) {
    res.send('<html><body><head><link href=assets/styles.css rel=stylesheet /></head><h2>hi there!</h2></body></html>')
});

// dynamic id or name
app.get('/person/:id', function(req, res) {
    res.send('<html><body><head></head><h2>Person: '+ req.params.id +' </h2></body></html>')
});

// json
app.get('/api', function(req, res) {
    res.json({
        firstname: 'filix',
        lastname: 'adamyski'
    })
})





// standard port
app.listen(port);
