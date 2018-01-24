module.exports = function(app) {


    // for POST requestsvar ulr
    // var urlencodedParser = bodyParser.urlencoded({ extended: false });
    // for submitting json formated POST submits
    // var jsonParser = bodyParser.json();

    app.get('/', function(req, res) {
        res.render('index');
    });


    app.get('/person/:id', function(req, res) {
        res.render('person', { ID: req.params.id, Qstr: req.query.qstr })
    });

    // POST: urlencodedParser as a callback
    app.post('/thanks', function(req, res) {
        res.send('Thank you for sending');
        console.log("req.body", req.body.firstname);
        console.log("req.body", req.body.lastname);
    });

    // get  POST with jsonParser
    app.post('/personjson', function(req, res) {
        res.send('Thank you for the nice json');
        console.log("req.body", req.body.firstname);
        console.log("req.body", req.body.lastname);
    });

    app.delete('/api/person/:id', function(req, res) {
        // delet from db
    });
}
