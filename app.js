// object property and methods

var obj = {
    greet: 'Hello there',
    saybey: 'Tschüessikovski'
}

console.log(obj.greet);

// or
console.log(obj['saybey']);

// functions and arrays
var arr = [];

arr.push(function () {
    console.log("hi, i am a function 1");
});

arr.push(function () {
    console.log("hi, i am a function 2");
});

arr.push(function () {
    console.log("hi, i am a function 4");
});

// execute every funtion in arr within a forEach loop
arr.forEach(function(item) {
    item();
});

// console.log("array contains", arr);
