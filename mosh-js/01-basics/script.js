//primitive types: string, number, boolean, null, undefined, symbol

//reference types: object, array, function

//object: key/value pairs, unordered, reference type
//think a thing with properties and methods. properties are the data, methods are the functions that can be performed on that data
let person = {
    name: 'Paige',
    age: 30,
    isCool: true,   
}

///array: ordered list, reference type - a collection where position matters. positions are called indexes. index starts at 0
//arrays can cotain any data type, including other arrays and objects
//arrays are mutable, meaning they can be changed after they are created
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
fruits[4] = 'grape';
fruits[3] = 'pineapple';

console.log(fruits);
const mixed = [1, 'apple', true, null, undefined];
//Adding/removing
// push()
// pop()
// shift()
// unshift()

Finding
// find()
// includes()
// indexOf()

Transforming
// map()
// filter()
// reduce()

Checking
// some()
// every()

Ordering
// sort()

//function: a block of code that can be called to perform a specific task. functions can take in parameters and return values. functions are first-class citizens in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
//parameter = placeholder
//argument = the actual value you give that placeholder
//function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

//function expression
const greet2 = function(name) {
    return `Hello, ${name}!`;
}

//arrow function
const greet3 = (name) => {
    return `Hello, ${name}!`;
}

//callback function: a function that is passed as an argument to another function and is executed after the parent function is completed. callbacks are used to handle asynchronous operations, such as fetching data from an API or reading a file. they can also be used to customize the behavior of a function by allowing the user to specify what should happen after the function is completed.