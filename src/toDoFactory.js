export default function toDoFactory(title, description, dueDate, priority) {
    let toDoTitle = title;
    let toDoDesc = description;
    let toDoDue = dueDate;
    let toDoPriority = priority;
    let isPinned = false;
    let isCompleted = false;
    return {
        toDoTitle,
        toDoDesc,
        toDoDue,
        toDoPriority,
        isPinned,
        isCompleted,
    }
}