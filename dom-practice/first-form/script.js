console.log('working')
//const form = document.querySelector('#signup-form')
// const container = document.querySelector('#container')


// container.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log('Form submitted!')
//     console.log('event target', event.target.id)
//     console.log('event current target', event.currentTarget.id)
    
// })

// const form = document.querySelector('#signup-form')
// const email = document.querySelector('#email')
// const message = document.querySelector('#message')

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(email.value)

//     const emailAddress = email.value.trim()
//     if (emailAddress === '') {
//       message.textContent = 'Please enter an email address'
//       return
//     } 
//     message.textContent = `Thanks for signing up, ${emailAddress}`

//     email.value = ''
// })

// const form = document.querySelector('#registration-form')
// const nameInput = document.querySelector('#name')
// const email = document.querySelector('#email')
// const message = document.querySelector('#message')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
   

//     const name = nameInput.value.trim()
//     const emailAddress = email.value.trim()

//     if (name === '' || emailAddress === '') {
//         message.textContent = 'Please fill out all fields'
//         return
//     }
//         message.textContent = `Welcome, ${name}! Your email is ${emailAddress}`

//         nameInput.value = ''
//         email.value = ''
    
//         console.log(emailAddress)
// })

// const employeeList = document.querySelector('#employee-list')

// const employees = [
//     { name: 'Maya', department: 'Engineering' },
//     { name: 'Jordan', department: 'Design' }
// ]

// const sam = {
//     name: 'Sam',
//     department: 'Marketing'
// }
// employees.push(sam)
// console.log(employees)

// const li = document.createElement('li')
// li.textContent = `${sam.name} - ${sam.department}`
// employeeList.appendChild(li)

//select html elements
const form = document.querySelector('#employee-form')
const nameInput = document.querySelector('#name')
const departmentInput = document.querySelector('#department')
const employeeList = document.querySelector('#employee-list')
const message = document.querySelector('#message')

//array with data
const employees = [
    { name: 'Maya', department: 'Engineering' },
    { name: 'Jordan', department: 'Design' }
]

//eventListener 
form.addEventListener('submit', (e) => {
    e.preventDefault()
//getting the value from the users input
    const name = nameInput.value.trim()
    const department = departmentInput.value.trim()
    console.log(name, department)

      if (name === '' || department === '') {
    console.log('name and department from if statement', name, department)
    message.textContent= 'Please fill out both fields'
    return 
    }

    message.textContent = ''

    //creeating a new employee object
    const newEmployee = {
        name,
        department
    }
    console.log(newEmployee)

    //adding new employee object to array with data 
    employees.push(newEmployee)
    console.log(employees)
    renderEmployees()

    //create new list, add content, append to ul from html
    // const li = document.createElement('li')
    // li.textContent = `${newEmployee.name} ${newEmployee.department}`
    // employeeList.appendChild(li)
})

//reusable function to update the webpage - 
function renderEmployees() {
    employeeList.innerHTML = ''

    //for each employee
    employees.forEach(employee => {
        //create a new list element 
        const li = document.createElement('li')
        //add the name and department to that list
        li.textContent = `${employee.name} ${employee.department}`
        // append the list to the ul
        employeeList.appendChild(li)
    })
}

renderEmployees()