import projectFactory from "./projectFactory"
import toDoFactory from "./toDoFactory"
export const projectManager = (() => {

    const store = () => {
        localStorage.setItem('projectStorage', JSON.stringify(projectStorage))
    }

    let projectStorage = []
    let currentProject = 0

    if (localStorage.length !== 0) {
        let storage = localStorage.getItem('projectStorage')
        projectStorage = JSON.parse(storage)
        console.log(projectStorage)
    }
    const newProject = (storageCheck, storageItem) => {
        const allProjects = document.querySelector('#allProjects')
        const allToDos = document.getElementById('allToDos')
        const formPopup = document.getElementById('formPopup')
        const projectTitle = document.getElementById('projectTitle')
        const projectDesc = document.getElementById('projectDescription')

        let project = 0

        if (storageCheck === false) {
            project = projectFactory(formPopup[0].value, formPopup[1].value)
            projectStorage.push(project)
            store()
            currentProject = projectStorage[projectStorage.indexOf(project)]
        } else {
            currentProject = projectStorage[storageItem]
            project = currentProject
        }
        projectTitle.value = currentProject.projectName
        projectDesc.value = currentProject.projectDescription

        const allProjectsDiv = document.createElement('div')
        const allProjectsLi = document.createElement('li')
        const projectRemove = document.createElement('button')

        projectRemove.textContent = 'X'

        projectRemove.addEventListener('click', () => {
            let allProjectsNodeArray = Array.from(allProjects.childNodes)
            allProjectsNodeArray[projectStorage.indexOf(project)].remove()
            if ( currentProject === projectStorage[projectStorage.indexOf(project)]){
                projectStorage.splice(projectStorage.indexOf(project), 1)
                currentProject = projectStorage[0]
                store()
                allToDos.innerHTML = ''

                if ( projectStorage.length === 0 ) {
                    projectTitle.value = 'Project'
                    projectDesc.value = 'Project Description'              
                    return
                }

                projectTitle.value = currentProject.projectName
                projectDesc.value = currentProject.projectDescription 

                for ( let i=0; i<currentProject.todos.length; i++ ) {
                    const allToDosDiv = document.createElement('div')
                    const allToDosForm = document.createElement('form')
                    const toDosTitle = document.createElement('input')
                    const dateDue = document.createElement('p')
            
                    dateDue.textContent = currentProject.todos[i].toDoDue
                    toDosTitle.disabled = true
                    toDosTitle.value = currentProject.todos[i].toDoTitle
                    
                    allToDosForm.appendChild(toDosTitle)
            
                    const toDoRemove = document.createElement('button')
                    const toDoExpand = document.createElement('button')
            
                    allToDosDiv.appendChild(allToDosForm)
                    allToDosDiv.appendChild(dateDue)
                    allToDosDiv.appendChild(toDoRemove)
                    allToDosDiv.appendChild(toDoExpand)

                    if (currentProject.todos[i].isPinned === true) {
                        allToDos.prepend(allToDosDiv)
                    } else {
                        allToDos.appendChild(allToDosDiv)
                    }

                    allToDosDiv.appendChild(toDoPin)

                    toDoPin.addEventListener('click', () => {
                        if (projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned === false) {
                            allToDos.prepend(allToDosDiv)
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned = true
                            console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned)
                        } else {
                            allToDos.append(allToDosDiv)
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned = false
                            console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned)               
                        }
                        store()
                    })
            
                    toDoRemove.addEventListener('click', () => {
                        let allToDosNodeArray = Array.from(allToDos.childNodes)
                        allToDosNodeArray[allToDosNodeArray.indexOf(allToDosDiv)].remove()
                        projectStorage[projectStorage.indexOf(currentProject)].todos.splice(allToDosNodeArray.indexOf(allToDosDiv), 1)
                        store()
                    })
            
                    toDoExpand.addEventListener('click', () => {
                        if ( allToDosForm.childNodes.length === 1 ) {
                            toDosTitle.disabled = false
                            const toDosDescription = document.createElement('textarea')
                            const toDosDue = document.createElement('input')
                            toDosDue.type = 'date'
                            toDosDescription.value = currentProject.todos[i].toDoDesc
                            toDosDue.value = currentProject.todos[i].toDoDue
            
                            toDosDescription.addEventListener('input', (e) => {
                                projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoDesc = e.target.value
                                console.log(projectStorage)
                                store();
                            })
            
                            toDosDue.addEventListener('input', (e) => {
                                projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoDue = e.target.value
                                dateDue.textContent = e.target.value
                                console.log(projectStorage)
                                store();
                            })

                            toDosTitle.addEventListener('input', (e) => {
                                projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoTitle = e.target.value
                                console.log(projectStorage)
                                store();
                            })
            
                            allToDosForm.appendChild(toDosDescription)
                            allToDosForm.appendChild(toDosDue)
                            store()
                        } else {
                            toDosTitle.disabled = true
                            for ( let i=0; i<allToDosForm.childNodes.length; i++) {
                                allToDosForm.removeChild(allToDosForm.lastChild)
                            }
                            store()
                        }
                    })
                    store()
                } 
            } else {
                projectStorage.splice(projectStorage.indexOf(project), 1)
                store()
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
            projectTitle.value = currentProject.projectName
            projectDesc.value = currentProject.projectDescription
            allToDos.innerHTML = ''
            for ( let i=0; i<currentProject.todos.length; i++ ) {
                const allToDosDiv = document.createElement('div')
                const allToDosForm = document.createElement('form')
                const toDosTitle = document.createElement('input')
                const dateDue = document.createElement('p')
        
                dateDue.textContent = currentProject.todos[i].toDoDue
                toDosTitle.disabled = true
                toDosTitle.value = currentProject.todos[i].toDoTitle
        
                allToDosForm.appendChild(toDosTitle)
        
                const toDoRemove = document.createElement('button')
                const toDoExpand = document.createElement('button')
        
                allToDosDiv.appendChild(allToDosForm)
                allToDosDiv.appendChild(dateDue)
                allToDosDiv.appendChild(toDoRemove)
                allToDosDiv.appendChild(toDoExpand)

                if (currentProject.todos[i].isPinned === true) {
                    allToDos.prepend(allToDosDiv)
                } else {
                    allToDos.appendChild(allToDosDiv)
                }
                store()
                const toDoPin = document.createElement('button')
                allToDosDiv.appendChild(toDoPin)

                toDoPin.addEventListener('click', () => {
                    if (projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned === false) {
                        allToDos.prepend(allToDosDiv)
                        projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned = true
                        console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned)
                    } else {
                        allToDos.append(allToDosDiv)
                        projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned = false
                        console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[i].isPinned)               
                    }
                    store()
                })
         
                toDoRemove.addEventListener('click', () => {
                    let allToDosNodeArray = Array.from(allToDos.childNodes)
                    allToDosNodeArray[allToDosNodeArray.indexOf(allToDosDiv)].remove()
                    projectStorage[projectStorage.indexOf(currentProject)].todos.splice(allToDosNodeArray.indexOf(allToDosDiv), 1)
                    store()
                })
        
                toDoExpand.addEventListener('click', () => {
                    if ( allToDosForm.childNodes.length === 1 ) {
                        toDosTitle.disabled = false
                        const toDosDescription = document.createElement('textarea')
                        const toDosDue = document.createElement('input')
                        toDosDue.type = 'date'
                        toDosDescription.value = currentProject.todos[i].toDoDesc
                        toDosDue.value = currentProject.todos[i].toDoDue
        
                        toDosDescription.addEventListener('input', (e) => {
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoDesc = e.target.value
                            console.log(projectStorage)
                            store();
                        })
        
                        toDosDue.addEventListener('input', (e) => {
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoDue = e.target.value
                            dateDue.textContent = e.target.value
                            console.log(projectStorage)
                            store();
                        })

                        toDosTitle.addEventListener('input', (e) => {
                            projectStorage[projectStorage.indexOf(currentProject)].todos[i].toDoTitle = e.target.value
                            console.log(projectStorage)
                            store();
                        })
        
                        allToDosForm.appendChild(toDosDescription)
                        allToDosForm.appendChild(toDosDue)
                    } else {
                        toDosTitle.disabled = true
                        for ( let i=0; i<allToDosForm.childNodes.length; i++) {
                            allToDosForm.removeChild(allToDosForm.lastChild)
                        }
                    }
                    store()
                })
            } 
        })
    }
    const newToDo = () => {
        const allToDos = document.getElementById('allToDos')
        const toDoForm = document.getElementById('toDoForm')
        
        let toDo = toDoFactory(toDoForm[0].value, toDoForm[1].value, toDoForm[2].value)
        currentProject.todos.push(toDo)
        store()

        const allToDosDiv = document.createElement('div')
        const allToDosForm = document.createElement('form')
        const toDosTitle = document.createElement('input')
        const dateDue = document.createElement('p')

        dateDue.textContent = currentProject.todos[currentProject.todos.indexOf(toDo)].toDoDue
        toDosTitle.disabled = true
        toDosTitle.value = currentProject.todos[currentProject.todos.indexOf(toDo)].toDoTitle

        allToDosForm.appendChild(toDosTitle)

        const toDoRemove = document.createElement('button')
        const toDoExpand = document.createElement('button')
        const toDoPin = document.createElement('button')

        allToDosDiv.appendChild(allToDosForm)
        allToDosDiv.appendChild(dateDue)
        allToDosDiv.appendChild(toDoRemove)
        allToDosDiv.appendChild(toDoExpand)
        allToDosDiv.appendChild(toDoPin)

        allToDos.appendChild(allToDosDiv)

        toDoPin.addEventListener('click', () => {
            if (projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].isPinned === false) {
                allToDos.prepend(allToDosDiv)
                projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].isPinned = true
                console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].isPinned)
            } else {
                allToDos.append(allToDosDiv)
                projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].isPinned = false
                console.log(projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].isPinned)               
            }
            store()
        })
 
        toDoRemove.addEventListener('click', () => {
            let allToDosNodeArray = Array.from(allToDos.childNodes)
            allToDosNodeArray[allToDosNodeArray.indexOf(allToDosDiv)].remove()
            projectStorage[projectStorage.indexOf(currentProject)].todos.splice(allToDosNodeArray.indexOf(allToDosDiv), 1)
            store()
        })

        toDoExpand.addEventListener('click', () => {
            if ( allToDosForm.childNodes.length === 1 ) {
                toDosTitle.disabled = false
                const toDosDescription = document.createElement('textarea')
                const toDosDue = document.createElement('input')
                toDosDue.type = 'date'
                toDosDescription.value = currentProject.todos[currentProject.todos.indexOf(toDo)].toDoDesc
                toDosDue.value = currentProject.todos[currentProject.todos.indexOf(toDo)].toDoDue

                toDosDescription.addEventListener('input', (e) => {
                    projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].toDoDesc = e.target.value
                    console.log(projectStorage)
                    store();
                })

                toDosDue.addEventListener('input', (e) => {
                    projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].toDoDue = e.target.value
                    dateDue.textContent = e.target.value
                    console.log(projectStorage)
                    store();
                })

                toDosTitle.addEventListener('input', (e) => {
                    projectStorage[projectStorage.indexOf(currentProject)].todos[currentProject.todos.indexOf(toDo)].toDoTitle = e.target.value
                    console.log(projectStorage)
                    store();
                })

                allToDosForm.appendChild(toDosDescription)
                allToDosForm.appendChild(toDosDue)
                store()
            } else {
                toDosTitle.disabled = true
                for ( let i=0; i<allToDosForm.childNodes.length; i++) {
                    allToDosForm.removeChild(allToDosForm.lastChild)
                }
                store()
            }
        })

    }

    const projectTitleEditor = (e) => {
        if ( projectStorage.length === 0 ) return;
        projectStorage[projectStorage.indexOf(currentProject)].projectName = e.target.value
        let allProjectsNodeArray = Array.from(allProjects.childNodes)
        let currentProjectDivArray = Array.from(allProjectsNodeArray[projectStorage.indexOf(currentProject)].childNodes)
        currentProjectDivArray[0].textContent = e.target.value
        store()
    }

    const projectDescriptionEditor = (e) => {
        if ( projectStorage.length === 0 ) return;
        projectStorage[projectStorage.indexOf(currentProject)].projectDescription = e.target.value
        store()
    }
 
    return {
        projectStorage,
        newProject,
        currentProject,
        newToDo,
        projectTitleEditor,
        projectDescriptionEditor,
    }
})()