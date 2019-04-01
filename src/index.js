document.addEventListener('DOMContentLoaded', ()=>{
    renderAllGroups()
})

function renderAllGroups () {
    fetch('http://localhost:3000/a_cappella_groups')
    .then(resp => resp.json())
    .then(data => data.forEach(group => renderGroup(group)))
}

function renderGroup(group){
    const table = document.getElementById("table-body")
    const tr = document.createElement('tr')
    const college = document.createElement('td')
    college.setAttribute('class', 'college')
    college.textContent = group.college.name
    const groupName = document.createElement('td')
    groupName.setAttribute('class', 'group-name')
    groupName.textContent = group.name
    const membershipType = document.createElement('td')
    membershipType.textContent = group.membership
    const division = document.createElement('td')
    division.textContent = group.college.division
    const trophyButton = document.createElement('td')
    const button = document.createElement('img')
    button.src = './assets/trophy.png'
    button.dataset.id = group.id
    button.addEventListener('click', handleTrophyButton)

    table.appendChild(tr)
    tr.appendChild(college)
    tr.appendChild(groupName)
    tr.appendChild(membershipType)
    tr.appendChild(division)
    trophyButton.appendChild(button)
    tr.appendChild(trophyButton)
}

function handleTrophyButton(e) {
    const winner = document.getElementById('winner')
    const newWinner = e.target.closest("tr").querySelector('.college').innerText
    const newWinner2 = e.target.closest("tr").querySelector('.group-name').innerText
    console.log(e.target.parentNode.parentNode)
    winner.textContent = `Winner: ${newWinner} ${newWinner2}`
}
