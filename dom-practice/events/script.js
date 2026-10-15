// console.log('working')

// const button = document.querySelector('#counter-btn')
// const display = document.querySelector('#count')
// const reset = document.querySelector('#reset-btn')

// let count = 0

// button.addEventListener('click', (event) => {
//     console.log(event.target.id)
//     console.log(event.target.textContent)
//     count++
//     display.textContent = count;
// })

// reset.addEventListener('click', () => {
//     count = 0
//     display.textContent = count;
//     console.log('click')
    
// })
// const parent = document.querySelector('#parent')
// const child = document.querySelector('#child')

// parent.addEventListener('click', (event) => {
//     console.log('Parent:', event.target.id)
// })

// // child.addEventListener('click', (event) => {
// //     console.log('Child:', event.currentTarget.id)
// // })

// const employees = document.querySelector('#employees')
// const selected = document.querySelector('#selected')

// employees.addEventListener('click', (event) => {
//     // const name = event.target.id 
//     // const capitalized = name.charAt(0).toUpperCase() + name.slice(1)
//     // console.log('employee clicked', name)
//     if (event.target.tagName !== 'LI') return
//     selected.textContent = event.target.textContent
// })

// const employeeData = [
//     { id: 'maya', name: 'Maya', department: 'Engineering' },
//     { id: 'jordan', name: 'Jordan', department: 'Design' },
//     { id: 'sam', name: 'Sam', department: 'Marketing' }
// ]

// const selected = document.querySelector('#selected')
// const employees = document.querySelector('#employees')
// const department = document.querySelector('#department')

// employees.addEventListener('click', (event) => {
//     if (event.target.tagName !== 'LI') return

//     const clickedID = event.target.id
//     console.log(clickedID)
//     const employee = employeeData.find(employee => employee.id === clickedID)

// if (!employee) return
    
//     selected.textContent = employee.name
//     department.textContent = employee.department
// })


const projects = [
    {
        id: 1,
        name: 'Website Redesign',
        status: 'active',
        team: [
            { name: 'Maya', role: 'Developer' },
            { name: 'Jordan', role: 'Designer' }
        ]
    },
    {
        id: 2,
        name: 'Mobile App',
        status: 'completed',
        team: [
            { name: 'Sam', role: 'Developer' },
            { name: 'Alex', role: 'Developer' },
            { name: 'Taylor', role: 'Designer' }
        ]
    },
    {
        id: 3,
        name: 'Customer Dashboard',
        status: 'active',
        team: [
            { name: 'Casey', role: 'Developer' },
            { name: 'Riley', role: 'Project Manager' }
        ]
    }
]

const projectNames = projects.map(project => project.name)
console.log('names', projectNames)

const mobileApp = projects.find(project => project.name === "Mobile App")
console.log('mobile', mobileApp)

const activeStatus = projects.filter(project => project.status === 'active')
console.log('active', activeStatus)

const employees = projects.find(project => project.id === 1)
console.log('id 1', employees)
const webDesign = employees.team.map(employee => employee.name)
console.log('website redesign', webDesign)

const findTaylor = projects.find(project => project.id === 2) 
console.log(findTaylor.team.find(team => team.name === "Taylor"))

const eachProject = projects.map(project => {
    const count = project.team.length

    return {
        project: project.name,
        teamCount: count
    }
})

console.log(eachProject)