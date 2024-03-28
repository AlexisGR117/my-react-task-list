import {Task} from "./Task";
import './TaskList.css'

export const TaskList = (props) => {
    const {list, onDelete, onEdit, onChangeState} = props;

    return (
        <ul>
            {list.map((task) =>
             <Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onChangeState={onChangeState}
                onEdit={onEdit}/>)}
        </ul>
    );
}