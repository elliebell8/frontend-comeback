const form = document.querySelector('#employee-form')
const nameInput = document.querySelector('#name')
const departmentInput = document.querySelector('#department')
const employeeList = document.querySelector('#employee-list')
const message = document.querySelector('#message')
const searchInput = document.querySelector('#search')

// let employees = [
//     { name: 'Maya', department: 'Engineering' },
//     { name: 'Jordan', department: 'Design' }
// ]
const savedEmployees = JSON.parse(localStorage.getItem('employees'))
let employees 

if (savedEmployees) {
    //console.log('if statement', savedEmployees)
   employees = savedEmployees
} else {
   employees = [
    { name: 'Maya', department: 'Engineering' },
    { name: 'Jordan', department: 'Design' }
   ]
}
console.log(savedEmployees)

function renderEmployees(employeeArray) {
    employeeList.textContent = ''

    employeeArray.forEach(employee => {
        const li = document.createElement('li')
        const nameSpan = document.createElement('span')
        const departmentSpan = document.createElement('span')
        nameSpan.textContent = employee.name
        departmentSpan.textContent = employee.department
        nameSpan.className = 'employee-name'
        departmentSpan.className = 'employee-department'
       // li.textContent = `${employee.name} ${employee.department}`
       li.appendChild(nameSpan)
       li.appendChild(departmentSpan)
        employeeList.appendChild(li)
    })
    
}

function updateEmployeeList() {
    const searchTerm = searchInput.value.toLowerCase()

    const filteredEmployees = employees.filter(employee => 
        employee.name.toLowerCase().includes(searchTerm)
    )

    renderEmployees(filteredEmployees)
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = nameInput.value.trim()
    const department = departmentInput.value.trim()
    
    //validate inputs
    if (name === '' || department === '') {
    message.textContent = 'Please fill out both fields'
    return 
}

 message.textContent = ''

 //create and add employee 
 const newEmployee = { name, department }
 employees.push(newEmployee)

 searchInput.value = ''

//update display employees
updateEmployeeList()

//clear form
nameInput.value = ''
departmentInput.value = ''

})

searchInput.addEventListener('input', () => {
    updateEmployeeList()
})

updateEmployeeList()

// localStorage.setItem('employees', JSON.stringify(employees))
// console.log(employees)
// localStorage.getItem('employees')
//const savedEmployees = JSON.parse(localStorage.getItem('employees'))

