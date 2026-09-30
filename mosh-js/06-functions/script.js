//function declaration
function walk() {
    console.log("I am walking");
}

//hoisting - function declarations are hoisted to the top of the scope, so you can call them before they are defined in the code.
walk(); // This will work because of hoisting

//function expression - named and anonymous you declare a variable and assign a function to it.  
// you can create another variable and assign the same function to it. they share the same reference in memory.
const run = function() {
    console.log("I am running");
};

const jump = function jump() {
    console.log("I am jumping");
};

//rest operator - ... when applied to the parameters of a function, it allows you to pass an arbitrary number of arguments to that function and return them as an array.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

//default parameters - you can set default values for function parameters in case they are not provided when the function is called.
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

function interest(principal, rate = 0.05, time = 1) {
    return principal * rate * time;
}

//arrow function
const swim = () => {
    console.log("I am swimming");
};

//getters and setters - special methods that allow you to get and set the values of an object's properties. They are defined using the get and set keywords.
// getters => access properties of an object
// setters => modify properties of an object

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

person.fullName(); //this is read only with out a setter, you cannot modify the fullName property directly. You can only read it using the getter method.

const person1 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person1.fullName); // John Doe
person.fullName = "Jane Smith";
console.log(person1.fullName); // Jane Smith


//calling functions
walk();
run();
jump();
swim();
greet();
greet("Alice");
console.log(interest(1000, 0.1, 2));

const person10 = {
    name: "Paige"
};

function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

greet.call(person10, "Hello", "!");
// "Hello, Paige!"
// call Calls now; arguments passed one by one.

greet.apply(person10, ["Hello", "!"]);
// "Hello, Paige!"
// applCalls now; arguments passed as an array.

const greetPaige = greet.bind(person10);
// bind Returns a new function to call later.

greetPaige("Hello", "!");
// "Hello, Paige!"


// Declarations can be called before their definition; const/let function expressions cannot.

// Rest parameters

// ...rest gathers remaining arguments into a real array.

// Getters and setters

// Access computed values like properties; control what happens when a value is assigned.

// try / catch / throw

// Run risky code, handle errors, and throw your own errors.

// Scope

// Local variables are only accessible within their scope.

// this

// For regular functions, usually determined by how the function is called.

// call / apply / bind

// Set this explicitly: call and apply invoke now; bind returns a function.

// Arrow functions

// Inherit this from the surrounding scope; they don't have their own this.

function dum(...nums) {
    return nums.reduce((total, num) => total + num, 0)
}

console.log(dum())


const contact = {
    firstName: 'tim',
    lastName: 'collins',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(name) {
        const parts = name.split(" ")

        this.firstName = parts[0];
        this.lastName = parts[1]
    }
}

console.log(contact.fullName)
contact.fullName = 'Jane Smith'
console.log(contact.firstName)
console.log(contact.lastName)
console.log(contact.fullName)

const helloTim = {
    firstName: 'Tim',

    greet() {
        console.log(this.firstName)
    }
}

helloTim.greet()

const greet = helloTim.greet;
greet();