"use strict";

console.log('------ Task First -------');

var first = "Hello";
var second = "World";

console.log(first + " " + second);

console.log('----- Task Second -----');

var multiply = function multiply(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return console.log("Result " + x + " * " + y + " = " + x * y);
};

multiply(2, 5);
multiply(6, 6);
multiply(9);

console.log('---- Task Third -----');

var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var result = 0;
    args.forEach(function (arg) {
        return result += arg;
    });
    console.log("Result = " + result / args.length);
};

average(1);
average(1, 3);
average(1, 3, 6, 6, 8);
average(1, 6, 2, 5, 5, 9);

console.log('----- Task Four -----');

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);

console.log('----- Task Five ------');

var data = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = data[2],
    lastName = data[4];


console.log("Name: " + firstName + " " + lastName);
