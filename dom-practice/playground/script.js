const employees = [
    { name: 'Maya', department: 'Engineering' },
    { name: 'Jordan', department: 'Design' },
    { name: 'Sam', department: 'Engineering' }
]

const engineering = employees
.filter(employee => 
    employee.department === 'Engineering'
).map(employee => 
    employee.name
)

// const engineerNames = engineering.map(employee => 
//     employee.name
// )

const newEmployee = {
    name: 'Taylor',
    department: 'Marketing'
}

const result = employees.push(newEmployee)
console.log(result)

console.log(employees)

const li = document.createElement('li')
li.textContent = `${newEmployee.name} - ${newEmployee.department}`
employeeList.appendChild(li)
