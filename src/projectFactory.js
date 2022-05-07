// factory function created for the purpose of storing todos created with the todofactory function
export default function projectFactory(name, description) {
    let todos = []
    let projectName = name
    let projectDescription = description
    return {
        todos,
        projectName,
        projectDescription,
    }
}