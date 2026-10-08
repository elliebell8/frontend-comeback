const departments = [
    {
        id: 1,
        name: 'Engineering',
        employees: [
            { id: 101, name: 'Maya', role: 'Frontend Developer', remote: true },
            { id: 102, name: 'Jordan', role: 'Backend Developer', remote: false },
            { id: 103, name: 'Sam', role: 'Frontend Developer', remote: true }
        ]
    },
    {
        id: 2,
        name: 'Design',
        employees: [
            { id: 104, name: 'Taylor', role: 'UX Designer', remote: true },
            { id: 105, name: 'Alex', role: 'Product Designer', remote: false }
        ]
    },
    {
        id: 3,
        name: 'Marketing',
        employees: [
            { id: 106, name: 'Casey', role: 'Content Specialist', remote: true },
            { id: 107, name: 'Riley', role: 'Marketing Manager', remote: false }
        ]
    }
];

// what am i starting with: an array or an object?
// what do i want back: one Item, multiple, or a transformed array?
// do i need to go deeper into a nested structure?

const departmentNames = departments.map(department =>
    department.name
)

console.log(departmentNames)

const designDepartment = departments.find(department =>
    department.name === 'Design'
)

console.log(designDepartment)

const engineering = departments.find(department =>
    department.name === "Engineering"
)

const remoteEmployee = engineering.employees.filter(employee =>
    employee.remote
);

const remoteName = remoteEmployee.map(employee => employee.name)

console.log('remote', remoteEmployee)
console.log('remote names', remoteName)
console.log('eng dep', engineering)

const marketingNames = departments.find(department => department.name === 'Marketing')

console.log(marketingNames.employees.map(employee => employee.name))

const sam = engineering.employees.find(employee => employee.name === "Sam")
console.log('sam', sam)

const totalEmployee = departments.map(department => {
    const count = department.employees.length

    return {
        department: department.name, 
        employeeCount: count
    }
     
})

console.log(totalEmployee)