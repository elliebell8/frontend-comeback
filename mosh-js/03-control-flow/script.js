// expressions and statements
// expressions produce values
// statements perform actions

//if (condition) {
//    do something
// } else if (condition) {
//   // do something else
// } else {
//   // do something else
// }

// expression
let x = 1 + 2;

// statement
if (x > 0) {
  console.log('x is positive');
}

// expression statement
let y = x * 2;

// statement
for (let i = 0; i < 5; i++) {
  console.log(i);
} 
let hour = 10;
if (hour >= 6 && hour <= 12) {
    console.log('Good morning!');
} else if (hour >= 12 && hour <= 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}

//switch and case you can compare a value of a variable against multiple cases

//for loops are used to repeat a block of code a certain number of times
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loops are used to repeat a block of code while a certain condition is true
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//do while loops are similar to while loops, but they will always execute the block of code at least once
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

//for in and for of loops are used to iterate over the properties of an object or the elements of an array
let person = {name: 'John', age: 30, city: 'New York'}; 
for (let key in person) {
    console.log(key, person[key]);
} //this key variable in the loop will hold the name of one of the properties of the person object, and we can use that key to access the value of that property using bracket notation.

// for of loop
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
} //this color variable in the loop will hold the value of one of the elements of the colors array, and we can use that value directly in the loop.

//for in for object keys and for of for array values, and classi for loop when you want control over the index. 

//a for in loop on an array gives you the arrays index keys as a string, not the values. So if you want to iterate over the values of an array, use a for of loop instead.

//break and continue statements are used to control the flow of a loop. The break statement will exit the loop entirely, while the continue statement will skip the current iteration and move on to the next one.
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
} //this will print 0, 1, 2 and then exit the loop when i is equal to 3

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
} //this will print 0, 1, 2, 4 and skip the iteration when i is equal to 3

function max(a, b) {
    return (a > b) ? a : b; //conditional operator, if a is greater than b return a else return b

    //if (a > b) {
    //    return a;
    //} else {
    //    return b;
    //} same as above but using if else statement
}
 console.log(max(5, 10)); // this will print 10

 function isLandscape(width, height) {
    return(width > height) ? true : false;
    // you dont need the conditional operator here, you can just return the expression itself because it will evaluate to true or false. the function can be simplified to:
    // return width > height;   
 }
console.log(isLandscape(900, 800));

function fizzBuzz(input) {
if (input % 3 === 0 && input % 5 === 0) {
    return 'fizzBBuzz';
}
}
fizzBuzz(3); // this will return 'fizzBuzz' because 15 is divisible by both 3 and 5