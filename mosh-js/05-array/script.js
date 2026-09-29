//arrays - adding new elements, finding elements, removing elements, splitting arrays and combining arrays

const numbers = [1, 2, 3, 4];   

// end
numbers.push(5, 6); // adds 5 and 6 to the end of the array
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// beginning
numbers.unshift(-1, 0); // adds -1 and 0 to the beginning of the array
console.log(numbers); // [-1, 0, 1, 2, 3, 4, 5, 6]

// middle splice(index, number of elements to remove, elements to add)
numbers.splice(2, 0, 'a', 'b'); // adds 'a' and 'b' at index 2
console.log(numbers); // [-1, 0, 'a', 'b', 1, 2, 3, 4, 5, 6]    

//finding elements
console.log(numbers.indexOf(1)); // 4
console.log(numbers.lastIndexOf(1)); // 4
console.log(numbers.includes(100)); // false

//finding reference types
// the find method returns the value or the first element in the array that satisfies the provided testing function
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course = courses.find(function(course) {
    return course.name === 'a';
});
console.log(course); // { id: 1, name: 'a' }

//arrow function
const course2 = courses.find(course => course.name === 'b');
console.log(course2); // { id: 2, name: 'b' }

//removing elements
//end
const last = numbers.pop(); // removes the last element from the array
console.log(last); // 6
console.log(numbers); // [-1, 0, 'a', 'b', 1, 2, 3, 4, 5]

//beginning
const first = numbers.shift(); // removes the first element from the array
console.log(first); // -1
console.log(numbers); // [0, 'a', 'b', 1, 2, 3, 4, 5]

//middle
numbers.splice(2, 2); // removes 2 elements starting from index 2
console.log(numbers); // [0, 'a', 3, 4, 5]  

//emptying an array
let numbers2 = [1, 2, 3, 4, 5];
let another = numbers2;

//solution 1
numbers2 = []; // this will not affect the 'another' variable
console.log(numbers2); // []
console.log(another); // [1, 2, 3, 4, 5]

//solution 2
numbers2.length = 0; // this will affect the 'another' variable
console.log(numbers2); // []
console.log(another); // []

//solution 3
numbers2.splice(0, numbers2.length); // this will affect the 'another' variable
console.log(numbers2); // []
console.log(another); // []

// combining and slicing arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

//combining arrays
const combined = first.concat(second);
console.log(combined); // [1, 2, 3, 4, 5, 6]

//slicing arrays
const slice = combined.slice(2, 4); // returns a new array with elements from index 2 to index 4 (not including index 4)
console.log(slice); // [3, 4]   

//spread operator
const combined2 = [...first, ...second];
console.log(combined2); // [1, 2, 3, 4, 5, 6]

const copy = [...combined2];
console.log(copy); // [1, 2, 3, 4, 5, 6]

//iterating an array
const numbers3 = [1, 2, 3];

//for-of loop
for (let number of numbers3) {
    console.log(number); // 1, 2, 3
}

//forEach method
numbers3.forEach(function(number) {
    console.log(number); // 1, 2, 3
});

//arrow function
numbers3.forEach(number => console.log(number)); // 1, 2, 3

//joining arrays
const joined = numbers3.join(','); // joins the elements of the array into a string separated by ','
console.log(joined); // "1,2,3"

//splitting a string into an array
const message = 'This is my first message';
const parts = message.split(' '); // splits the string into an array of words
console.log(parts); // ["This", "is", "my", "first", "message"]

//sorting an array
const numbers4 = [2, 3, 1];
numbers4.sort(); // sorts the array in ascending order
console.log(numbers4); // [1, 2, 3]

//reversing an array
numbers4.reverse(); // reverses the order of the elements in the array
console.log(numbers4); // [3, 2, 1]

//filtering an array
const numbers5 = [1, -1, 2, 3];
const filtered = numbers5.filter(n => n >= 0); // returns a new array with elements that satisfy the condition
console.log(filtered); // [1, 2, 3]

//mapping an array
const items = filtered.map(n => '<li>' + n + '</li>'); // returns a new array with the results of calling a function on every element
console.log(items); // ["<li>1</li>", "<li>2</li>", "<li>3</li>"]

//reducing an array
const sum = numbers5.reduce((accumulator, currentValue) => accumulator + currentValue); // reduces the array to a single value
console.log(sum); // 5

//combining all methods
const combined2 = numbers5
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
console.log(combined2); // 6    

//If an array contains primitive values (numbers, strings, booleans), a sliced array has its own copy of those values.

//But if an array contains objects, the new array contains references to the same objects.