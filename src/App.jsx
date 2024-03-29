import Header from "./components/Header"
import {TaskList} from "./components/TaskList"
import './App.css'
import {useFunctions} from './hooks/useFunctions'
import {useState, useEffect} from 'react';

function App() {

    const [taskList, addTask, deleteTask, updateTask, changeStateTask] = useFunctions();

    const handleDelete = (taskID) => {
       deleteTask(taskID);
    };

    const handleEdit = (taskEdit) => {
        updateTask(taskEdit);
    };

    const handleAddTask = () => {
        const taskName = document.getElementById("task-name").value;
        const taskDescription = document.getElementById("task-description").value;
        addTask(taskName, taskDescription);
        document.getElementById("task-name").value = "";
        document.getElementById("task-description").value = "";
    };

    return (
        <div>
            <Header />
            <div id="add" className="container">
                <span id="inputs">
                    <label htmlFor="task-name">Task Name:</label>
                    <input id="task-name" className="input-text" type="text"></input>
                    <label htmlFor="task-description">Task Description:</label>
                    <input id="task-description" className="input-text" type="text"></input>
                </span>
                <input type="button" className="plus" onClick={handleAddTask}></input>
            </div>
            <TaskList
                list={taskList}
                onDelete={handleDelete}
                onEdit={handleEdit}/>
        </div>
    )
}

export default App
