import {Task} from "./Task";
import './TaskList.css'

export const TaskList = (props) => {
    const {list, onDelete, onEdit} = props;

    return (
        <ul>
            {list.map((task) =>
             <Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onEdit={onEdit}/>)}
        </ul>
    );
}