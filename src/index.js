import './style.css'
import toDoFactory from './toDoFactory.js'
import projectFactory from './projectFactory.js'
import pageLoad from './pageLoad.js'
import displayProjects from './displayProjects';

let projects = [];

pageLoad();
displayProjects(projects);

const newProject = document.getElementById('newProject')
const projectPopup = document.getElementById('projectPopup')
const projectFormSubmit = document.getElementById('projectFormSubmit')

// makes the new project creation popup visible
newProject.addEventListener('click', () => {
projectPopup.classList.add('active')
})

// utilizes the projectFactory function to create a new project with distinct parameters input inside the popup form
projectFormSubmit.addEventListener('click', () => {
let formData = document.getElementById('formPopup')
let newProject = projectFactory(formData[0].value, formData[1].value)
projects.push(newProject)
projectPopup.classList.remove('active')
displayProjects(projects);
})

