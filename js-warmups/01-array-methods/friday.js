// const products = [
//     {
//         name: "Ceramic Mug",
//         category: "home",
//         price: 24,
//         inStock: true,
//         tags: ["ceramic", "kitchen"]
//     },
//     {
//         name: "Canvas Tote",
//         category: "accessories",
//         price: 18,
//         inStock: true,
//         tags: ["bag", "everyday"]
//     },
//     {
//         name: "Soy Candle",
//         category: "home",
//         price: 32,
//         inStock: false,
//         tags: ["candle", "gift"]
//     },
//     {
//         name: "Gold Hoops",
//         category: "jewelry",
//         price: 46,
//         inStock: true,
//         tags: ["gold", "earrings"]
//     },
//     {
//         name: "Linen Tea Towel",
//         category: "home",
//         price: 16,
//         inStock: false,
//         tags: ["kitchen", "linen"]
//     }
// ];

// const homeProducts = products.filter(product => product.category === "home")

// console.log('home', homeProducts)

// const availableProducts = products.filter(product => product.inStock === true)

// console.log('available', availableProducts)

// const totalPrice = products
// .filter(product => product.inStock)
// .reduce((acc, product) => acc + product.price, 0);

// console.log('total', totalPrice)

// const findHoops = products.find(product => product.name === "Gold Hoops")

// console.log('find', findHoops)


// const namesAndPrices = products.map(product => `${product.name} - $${product.price}`)

// console.log(namesAndPrices)

// const orders = [
//     {
//         customer: "Sarah",
//         total: 84,
//         status: "completed",
//         items: ["mug", "candle"]
//     },
//     {
//         customer: "Mike",
//         total: 42,
//         status: "pending",
//         items: ["tote"]
//     },
//     {
//         customer: "Jessica",
//         total: 125,
//         status: "completed",
//         items: ["candle", "tote", "mug"]
//     },
//     {
//         customer: "David",
//         total: 63,
//         status: "cancelled",
//         items: ["mug"]
//     },
//     {
//         customer: "Emma",
//         total: 96,
//         status: "completed",
//         items: ["tote", "candle"]
//     }
// ];

// const completedOrders = orders.filter(order => order.status === "completed")

// console.log('completed', completedOrders)

// const names = orders.map(order => order.customer)

// console.log(names)

// const totalRevenue = orders.filter(order => order.status === "completed").reduce((acc, order) => acc + order.total, 0)

// console.log(totalRevenue)

// const overHundred = orders.find(order => order.total >= 100)
// console.log('100', overHundred)

// const namesAndTotal = orders.map(order => `${order.customer} - $${order.total}`)

// console.log(namesAndTotal)
// const customers = [
//     {
//         name: "Sarah",
//         location: "Houston",
//         orders: [
//             { product: "Mug", price: 24, quantity: 2 },
//             { product: "Candle", price: 32, quantity: 1 }
//         ]
//     },
//     {
//         name: "Mike",
//         location: "Austin",
//         orders: [
//             { product: "Tote", price: 18, quantity: 1 },
//             { product: "Mug", price: 24, quantity: 3 }
//         ]
//     },
//     {
//         name: "Jessica",
//         location: "Dallas",
//         orders: [
//             { product: "Candle", price: 32, quantity: 2 },
//             { product: "Tote", price: 18, quantity: 2 }
//         ]
//     },
//     {
//         name: "Emma",
//         location: "Houston",
//         orders: [
//             { product: "Mug", price: 24, quantity: 1 },
//             { product: "Tote", price: 18, quantity: 2 }
//         ]
//     }
// ];

// const houston = customers.filter(customer => customer.location === "Houston")

// console.log('houston customers',houston)

// const names = customers.map(customer => `${customer.name}`)

// console.log('names', names)

// const sarahsOrder = customers.filter(customer => customer.name === 'Sarah')

// console.log('sarahs order',sarahsOrder)

// const sarah = sarahsOrder[0].orders;

// console.log('sarah', sarah)

// const findSarah = customers.find(customer => customer.name === "Sarah").orders.reduce((acc, order) => {
//     return acc + (order.price * order.quantity)
// }, 0)

// console.log('find sarah', findSarah)
// //console.log(sarah)

// const individualTotals = customers.map(customer => {
//    const totalCost = customer.orders.reduce(
//     (acc, order) => acc + (order.price * order.quantity), 0);
//     //return { name: customer.name, total: totalCost };
//     return `${customer.name} - $${totalCost}`;
// });

// console.log(individualTotals)

// const employees = [
//     {
//         name: "Maya",
//         department: "Design",
//         projects: [
//             { name: "Website", hours: 12, completed: true },
//             { name: "Mobile App", hours: 8, completed: false }
//         ]
//     },
//     {
//         name: "Chris",
//         department: "Development",
//         projects: [
//             { name: "Dashboard", hours: 15, completed: true },
//             { name: "API Integration", hours: 10, completed: true }
//         ]
//     },
//     {
//         name: "Nina",
//         department: "Design",
//         projects: [
//             { name: "Brand Refresh", hours: 6, completed: true },
//             { name: "Email Templates", hours: 9, completed: true }
//         ]
//     }
// ];

// const designEmployees = employees.filter(employee => employee.department === "Design")

// console.log('design employees', designEmployees)

// const employeeNames = employees.map(employee => employee.name)

// console.log('emplyee names', employeeNames)

// const chris = employees.find(employee => employee.name === "Chris")

// console.log('chris', chris)

// const totalHours = chris.projects.reduce((acc, project) => {
//     return acc + project.hours
// }, 0)

// console.log('total hours', totalHours)

// const employeeTotals = employees.map(employee => {
//     const totalHours = employee.projects
//     .reduce((acc, project) => {
//         return acc + project.hours
//     }, 0)

//     return `${employee.name} - ${totalHours}`
// })

// console.log('employee totals', employeeTotals)

// const teams = [
//     {
//         name: "Frontend",
//         members: [
//             { name: "Alex", tasks: 8, completed: 6 },
//             { name: "Jamie", tasks: 5, completed: 5 }
//         ]
//     },
//     {
//         name: "Backend",
//         members: [
//             { name: "Taylor", tasks: 10, completed: 7 },
//             { name: "Jordan", tasks: 6, completed: 4 }
//         ]
//     },
//     {
//         name: "Design",
//         members: [
//             { name: "Morgan", tasks: 7, completed: 7 },
//             { name: "Casey", tasks: 4, completed: 3 }
//         ]
//     }
// ];

// const teamNames = teams.map(team => team.name)

// console.log(teamNames)

// const backendTeam = teams.find(team => team.name === "Backend")

// console.log(backendTeam)

// const totalTasks = backendTeam.members.reduce((acc, member) => {
//     return acc + member.tasks
// },0)
// console.log(totalTasks)

// const notCompleted = backendTeam.members.filter(member => {
//   return member.completed < member.tasks
// }
   
// )

// console.log('completed', notCompleted)

// const completedTasks = teams.map(team => {
//     const teamTasks = team.members.reduce((acc, member) => {
//         return acc + member.completed 
//     }, 0)
//     return `${team.name} - ${teamTasks} completed`
// })

// console.log(completedTasks)

// // const memeberNames = teams.map(team => {
// //     return team.members.map(member => member.name)
// // })


// // console.log('all team members', memeberNames)

// const memberNames = teams.map(team => {
//     return team.members.map(member => member.name);
// });

// console.log(memberNames);

const departments = [
    {
        name: "Marketing",
        employees: [
            { name: "Olivia", salary: 72000, remote: true },
            { name: "Ethan", salary: 68000, remote: false }
        ]
    },
    {
        name: "Engineering",
        employees: [
            { name: "Sophia", salary: 95000, remote: true },
            { name: "Liam", salary: 88000, remote: true },
            { name: "Noah", salary: 82000, remote: false }
        ]
    },
    {
        name: "Product",
        employees: [
            { name: "Ava", salary: 85000, remote: false },
            { name: "Mason", salary: 79000, remote: true }
        ]
    }
];

const departmentNames = departments.map(department => department.name)

console.log('department names', departmentNames)

const engineering = departments.find(department => department.name === "Engineering")

console.log('engineering', engineering)

const remote = engineering.employees.filter(employee => employee.remote)

console.log('remote', remote)

const totalSalary = engineering.employees.reduce((acc, employee) => {
    return acc + employee.salary;
}, 0)

console.log('total salary', totalSalary)

const totalPayroll = departments.map(department => {
    const departmentSalary = department.employees.reduce((acc, employee) => {
        return acc + employee.salary;
    }, 0)

    return `${department.name} - $${departmentSalary}`
})

console.log('department payroll', totalPayroll)

const everyEmployee = departments.flatMap(department => 
    department.employees.map(employee => employee.name))

    console.log('every employee', everyEmployee)