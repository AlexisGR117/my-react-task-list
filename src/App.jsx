import Header from "./components/Header"
import {TaskList} from "./components/TaskList"
import './App.css'
import {useState, useEffect} from 'react'

const tasks = [
  {
    id: 1,
    name: "Laptop",
    state: false,
    description: "Buy a new gaming laptop"
  },
  {
    id: 2,
    name: "Previous",
    state: false,
    description: "Complete a previous task"
  },
  {
    id: 3,
    name: "Video",
    state: true,
    description: "Create video for youtube"
  },
  {
    id: 4,
    name: "Site",
    state: true,
    description: "Create a new portafolio site"
  }
];

function App() {

    const [taskList, setTaskList] = useState([]);
    const [tasksID, setTasksID] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("taskList"));
        const storedTasksID = JSON.parse(localStorage.getItem("tasksID"));
        setTasksID(storedTasksID === null ? 5 : storedTasksID);
        setTaskList(storedTasks === null ? tasks : storedTasks);
    }, []);

    const handleDelete = (taskID) => {
        const newTaskList = taskList.filter((task) => task.id !== taskID);
        setTaskList(newTaskList);
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
    };

    const handleChangeState = (taskID) => {
        const newTaskList = taskList.map((task) => task.id === taskID ? {...task, state: !task.state} : task);
        setTaskList(newTaskList);
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
    };

    const handleEdit = (taskEdit) => {
        handleDelete(taskEdit.id);
        document.getElementById("task-name").value = taskEdit.name;
        document.getElementById("task-description").value = taskEdit.description;
    };

    const handleAddTask = () => {
        const taskName = document.getElementById("task-name").value;
        const taskDescription = document.getElementById("task-description").value;
        console.log(tasksID);
        const newTask = {id: tasksID, name: taskName, description: taskDescription, state: false};
        const newTaskList = [...taskList, newTask];
        setTaskList(newTaskList);
        document.getElementById("task-name").value = "";
        document.getElementById("task-description").value = "";
        const newTasksID = tasksID + 1;
        setTasksID(newTasksID);
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
        localStorage.setItem("tasksID", JSON.stringify(newTasksID));
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
                onChangeState={handleChangeState}
                onEdit={handleEdit}/>
        </div>
    )
}

export default App
