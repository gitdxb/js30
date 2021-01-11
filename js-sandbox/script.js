function findBiggestFraction(a,b) {
    a > b ? console.log("a: ", a) : console.log("b: ", b);
}

var a = 3 / 4;
var b = 5 / 7;

findBiggestFraction();



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
