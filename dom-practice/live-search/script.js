console.log('working')
const employeeData = [
    { id: 1, name: 'Maya Chen', department: 'Engineering' },
    { id: 2, name: 'Jordan Lee', department: 'Design' },
    { id: 3, name: 'Sam Rivera', department: 'Engineering' },
    { id: 4, name: 'Taylor Brooks', department: 'Marketing' }
]

const search = document.querySelector('#search')
const employeeList = document.querySelector('#employee-list')

search.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase()

    const filteredEmployees = employeeData.filter(employee => 
        employee.name.toLowerCase().includes(searchTerm))

    console.log('filtered employee', filteredEmployees)

    employeeList.innerHTML = ''

    filteredEmployees.forEach(employee => {
        const li = document.createElement('li')
        li.textContent = `${employee.name}  - ${employee.department}`
        employeeList.appendChild(li)
    })
    if (filteredEmployees.length === 0) {
            const li = document.createElement('li')
            li.textContent = 'No employees found'
            employeeList.appendChild(li)
        }

})

// const employees = [
//     { name: 'Maya', salary: 80000 },
//     { name: 'Jordan', salary: 65000 },
//     { name: 'Sam', salary: 90000 }
// ]

// const raise = employees.map(employee => {
//     const fiveK = employee.salary + 5000

//     return {
//         name: employee.name,
//         newSalary: fiveK
//     }
// })

// console.log(raise)

const employees = [
    { name: 'Maya', department: 'Engineering' },
    { name: 'Jordan', department: 'Design' },
    { name: 'Sam', department: 'Engineering' }
]

const engineeringEmployees = employees.filter(employee => employee.department === 'Engineering')

console.log('engineering employees', engineeringEmployees)

const engineeringNames = engineeringEmployees.map(employee => {
    return employee.name
})

console.log('engineering names', engineeringNames)

const label = employees.map(employee => {
    return {
        name: employee.name,
        label: `${employee.name} works in ${employee.department}`
    }
    
})

console.log(label)