import './Task.css'

export const Task = (props) => {
    const {task, onDelete, onChangeState, onEdit} = props;

    const handleDeleteClick = () => {
        onDelete(task.id);
    };

    const handleChangeState = () => {
        onChangeState(task.id);
    };

    const handleEditClick = () => {
        onEdit(task);
    };

    return (
        <li>
            <input type="checkbox" checked={task.state} className="checkbox-round" onChange={handleChangeState}></input>
            <div className="task">
                <div className={task.state ? "checked" : ""}>{task.name}</div>
                <div className="description">{task.description}</div>
            </div>
            <input type="button" className="button edit"  onClick={handleEditClick}></input>
            <input type="button" className="button delete" onClick={handleDeleteClick}></input>
        </li>
    );
}