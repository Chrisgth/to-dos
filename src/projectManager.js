import projectFactory from "./projectFactory"
import toDoFactory from "./toDoFactory"
export const projectManager = (() => {
    let projectStorage = []
    let currentProject = 0
    const newProject = () => {
        const allProjects = document.getElementById('allProjects')
        const allToDos = document.getElementById('allToDos')
        const formPopup = document.getElementById('formPopup')
        let project = projectFactory(formPopup[0].value, formPopup[1].value)
        projectStorage.push(project)
        const allProjectsLi = document.createElement('li')
        allProjectsLi.textContent = project.projectName
        allProjectsLi.id = `project${projectStorage.indexOf(project)}`
        allProjects.appendChild(allProjectsLi)
        currentProject = projectStorage[projectStorage.indexOf(project)]
        allProjectsLi.addEventListener('click', () => {
            currentProject = projectStorage[projectStorage.indexOf(project)]
            allToDos.innerHTML = ''
            for ( let i=0; i<currentProject.todos.length; i++ ) {
                const allToDosLi = document.createElement('li')
                allToDosLi.textContent = currentProject.todos[i].toDoTitle
                allToDos.appendChild(allToDosLi)  
            } 
        })
        console.log(currentProject)
    }
    const newToDo = () => {
        const allToDos = document.getElementById('allToDos')
        const toDoForm = document.getElementById('toDoForm')
        let toDo = toDoFactory(toDoForm[0].value, toDoForm[1].value, toDoForm[2].value)
        currentProject.todos.push(toDo)
        const allToDosLi = document.createElement('li')
        allToDosLi.textContent = toDo.toDoTitle
        allToDos.appendChild(allToDosLi)
    }
 
    return {
        projectStorage,
        newProject,
        currentProject,
        newToDo,
    }
})()