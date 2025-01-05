/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// // function add(a,b){
// //   //Add function here
// //   return a + b;
// // }
// console.log(add(2,2))

// function sub(a, b){
//   //Subtract function here
//   return a - b;
// }
// console.log(sub(2,2));

// function div(a, b){
//   //Divide function here
//   return a / b;
// }
// console.log(div(2,2));

// function mul(a, b){
//   //Multiply function here
//   return a * b;
// }
// console.log(mul(2,2));


//ES6 Arrow functions

const add = (a,b) => a + b;
console.log(add(2,2));

const sub= (a, b) => a - b;
console.log(sub(2, 2));

const div = (a, b) => a / b;
console.log(div(2, 2));

const mul = (a, b) => a * b;
console.log(mul(2, 2))
console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/