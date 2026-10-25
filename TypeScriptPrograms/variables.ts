var a = 10;
var b = 20, c = 30;  // Declaring and initializing multiple variables

console.log(a, b, c);  // Single line comment explaining the output of the variables
console.log("a");    //this will print a but not the value of a

let x = 100;  // Using 'let' to declare a block-scoped variable
x = 200;  // Reassigning the value of x
console.log(x);  // Output: 200
x = "World";  // Reassigning x to a string value is allowed in TypeScript since 'let' allows dynamic typing
console.log(x);  // Output: World

var y = 300;  // Using 'var' to declare a function-scoped variable
y = 400;
console.log(y);  // Output: 400 
y = "Hello";  // Reassigning y to a string value is allowed in TypeScript since 'var' allows dynamic typing
console.log(y);  // Output: Hello 

const z = 500;  // Using 'const' to declare a block-scoped constant variable
console.log(z);  // Output: 500 
// z = 600;  // This will throw an error because 'const' variables cannot be reassigned
// console.log(z);  // This line will not be reached


