const candidates = [
  {
    id: 101,
    name: 'Maya Chen',
    position: 'Frontend Developer',
    status: 'interviewing',
    notes: [
      { kind: 'applied', daysAgo: 12 },
      { kind: 'phone-screen', daysAgo: 8 },
      { kind: 'interview', daysAgo: 3 }
    ]
  },
  {
    id: 102,
    name: 'Jordan Lee',
    position: 'UX Designer',
    status: 'applied',
    notes: [
      { kind: 'applied', daysAgo: 6 }
    ]
  },
  {
    id: 103,
    name: 'Sam Rivera',
    position: 'Frontend Developer',
    status: 'interviewing',
    notes: [
      { kind: 'applied', daysAgo: 15 },
      { kind: 'phone-screen', daysAgo: 10 },
      { kind: 'interview', daysAgo: 5 }
    ]
  },
  {
    id: 104,
    name: 'Taylor Brooks',
    position: 'Backend Developer',
    status: 'rejected',
    notes: [
      { kind: 'applied', daysAgo: 20 },
      { kind: 'phone-screen', daysAgo: 16 },
      { kind: 'rejected', daysAgo: 14 }
    ]
  }
];

const candidateNames = candidates.map(candidate => 
    candidate.name
)

console.log('candidate names', candidateNames)

const jordan = candidates.find(candidate =>
    candidate.name === "Jordan Lee"
)

console.log('jordan', jordan)

const frontendCandidates = candidates.filter(candidate =>
    candidate.position === "Frontend Developer"
)

console.log('frontend candidates', frontendCandidates)

const frontendNames = frontendCandidates.map(candidate =>
    candidate.name)

console.log('frondend names', frontendNames)

const maya = candidates.find(candidate =>
    candidate.name === "Maya Chen"
)

const mayaNotes = maya.notes.find(note =>
    note.kind === "interview"
)
console.log(maya)
console.log(mayaNotes)

const candidateNotes = candidates.map(candidate => {
    const noteCount = candidate.notes.length
    return {name: candidate.name, noteCount: noteCount}
})

console.log(candidateNotes)

// function createListItem(item) {
//     const li = document.createElement('li')

//     li.innerHTML = `${item}
//         <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//         </button>`;

//         document.querySelector('.items').appendChild(li)
// }

// function createNewItem(item) {
//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(item))

//     const button = createButton('remove-item btn-link text-red')

//     li.appendChild(button)

//     document.querySelector('.items').appendChild(li)
// }

// function createButton(classes) {
//     const button = document.createElement('button')
//     button.className = classes;
//     const icon = createIcon('fa-solid fa-xmark')
//     button.appendChild(icon)
//     return button;
// }

// function createIcon(classes) {
//     const icon = document.createElement('i')
//     icon.className = classes;
//     return icon;
// }

// createListItem('Eggs')
// createNewItem('cheese')
// createNewItem('peanut butter')

//     <!-- insertAdjacentElement, text ans html -->
function insertElement() {
    const items = document.querySelector('.items')

    const h1 = document.createElement('h1')
    h1.textContent = 'insertAdjacentElement';

    items.insertAdjacentElement('beforebegin', h1)
}

insertElement()


function insertText() {
    const title = document.querySelector('.intro')
    title.insertAdjacentText('afterbegin', 'insertAdjacentText')
}

insertText()
//    <!-- beforebegin  
// <p>
//      afterbegin
//     foo
//      beforeend
// </p>
//     afterend -->