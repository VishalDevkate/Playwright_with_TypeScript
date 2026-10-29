"use strict";
var a = 10;
var b = 20, c = 30; // Declaring and initializing multiple variables
console.log(a, b, c); // Single line comment explaining the output of the variables
console.log("a"); //this will print a but not the value of a
let x = 100; // Using 'let' to declare a block-scoped variable
x = 200; // Reassigning the value of x
console.log(x); // Output: 200
//x = "World";  // compile time error because x is declared as a number type, but we are trying to assign a string value to it.
//console.log(x);  
var y = 300; // Using 'var' to declare a function-scoped variable
y = 400;
console.log(y); // Output: 400 
//y = "Hello";  // compile time error because y is declared as a number type, but we are trying to assign a string value to it.
const z = 500; // Using 'const' to declare a block-scoped constant variable
console.log(z); // Output: 500 
// z = 600;  // This will throw an error because 'const' variables cannot be reassigned
// console.log(z);  // This line will not be reached
// Difference between 'var' and 'let'
// 1. Demostrating the difference in declaration between 'var' and 'let'
var d = 700; // Using 'var' to declare a function-scoped variable
var d = 800; // Redeclaring the variable 'd' is allowed with 'var'
console.log(d); // Output: 800
let e = 900; // Using 'let' to declare a block-scoped variable
// let e = 1000;  // This will throw an error because 'let' variables cannot be redeclared in the same scope
console.log(e); // Output: 900
// 2. Demonstrating hoisting difference of 'var' and 'let'
// 'var' declarations are hoisted to the top of their scope, but not their initializations
// 'let' declarations are also hoisted, but they are not initialized until their definition is evaluated
console.log(f); // This will throw a error during compilation because 'f' is used before assignment
// will output undefined during runtime if run with tsx  
var f = 1000; // Using 'var' to declare a function-scoped variable
// console.log(g);  // This will throw a ReferenceError because 'g' is not accessible before its declaration
let g = 2000; // Using 'let' to declare a block-scoped variable
//3. Demonstrating scope differences between 'var' and 'let'
// 'var' is function-scoped, while 'let' is block-scoped
function testvarScope() {
    if (true) {
        var f = 1000;
        console.log(f); // Output: 1000
    }
    f = 2000; // 'f' is accessible here because 'var' is function-scoped
    console.log(f); // Output: 2000
}
testvarScope(); // Calling the function to demonstrate 'var' scope
function testletScope() {
    if (true) {
        let g = 3000;
        console.log(g); // Output: 3000
    }
    // g = 4000;  // 'g' is not accessible here because 'let' is block-scoped. This will throw an error if uncommented
}
testletScope(); // Calling the function to demonstrate 'let' scope
