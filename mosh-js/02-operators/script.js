// types of operators
//arithmetic operators, 
let x = 10;
let y = 3;

console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // modulus (remainder)
console.log(x ** y); // exponentiation
console.log(++x); // increment
console.log(--y); // decrement

// assignment operators, 
x += 5; // equivalent to x = x + 5
x -= 5; // equivalent to x = x - 5
x *= 5; // equivalent to x = x * 5
x /= 5; // equivalent to x = x / 5
x %= 5; // equivalent to x = x % 5
x **= 5; // equivalent to x = x ** 5

// comparison operators, 
console.log(x == y); // equal
console.log(x === y); // strictly equal
console.log(x != y); // not equal
console.log(x !== y); // strictly not equal
console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x >= y); // greater than or equal
console.log(x <= y); // less than or equal
//ternary operator,
let age = 20;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote); // Yes

// logical operators, 
console.log(x && y); // logical AND
console.log(x || y); // logical OR
console.log(!x); // logical NOT
//truthy and falsy values
//falsy 
//undifined, null, 0, false, '', NaN
//truthy
//everything else is truthy 
let a = 0; // falsy
let b = 1; // truthy
console.log(a || b); // returns 1 (truthy)
console.log(a && b); // returns 0 (falsy)
// bitwise operators
console.log(x & y); // bitwise AND
console.log(x | y); // bitwise OR
console.log(x ^ y); // bitwise XOR
console.log(~x); // bitwise NOT

//operator precedence
let result = 10 + 5 * 2; // multiplication has higher precedence than addition
console.log(result); // 20

result = (10 + 5) * 2; // parentheses have the highest precedence
console.log(result); // 30

let c = 'red';
let d = 'blue';

d = c; // assignment operator has lower precedence than comparison operators
console.log(c);
console.log(d);