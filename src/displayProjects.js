export default function displayProjects(projectArray) {
    const projectsArray = projectArray;
    const allProjectsUl = document.getElementById('allProjects')
    allProjectsUl.innerHTML = ''

    for ( let i=0; i<projectsArray.length; i++ ) {
        let projectNameLi = document.createElement('li')
        projectNameLi.textContent = projectsArray[i].projectName
        allProjectsUl.appendChild(projectNameLi)
    }
}