// Going over examples with functions

// Basic example
console.log("----- Basic example of functions -----");
function f1() {
  return 1;
}

let x = f1();
console.log(x);

function sum(num1, num2) {
  return num1 + num2;
}

let y = sum(1, 2);
console.log("The sum of 1 and 2 is", y);

// Example of invoking a function and getting the function definition/object back
console.log(
  "----- Example of invoking functions with and without using ()-----"
);
function subtract(num1, num2) {
  return num1 - num2;
}

console.log("This will get the function def/obj back:\n", subtract);
console.log("This will get the function return value back:", subtract(2, 1));

// Example of anonymous functions
console.log("----- Example of function expressions -----");
// Anonymous function
let z = function (n) {
  return n * n;
};
console.log("This gets back the function definition:\n", z);
console.log("This gets back the function value:", z(1));

// Named function
let a = function square(n) {
  return n * n;
};
console.log("This gets back the function definition:\n", a);
console.log("This gets back the function value:", a(1));

// Example of Immediately Invoked Function Expression (IIFE)
console.log(
  "----- Example of Immediately Invoked Function Expression (IIFE) -----"
);
// Named IIFE function
(function f3() {
  console.log("Inside IIFE function f3");
})();

// Anonymous IIFE function
(function () {
  console.log("Inside anonymous IIFE function");
})();
