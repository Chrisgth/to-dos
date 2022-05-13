import projectFactory from "./projectFactory"
import toDoFactory from "./toDoFactory"
export const projectManager = (() => {
    let projectStorage = []
    let currentProject = 0
    const newProject = () => {
        const allProjects = document.querySelector('#allProjects')
        const allToDos = document.getElementById('allToDos')
        const formPopup = document.getElementById('formPopup')

        let project = projectFactory(formPopup[0].value, formPopup[1].value)
        projectStorage.push(project)
        currentProject = projectStorage[projectStorage.indexOf(project)]

        const allProjectsDiv = document.createElement('div')
        const allProjectsLi = document.createElement('li')
        const projectRemove = document.createElement('button')

        projectRemove.textContent = 'Remove'

        projectRemove.addEventListener('click', () => {
            let allProjectsNodeArray = Array.from(allProjects.childNodes)
            allProjectsNodeArray[projectStorage.indexOf(project)].remove()
            if ( currentProject === projectStorage[projectStorage.indexOf(project)]){
                projectStorage.splice(projectStorage.indexOf(project), 1)
                currentProject = projectStorage[0]
                allToDos.innerHTML = ''
                if ( projectStorage.length === 0 ) return 
                for ( let i=0; i<currentProject.todos.length; i++ ) {
                    const allToDosLi = document.createElement('li')
                    allToDosLi.textContent = currentProject.todos[i].toDoTitle
                    allToDos.appendChild(allToDosLi)  
                } 
            } else {
                projectStorage.splice(projectStorage.indexOf(project), 1)
            }

        })

        allProjectsLi.textContent = project.projectName
        allProjectsLi.id = `project${projectStorage.indexOf(project)}`
        allProjectsDiv.appendChild(allProjectsLi)
        allProjectsDiv.appendChild(projectRemove)
        allProjects.appendChild(allProjectsDiv)

        allToDos.innerHTML = ''
        for ( let i=0; i<currentProject.todos.length; i++ ) {
            const allToDosLi = document.createElement('li')
            allToDosLi.textContent = currentProject.todos[i].toDoTitle
            allToDos.appendChild(allToDosLi)  
        } 

        allProjectsLi.addEventListener('click', () => {
            currentProject = projectStorage[projectStorage.indexOf(project)]
            allToDos.innerHTML = ''
            for ( let i=0; i<currentProject.todos.length; i++ ) {
                const allToDosLi = document.createElement('li')
                allToDosLi.textContent = currentProject.todos[i].toDoTitle
                allToDos.appendChild(allToDosLi)  
            } 
        })
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