const products = [
    {
        name: "Ceramic Mug",
        category: "home",
        price: 24,
        inStock: true,
        tags: ["ceramic", "kitchen"]
    },
    {
        name: "Canvas Tote",
        category: "accessories",
        price: 18,
        inStock: true,
        tags: ["bag", "everyday"]
    },
    {
        name: "Soy Candle",
        category: "home",
        price: 32,
        inStock: false,
        tags: ["candle", "gift"]
    },
    {
        name: "Gold Hoops",
        category: "jewelry",
        price: 46,
        inStock: true,
        tags: ["gold", "earrings"]
    },
    {
        name: "Linen Tea Towel",
        category: "home",
        price: 16,
        inStock: false,
        tags: ["kitchen", "linen"]
    }
];

const homeProducts = products.filter(product => product.category === "home")

console.log('home', homeProducts)

const availableProducts = products.filter(product => product.inStock === true)

console.log('available', availableProducts)

const totalPrice = products
.filter(product => product.inStock)
.reduce((acc, product) => acc + product.price, 0);

console.log('total', totalPrice)

const findHoops = products.find(product => product.name === "Gold Hoops")

console.log('find', findHoops)


const namesAndPrices = products.map(product => `${product.name} - $${product.price}`)

console.log(namesAndPrices)