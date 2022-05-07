import toDoFactory from "./toDoFactory.js";
export default function displayProjects(projectArray) {
    const projectsArray = projectArray;
    const allProjectsUl = document.getElementById('allProjects')
    const allToDos = document.getElementById('allToDos')
    allProjectsUl.innerHTML = ''

    for ( let i=0; i<projectsArray.length; i++ ) {
        let projectNameLi = document.createElement('li')
        console.log(projectArray)
        projectNameLi.textContent = projectsArray[i].projectName
        allToDos.innerHTML = ''
        projectNameLi.addEventListener('click', () => {
            allToDos.innerHTML = ''
            for ( let a=0; a<projectsArray[i].todos.length; a++ ) {
                let toDoLi = document.createElement('li')
                toDoLi.textContent = projectsArray[i].todos[a].toDoTitle
                allToDos.appendChild(toDoLi)
            }
        })
        allProjectsUl.appendChild(projectNameLi)
    }
    for ( let i=0; i<projectsArray[0].todos.length; i++ ) {
        let toDoLi = document.createElement('li')
        toDoLi.textContent = projectsArray[0].todos[i].toDoTitle
        allToDos.appendChild(toDoLi)
    }
}