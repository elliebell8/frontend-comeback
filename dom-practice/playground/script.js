// const employees = [
//     { name: 'Maya', department: 'Engineering' },
//     { name: 'Jordan', department: 'Design' },
//     { name: 'Sam', department: 'Engineering' }
// ]

// const engineering = employees
// .filter(employee => 
//     employee.department === 'Engineering'
// ).map(employee => 
//     employee.name
// )

// // const engineerNames = engineering.map(employee => 
// //     employee.name
// // )

// const newEmployee = {
//     name: 'Taylor',
//     department: 'Marketing'
// }

// const result = employees.push(newEmployee)
// console.log(result)

// console.log(employees)

// const li = document.createElement('li')
// li.textContent = `${newEmployee.name} - ${newEmployee.department}`
// employeeList.appendChild(li)

// const fruits = ['apple', 'banana', 'orange']
// const vegetables = ['carrot', 'broccoli', 'spinach']

// function countItems(items) {
//   const totals = items.length
//   return totals 
  
  
// }

// console.log(countItems(fruits))
// console.log(countItems(vegetables))

// const prices = [10, 25, 15, 30]

// // function calculateTotal(items) {
// //     const total = items.reduce((acc, item) => {
// //         return acc + item
      
// //     }, 0)
// //   return total
// // }
// // console.log('calculate', calculateTotal(prices))

// function calculateTotal(items) {
//     let total = 0

//     for (let item of items) {
//        total = item + total
//     }
//     return total
// }

// console.log(calculateTotal(prices))

// function calculateDiscountedTotal(items) {
//     let total = 0
// for (let item of items) {
    
//     const discount = item * 0.10
//     const finalCost = item - discount
//     total += finalCost
// }
//     return total


// }
// console.log(calculateDiscountedTotal(prices))

// let total = 0

// for (let number of [5, 10, 15]) {
//     total += number
//     console.log('inside', total)
// }

// console.log('outside', total)

// const products = [
//     { name: 'Coffee', price: 5 },
//     { name: 'Sandwich', price: 12 },
//     { name: 'Cookie', price: 3 }
// ]

// function calculateTotal(prices) {
//     let total = 0

//     for (const price of prices) {
//         total += price
//     }

//   console.log(total)
// }

// const cart = [5, 12, 3]
// const cartTotal = calculateTotal(cart)

// console.log('cart', cartTotal)

// const one = ['a', 'b']

// const two = [...one]

// two.push('c')
// console.log(one)

// const cartTwo = ['one', 'two']

// function addItems(items) {
//     items.push('three')
// }

// addItems(cartTwo)

// console.log(cartTwo)

// const employees = [
//     { name: 'Sarah', department: 'Engineering' },
//     { name: 'James', department: 'Marketing' }
// ]

// const engineers = employees.map(employee => ({
//   ...employee
// }))

// engineers[0].name === 'samantha'

// console.log(employees[0].name)
// console.log(engineers)
// console.log(employees.length)
// console.log(engineers.length)

// let a = { name: 'Paige' } // Creates ONE object
// let b = a                 // Copies the reference

// // b.name = 'Sam'            // Changes the shared object
// b = {name: 'sam'}           // Object 2
// console.log(a)
// console.log(b)

// let c = { ... a }
// c.name = 'ellie'

// console.log(a, c)

// const employees = [
//   { name: 'Paige', department: 'Design' },
//   { name: 'Sam', department: 'Engineering' }
// ]

// //let firstEmployee = newEmployees[0]

// //firstEmployee = { name: 'ellie'}
// const updatedEmployees = employees.map(employee => {
//     if (employee.name === 'Sam') {
//        //{ employee.name = 'ellie' }
//       return { ...employee, name: 'ellie'}
    
//     }

//    //return { ...employee }
// })


// console.log('employees', employees, 'copy', updatedEmployees)

const employee = {
    name: 'Paige',
    department: 'Design'
}

const copy = { ...employee }

copy.name = 'Ellie'

console.log(employee.name)
console.log(copy.name)