// Going over basic JS examples

// This is a comment

/* 
This is a multi-line comment
*/

// Printing using console.log()
console.log(123);
console.log("hi");

// Create a bunch of variables and use typeof function to see their type
let a = 1;
let b = 1.5;
let c = "hi";
let d = true;
let e = [1, 2, 3, 4, 5];
let f = { a: 1, b: 2 };

console.log("----- typeof Examples -----");
console.log(typeof a); // Number
console.log(typeof b); // Number
console.log(typeof c); // String
console.log(typeof d); // Boolean
console.log(typeof e); // Object
console.log(typeof f); // Object

// while loop example
console.log("----- While Loop Example -----");
let i = 0;
while (i < 10) {
  console.log("While loop: " + i);
  i++;
}

// do while loop example
console.log("----- Do While Loop Example -----");
do {
  console.log("Made it");
} while (false);

// for loop example
console.log("----- For Loop Example -----");
for (let i = 0; i < 10; i++) {
  console.log("For loop: " + i);
}

// for of loop example
console.log("----- For Of Loop Example -----");
for (let element of e) {
  console.log("Element in array e: " + element);
}

// for in loop example
console.log("----- For In Loop Example -----");
for (let key in f) {
  console.log("Key-value pairs in object e: " + key + " " + f[key]);
}
