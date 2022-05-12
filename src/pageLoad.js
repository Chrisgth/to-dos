import { projectCreator } from "./projectCreator"
import { toDoCreator } from "./toDoCreator"
// loads the page with full functionality
export default function pageLoad() {
    // html boilerplate
    const body = document.querySelector('body')
    const header = document.createElement('header')
    const main = document.createElement('main')
    const sidebar = document.createElement('div')

    const pageLogo = document.createElement('p')

    pageLogo.textContent = 'MyToDoList'
    header.appendChild(pageLogo)

    const newToDo = document.createElement('button')
    const allToDos = document.createElement('ul')
    const toDoForm = document.createElement('form')

    for( let i=0; i<3; i++ ) {
        let toDoFormInputDiv = document.createElement('div')
        let toDoFormLabel = document.createElement('label')
        let toDoFormInput = document.createElement('input')

        if (i===0) {
            toDoFormInput.id = 'toDoName'
            toDoFormInput.name = 'toDoName'
            toDoFormLabel.htmlFor = 'toDoName'
            toDoFormLabel.textContent = 'Title'
        } else if (i===1) {
            toDoFormInput.id = 'toDoDescription'
            toDoFormInput.name = 'toDoDescription'
            toDoFormLabel.htmlFor = 'toDoDescription' 
            toDoFormLabel.textContent = 'Description'          
        } else if (i===2) {
            toDoFormInput.id = 'toDoDue'
            toDoFormInput.name = 'toDoDue'
            toDoFormInput.type = 'date'
            toDoFormLabel.htmlFor = 'toDoDue'
            toDoFormLabel.textContent = 'Due Date'
        }
        toDoFormInputDiv.appendChild(toDoFormLabel)
        toDoFormInputDiv.appendChild(toDoFormInput)
        toDoForm.appendChild(toDoFormInputDiv)
    }

    newToDo.textContent = 'createnewtodo'
    newToDo.id = 'newToDo'
    allToDos.id = 'allToDos'
    toDoForm.id = 'toDoForm'
    main.appendChild(toDoForm)
    main.appendChild(newToDo)
    main.appendChild(allToDos)

    const newProject = document.createElement('button')
    const allProjects = document.createElement('ul')

    newProject.textContent = 'New Project'
    newProject.id = 'newProject'
    allProjects.id = 'allProjects'
    sidebar.appendChild(newProject)
    sidebar.appendChild(allProjects)
    sidebar.id = 'sidebar'

    body.appendChild(header)
    body.appendChild(sidebar)
    body.appendChild(main)

    // hidden pop-up overlay, meant to activate when new project button is clicked
    const projectPopup = document.createElement('div')
    const formPopup = document.createElement('form')
    projectPopup.id = 'projectPopup'
    formPopup.id = 'formPopup'
    projectPopup.appendChild(formPopup)

    for( let i=0; i<2; i++ ) {
        let formInputDiv = document.createElement('div')
        let formLabel = document.createElement('label')
        let formInput = document.createElement('input')

        if (i===0) {
            formInput.id = 'projectName'
            formInput.name = 'projectName'
            formLabel.htmlFor = 'projectName'
            formLabel.textContent = 'Project Name'
        } else if (i===1) {
            formInput.id = 'projectDescription'
            formInput.name = 'projectDescription'
            formLabel.htmlFor = 'projectDescription' 
            formLabel.textContent = 'Project Description'          
        }
        formInputDiv.appendChild(formLabel)
        formInputDiv.appendChild(formInput)
        formPopup.appendChild(formInputDiv)
    }
    const formButton = document.createElement('button')
    formButton.type = 'button'
    formButton.id = 'projectFormSubmit'
    formButton.textContent = 'Create Project'

    formPopup.appendChild(formButton)

    body.appendChild(projectPopup)
}