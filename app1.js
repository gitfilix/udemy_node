// function constructor
var Emitter = require('./emitter.js');

var emtr = new Emitter();

// listerner 1
// property name greet
emtr.on('greet', function() {
    console.log("listerner 1: somewhere, someone said hello.");
});

// listerner 2
emtr.on('greet' , function() {
    console.log("listerner2: A greeting occured");
});


// console.log("Hello");
emtr.emit('greet');
