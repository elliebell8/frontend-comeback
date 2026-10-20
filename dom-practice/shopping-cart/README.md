# 🛒 Mini Shopping Cart

An interactive shopping cart built with vanilla JavaScript, HTML, and CSS as part of my frontend development learning journey.

## Features

- Display products dynamically from an array of objects
- Add products to a shopping cart
- Remove individual products from the cart
- Automatically calculate and update the total price
- Responsive-width layout with custom CSS and interactive buttons

## 🧠 What I Practiced

### JavaScript Fundamentals

- Arrays, objects, functions, and parameters
- `for...of` loops and `.forEach()`
- Adding and removing array elements using `.push()` and `.splice()`
- Returning values from reusable functions
- Understanding variable scope and closures

### DOM Manipulation

- Selecting elements with `querySelector()`
- Creating elements dynamically with `createElement()`
- Updating content with `textContent`
- Adding elements using `appendChild()`
- Re-rendering the interface when data changes

### Event Handling

- Using `addEventListener()` for button clicks
- Accessing product data inside event listeners
- Using array indices to remove specific items

### Code Organization

- Separating application data from display logic
- Creating reusable rendering functions
- Refactoring repeated code into `updateCart()`
- Keeping the interface synchronized with the shopping cart array

### CSS

- Flexbox layouts and alignment
- Element, class, and ID selectors
- CSS specificity and hover states
- Consistent colors, spacing, and typography

### Git & GitHub

- Checking changes with `git status`
- Staging specific project files
- Writing descriptive commits
- Pushing completed work to GitHub

## 💡 Key Takeaway

One of the most important concepts I learned was the difference between changing application data and updating the DOM.

When a product is added or removed, the shopping cart array changes. A reusable `updateCart()` function then refreshes the displayed items and recalculates the total.

This helped me better understand how data and user interfaces work together.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Running the Project

Open `index.html` in a web browser. No additional dependencies are required.
