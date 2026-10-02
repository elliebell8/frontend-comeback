//thursday October 1st array methods exercises 
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        rating: 4.2,
        genres: ["fiction", "classic"]
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        rating: 4.5,
        genres: ["fiction", "sci-fi"]
    },
    {
        title: "Educated",
        author: "Tara Westover",
        year: 2018,
        rating: 4.3,
        genres: ["memoir", "nonfiction"]
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        rating: 4.8,
        genres: ["fiction", "fantasy"]
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        rating: 4.1,
        genres: ["self-help", "nonfiction"]
    }
];

// filter - Create a variable called classicBooks containing books published before 1950.
const classicBooks = books.filter(book => book.year < 1950)
console.log(classicBooks)

// map - Create an array called bookTitles containing only the title of each book.
const bookTitles = books.map(book => book.title)
console.log('book titles', bookTitles)

// find - Find the book written by Frank Herbert. Store the entire book object in a variable called dune.
const dune = books.find(book => book.author === 'Frank Herbert')
console.log('dune', dune)

// reduce - Calculate the average rating of all five books. Use reduce().
const ratings = books.reduce((accumulator, book) => {
    return accumulator + book.rating
}, 0)

const averageRating = ratings / books.length;
console.log('ratings', ratings)
console.log('average', averageRating)

// sort - Create a new array called highestRated with the books sorted from highest rating to lowest. Keep the original books array unchanged.
const highestRated = books.slice().sort((a, b) => b.rating - a.rating)

console.log(highestRated)

const arr = [10, 20, 30]
arr[1] = 25;
console.log(arr)

const arr1 = [1, 2, 3, 4, 5, 6];
const result = arr1.filter(num => num % 2 === 0)
                  .map(num => num * 2)
                  .reduce((acc, curr) => acc + curr, 0);
console.log(result);