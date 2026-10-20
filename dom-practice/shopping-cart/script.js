// console.log('working')
const productList = document.querySelector('#product-list')
const cartTotal = document.querySelector('#cart-total')
const cartList = document.querySelector('#cart-list')

const products = [
    { name: 'Coffee', price: 5 },
    { name: 'Sandwich', price: 12 },
    { name: 'Cookie', price: 3 }
]

const shoppingCart = []

function renderProducts(productArray) {
    productList.textContent = ''

    productArray.forEach(product => {
    const li = document.createElement('li')
    li.textContent =  `${product.name} - $${product.price}`
  

    const btn = document.createElement('button')
    btn.textContent = 'Add to Cart'
    

btn.addEventListener('click', () => {
    shoppingCart.push(product)
    updateCart()

})

    li.appendChild(btn)
    productList.appendChild(li)
    })

}

function calculateCartTotal(items) {
    let total = 0
    for (let item of items) {
        total = total + item.price
    }
    return total
}

function renderCart(cartArray) {
    cartList.textContent = ''

    cartArray.forEach((item, index) => {
        const li = document.createElement('li')
        li.textContent =  `${item.name} - $${item.price}`

        const btn = document.createElement('button')
        btn.textContent = 'Remove'
        btn.classList.add('remove-btn')
        li.appendChild(btn)

        btn.addEventListener('click', () => {
            shoppingCart.splice(index, 1)

        updateCart()

        })
        cartList.appendChild(li)
        
    })
}

function updateCart() {
    renderCart(shoppingCart)
    
    const total = calculateCartTotal(shoppingCart)
    cartTotal.textContent = `Total: $${total.toFixed(2)}`

}

renderProducts(products)
updateCart()
