import Header from "./components/Header"
import {TaskList} from "./components/TaskList"
import './App.css'
import {useFunctions} from './hooks/useFunctions'
import {useState, useEffect} from 'react';
import { useForm } from "react-hook-form"

function App() {

    const [taskList, addTask, deleteTask, updateTask, changeStateTask] = useFunctions();

    const handleDelete = (taskID) => {
       deleteTask(taskID);
    };

    const handleEdit = (taskEdit) => {
        updateTask(taskEdit);
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { isValid, errors },
    } = useForm({ mode: "all" });

    const handleAddTask = (data) => {
        const taskName = data.taskName;
        const taskDescription = data.taskDescription;
        addTask(taskName, taskDescription);
        document.getElementById("task-name").value = "";
        document.getElementById("task-description").value = "";
    };

    return (
        <div>
            <Header />
            <form id="add" className="container" onSubmit={handleSubmit(handleAddTask)}>
                <span id="inputs">
                    <label htmlFor="task-name">Task Name:</label>
                    <input {...register("taskName", {required: "Task name is required", minLength: { value: 3, message: "Task name is too short" }})} id="task-name" className="input-text" type="text"></input>
                                        <span className="error" role="alert">{errors.taskName?.message}</span>
                    <label htmlFor="task-description">Task Description:</label>
                    <input {...register("taskDescription")} id="task-description" className="input-text" type="text"></input>
                </span>
                <button disabled={!isValid} className="plus"></button>
            </form>
            <TaskList
                list={taskList}
                onDelete={handleDelete}
                onEdit={handleEdit}/>
        </div>
    )
}

export default App
