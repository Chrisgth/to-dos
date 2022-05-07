import './style.css'
import toDoFactory from './toDoFactory.js'
import projectFactory from './projectFactory.js'
import pageLoad from './pageLoad.js'

let projects = [];

pageLoad();

document.getElementById('newpr').addEventListener('click', () => {
    document.getElementById('projectPopup').classList.add('active')
})
document.getElementById('projectFormSubmit').addEventListener('click', () => {
    let formData = document.getElementById('formPopup')
    let newProject = projectFactory(formData[0].value, formData[1].value)
    console.log(newProject)
    document.getElementById('projectPopup').classList.remove('active')
})