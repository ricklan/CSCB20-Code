// Going over examples with let, var, const, undeclared variables and hoisting

// Example of var and function scope
// function f1() {
//   console.log("----- Example of function scope and var -----");
//   if (1 < 2) {
//     var x = 1;
//   }
//   console.log("The value of x is: ", x); // Return 1
// }

// f1();

// Example of let and block scope
// function f2() {
//   console.log("----- Example of block scope and let -----");
//   if (1 < 2) {
//     let x = 1;
//     console.log("The value of x inside the if statement is: ", x);
//   }
//   console.log("The value of x outside the if statement is: ", x); // Return an error
// }

// f2();

// Example of const and let
// function f3() {
//   console.log("----- Example of const and let-----");
//   // const a; // Causes an error because its not initalized
//   let x;
//   console.log("The value of x is: ", x); // Returns undefined
//   const array = [1, 2, 3, 4, 5, 6];
//   // array = [1]; // Causes an error
//   array[1] = 5;
//   console.log("The elements of the array is:", array);

//   const object = { a: 1, b: 2 };
//   // object = { c: 5 }; // Causes an error
//   object["a"] = 5;
//   object["c"] = 9;
//   console.log("The elements of the object is:", object);

//   const c = 3;
//   c = 4; // Cause an error
// }

// f3();

// Example of undeclared variable
// function f4() {
//   console.log("----- Example of undeclared variable-----");
//   a = 1;
// }

// f4();
// console.log("The value of undeclared var a is: ", a);

// Example of global variable/global scope
// let b = 1;
// function f5() {
//   console.log("----- Example of global variable/global scope-----");
//   console.log("The value of global var b is: ", b);
// }

// f5();
// console.log("The value of global var b is: ", b);

// Example of hoisting
// function f6() {
//   console.log("----- Example of hoisting-----");
//   console.log("The value of x is:", x); // Returns undefined
//   if (true) {
//     console.log("The value of y is:", y); // Give an error
//     var x = 1;
//     let y = 1;
//   }
// }

// f6();
