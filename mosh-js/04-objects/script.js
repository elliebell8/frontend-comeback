//Objects
// object-oriented programming OOP focuses on creating objects that contain both data and behavior. Objects are a way to group related data and functions together, making it easier to manage and organize code. In JavaScript, objects can be created using object literals, constructors, or classes.
// functions in objects are called methods. Methods are functions that are associated with an object and can be called using the dot notation. For example, if we have an object called person with a method called greet, we can call the greet method like this: person.greet().

const circle = {
    radius: 1,
    location: {
        x: 1,
        y:1,
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
}

// factory functions vs constructor functions
// Factory functions are functions that return objects. They are a simple way to create multiple instances of an object without using the new keyword. For example, we can create a factory function called createCircle that returns a circle object:

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);

function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    }
}

const adress1 = createAddress('123 Gally Way', 'Los Angeles', '90001');

console.log(adress1); // { street: '123 Gally Way', city: 'Los Angeles', zipcode: '90001' }

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new Address('a', 'b', 'c');
const address3 = new Address('a', 'b', 'c');

function areEqual(address2, address3) {
return address2 === address3;
}

function areSame(address2, address3) {
    return address2.street === address3.street &&
           address2.city === address3.city &&
           address2.zipCode === address3.zipCode;
}

console.log(areSame(address2, address3)); // true
console.log(areEqual(address2, address3)); // false

areEqual(address2, address3); // false
console.log(address2); // Address { street: 'a', city: 'b', zipCode: 'c' }
// Constructor functions are functions that are used to create objects using the new keyword. They are a more traditional way to create objects in JavaScript. For example, we can create a constructor function called Circle that creates a circle object:

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle3 = new Circle(1);
const circle4 = new Circle(2);     

// objects are dynamic: properties can be added, modified, or deleted after the object is created. 
// const prevents reasiggnment, not mutation. 

// every object has a constructor property that points to the function that was used to create it. For example, if we create a circle object using the Circle constructor function, the constructor property of the circle object will point to the Circle function:

console.log(circle3.constructor); // Circle

// the constructor property can be used to check the type of an object. For example, we can check if an object is an instance of a particular constructor function using the instanceof operator:

console.log(circle3 instanceof Circle); // true
console.log(circle3 instanceof Object); // true

// functions are objects: in JavaScript, functions are also objects. This means that they can have properties and methods just like any other object. For example, we can add a property to a function like this:
function sayHello() {
    console.log('Hello');
}

sayHello.language = 'English';

console.log(sayHello.language); // English

// we can also add methods to a function like this:
sayHello.greet = function() {
    console.log('Greetings');
}

sayHello.greet(); // Greetings


//value vs reference types
// In JavaScript, there are two types of values: value types and reference types. Value types are primitive values that are stored directly in memory, while reference types are objects that are stored in memory as a reference to the object.

// Value types include numbers, strings, booleans, null, and undefined. When we assign a value type to a variable, the value is copied to the variable. For example:
let x = 10;
let y = x; // y is a copy of x
x = 20; // changing x does not affect y
console.log(x); // 20
console.log(y); // 10

// Reference types include objects, arrays, and functions. When we assign a reference type to a variable, the variable stores a reference to the object in memory. For example:
let obj1 = { value: 10 };
let obj2 = obj1; // obj2 is a reference to obj1
obj1.value = 20; // changing obj1 affects obj2
console.log(obj1.value); // 20
console.log(obj2.value); // 20

// for in iterates over an objects keys or properties. // for (let key in obj) 
//key becomes each property name
// then bracket notation lets you use that variable to access the corresponding value. // obj[key]

//using a for of loop on an object will throw an error because objects are not iterable. However, you can use a for of loop on an array or other iterable objects. //use Object.keys(obj) to get an array of the object's keys, and then use a for of loop on that array. // for (let key of Object.keys(obj))

//cloning object with spread operator
const obj = { a: 1, b: 2, c: 3 };
const clone = { ...obj };
console.log(clone); // { a: 1, b: 2, c: 3 }

//built in object methods - Math.random

const address = {
    street: '123 Gally Way',
    city: 'Los Angeles',
    zipCode: '90001'
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
 }

showAddress(address); // { street: '123 Gally Way', city: 'Los Angeles', zipCode: '90001' }