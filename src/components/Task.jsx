import './Task.css'

export const Task = (props) => {
    const {task, onDelete, onEdit} = props;

    const handleDeleteClick = () => {
        onDelete(task.id);
    };

    const handleToggleState  = () => {
        const updatedTask = {...task, state: !task.state};
        onEdit(updatedTask);
    };

    const handleEditClick = () => {
        const taskElement = document.getElementById("task-"+task.id);
        taskElement.classList.add("oculto");
        const inputsElement = document.getElementById("inputs-"+task.id);
        inputsElement.classList.remove("oculto");
        const editElement = document.getElementById("edit-"+task.id);
        editElement.classList.add("oculto");
        const saveElement = document.getElementById("save-"+task.id);
        saveElement.classList.remove("oculto");
    };

    const handleSaveClick = () => {
        const taskElement = document.getElementById("task-"+task.id);
        taskElement.classList.remove("oculto");
        const inputsElement = document.getElementById("inputs-"+task.id);
        inputsElement.classList.add("oculto");
        const editElement = document.getElementById("edit-"+task.id);
        editElement.classList.remove("oculto");
        const saveElement = document.getElementById("save-"+task.id);
        saveElement.classList.add("oculto");
    };

    const handleChangeName = (event) => {
        const newName = event.target.value;
        const updatedTask = {...task, name: newName};
        onEdit(updatedTask);
    };

    const handleChangeDescription = (event) => {
        const newDescription = event.target.value;
        const updatedTask = {...task, description: newDescription};
        onEdit(updatedTask);
    };

    return (
        <li>
            <input type="checkbox" checked={task.state} className="checkbox-round" onChange={handleToggleState }></input>
            <div id={`task-${task.id}`} className="task">
                <div className={task.state ? "checked" : ""}>{task.name}</div>
                <div className="description">{task.description}</div>
            </div>
            <div id={`inputs-${task.id}`} className="task oculto">
                <input type="text" className="input-task" id={`nameInput-${task.id}`} value={task.name} onChange={handleChangeName}></input>
                <input type="text" className="input-task" id={`descriptionInput-${task.id}`} value={task.description} onChange={handleChangeDescription}></input>
            </div>
            <input id={`save-${task.id}`} type="button" className="button save oculto"  onClick={handleSaveClick}></input>
            <input id={`edit-${task.id}`} type="button" className="button edit"  onClick={handleEditClick}></input>
            <input type="button" className="button delete" onClick={handleDeleteClick}></input>
        </li>
    );
}