import { projectManager } from "./projectManager"
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
    const projectOverview = document.createElement('div')
    const newTask = document.createElement('button')

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
            toDoFormInput = document.createElement('textarea')
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

    newTask.textContent = 'Add new task'
    newTask.addEventListener('click', () => {
        if (newTask.textContent === 'Add new task') {
            toDoForm.classList.toggle('inactive')
            newToDo.classList.toggle('inactive')
            newTask.textContent = 'Close task creation'
        } else {
            toDoForm.classList.toggle('inactive')
            newToDo.classList.toggle('inactive')
            newTask.textContent = 'Add new task'           
        }
    })

    newToDo.textContent = 'Create Task'
    newToDo.id = 'newToDo'
    newToDo.addEventListener('click', () => {
        if (projectManager.projectStorage.length === 0) {
            alert('Please create a project first')
            return
        }
        projectManager.newToDo(false);
    })
    allToDos.id = 'allToDos'
    toDoForm.id = 'toDoForm'

    let projectTitle = document.createElement('input')
    let projectDescription = document.createElement('textarea')

    projectTitle.value = 'Project'
    projectDescription.value = 'Project Description'

    projectTitle.id = 'projectTitle'
    projectDescription.id = 'projectDescription'
    projectOverview.id = 'projectOverview'

    projectOverview.textContent = 'Project Overview'

    projectTitle.addEventListener('input', projectManager.projectTitleEditor)
    projectDescription.addEventListener('input', projectManager.projectDescriptionEditor)

    projectOverview.appendChild(projectTitle)
    projectOverview.appendChild(projectDescription)

    main.appendChild(projectOverview)
    main.appendChild(newTask)
    main.appendChild(toDoForm)
    main.appendChild(newToDo)
    main.appendChild(allToDos)

    toDoForm.classList.toggle('inactive')
    newToDo.classList.toggle('inactive')

    const newProject = document.createElement('button')
    const allProjects = document.createElement('ul')
    newProject.addEventListener('click', () => {
        projectPopup.classList.toggle('active')
    })

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
            formInput = document.createElement('textarea')
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
    const formCloseButton = document.createElement('button')
    formCloseButton.id = 'formCloseButton'
    formCloseButton.textContent = 'X'
    formCloseButton.type = 'button'
    formCloseButton.addEventListener('click', () => {
        projectPopup.classList.toggle('active')
    })
    formButton.type = 'button'
    formButton.id = 'projectFormSubmit'
    formButton.textContent = 'Create Project'
    formButton.addEventListener('click', () => {
        if (formPopup[0].value === '' || formPopup[1].value === ''){
            alert('Please do not leave empty fields')
            return;
        }
        allToDos.innerHTML = ''
        projectManager.newProject(false)
        projectPopup.classList.toggle('active')
    })
    formPopup.appendChild(formCloseButton)
    formPopup.appendChild(formButton)

    body.appendChild(projectPopup)

    if ( localStorage.length !== 0 ) {
        let storage = JSON.parse(localStorage.getItem('projectStorage'))
        for (let i=0; i<storage.length; i++) {
            allToDos.innerHTML = ''
            projectManager.newProject(true, i)
        }
    } 
}