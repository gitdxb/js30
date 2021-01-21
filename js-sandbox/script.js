// Closure
function giveMeEms(pixels) {
    var baseValue = 16;

    function doTheMath() {
        return pixels / baseValue;
    }

    return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("Large size: ", largeSize());
console.log("X large size: ", xlargeSize());
// function Course(title, instructor, level, published, views) {
//     this.title = title;
//     this.instructor = instructor;
//     this.level = level;
//     this.published = published;
//     this.views = views;
//     this.updateViews = function () {
//         return ++this.views;
//     };
// }

// var courses = [
//     new Course("The JS essential training", "Morten RH", 1, true, 0),
//     new Course("Up and running with ECMAScript 6", "Eve", 2, true, 1234)
// ]

// console.log(courses[1].updateViews()); 

// var course = new Object();
// var course = {
//     title: "JS essential training",
//     instructor: "Morten RH",
//     level: 1,
//     published: true,
//     views: 0,
//     updateViews: function () {
//         return ++course.views;
//     }
// }
// console.log(course.views);
// course.updateViews();
// console.log(course.views);

// Const and let
// const MYCONSTANT = 5;
// console.log(MYCONSTANT);
// Anomynous function
// var a = 5 / 7;
// var b = 18 / 25;

// var theBiggest = function () {
//     var result;
//     a > b ? result = ["a", a] : result = ["b: ", b];
//     console.log(result);
//     // return result;
// }

// when calling anomy funct shoud add ()
//theBiggest();
//console.log(theBiggest());

// function findBiggestFraction(a, b) {
//     var result;
//     a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];
//     return result;
// }

// var firstFraction = 3 / 4;
// var secondFraction = 5 / 7;

// var fractionResult = findBiggestFraction(firstFraction, secondFraction);

// console.log("Frist fraction result: ", firstFraction);
// console.log("Second fraction result: ", secondFraction);
// console.log("Fraction " + fractionResult[0] + " wuth a value of " + fractionResult[1] + " is the biggest fraction.");

// function findBiggestFraction(a,b) {
//     a > b ? console.log("a: ", a) : console.log("b: ", b);
// }

// var a = 3 / 4;
// var b = 5 / 7;

// findBiggestFraction(a, b);



// Regular function, called explicitly by name
// function multiply() {
//     var result = 3 * 4;
//     console.log("3 multiply by 4 is ", result);
// }
// multiply();

// Anonymous function stored in variable
// Invoked by calling the variable as a function
// var divided = function () {
//     var result = 3 / 4;
//     console.log("3 divide by 4 is ", result);
// }
// divided();

// Immdediately invoked func expression
// Run as soon as the browser finds it:
// (function () {
//     var result = 12 / 0.75;
//     console.log("12 divided by 0.75 is ", result);
// }())

// function nhanHaiSo(a, b) {
//     var ketQua = a * b;
//     console.log(ketQua);
//     return ketQua;
// }

// var multiplied = nhanHaiSo(3, 4);

/* JS  data types:
1. Numeric
2. String
3. null
4. Boolean: true/false
5. undefined => a var without set to anything */


// var a, b, sum;
// a = 4;
// b = 5;
// sum = a + b;

// var humanSum = "The value of a: " + a + ". The value of b: " + b + ". The sum of a and b: " + sum + ".";
// console.log(humanSum);

// Conditional statement
// var a = 5;
// var b = "5";
// var theNumbersMatch;

// if (a === b) {
//     theNumbersMatch = true;
// } else {
//     theNumbersMatch = false;
// }

// console.log("The numbers match: " + theNumbersMatch);

// Ternary Operator
// condition ? true: false
// a == b ? theNumbersMatch = true : theNumbersMatch = false;

// var pens;
// pens = ["red", "blue", "green", "orange"];
// console.log("Before: ", pens);

// Properties
// Get a property of an object by name
// console.log("Array length: ", pens.length);

// METHODS
// Reverse the array
//pens.reverse();


// Remove the first array
// pens.shift();

// Add comma separated list of values to the front of array
//pens.unshift("purple", "black");

// Remove the last item:
//pens.pop();

// Remove a specific item in the list:
//pens.splice(2, 1);

// Add value to the last pos of the array
//pens.push("pink", "prussian blue");

//console.log("After: ", pens);

// Create a copy of an array. Assign to a new var
// var newPens = pens.slice();
// console.log("New pens: ", newPens);


// Return the first element that match the search 
// var result = pens.indexOf("orange", 0);
// console.log("The value is: ", pens[result]);

// Return the items in an array as a comma separated:
// var arrayString = pens.join(", ");
// console.log("String from array: ", arrayString);
