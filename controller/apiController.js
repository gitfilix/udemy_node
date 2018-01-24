module.exports = function(app){

    app.get('/', function(req, res) {
        res.render('index');
    });


    app.get('/api/person/:id', function(req, res) {
        res.render('person', { ID: req.params.id, Qstr: req.query.qstr })
    });


    // POST: urlencodedParser as a callback
    app.post('/api/thanks', function(req, res) {
        res.send('Thank you for sending');
        console.log("req.body", req.body.firstname);
        console.log("req.body", req.body.lastname);
    });

    // get  POST with jsonParser
    app.post('/api/personjson', function(req, res) {
        res.send('Thank you for the nice json');
        console.log("req.body", req.body.firstname);
        console.log("req.body", req.body.lastname);
    });

    app.delete('/api/person/:id', function(req, res) {
        // delet from db
    });
}
