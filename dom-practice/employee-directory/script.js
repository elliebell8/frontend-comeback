const form = document.querySelector('#employee-form')
const nameInput = document.querySelector('#name')
const departmentInput = document.querySelector('#department')
const employeeList = document.querySelector('#employee-list')
const message = document.querySelector('#message')
const searchInput = document.querySelector('#search')

const employees = [
    { name: 'Maya', department: 'Engineering' },
    { name: 'Jordan', department: 'Design' }
]

function renderEmployees(employeeArray) {
    employeeList.textContent = ''

    employeeArray.forEach(employee => {
        const li = document.createElement('li')
        li.textContent = `${employee.name} ${employee.department}`
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