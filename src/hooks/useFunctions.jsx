import {useState, useEffect} from 'react';

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

export function useFunctions() {

    const [taskList, setTaskList] = useState([]);
    const [tasksID, setTasksID] = useState(0);

    const deleteTask = (taskID) => {
        const newTaskList = taskList.filter((task) => task.id !== taskID);
        setTaskList(newTaskList);
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
    };

    const updateTask = (updatedTask) => {
        const newTaskList = taskList.map((task) => task.id === updatedTask.id ? updatedTask : task);
        setTaskList(newTaskList);
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
    };

    const addTask = (taskName, taskDescription) => {
        const newTask = {id: tasksID, name: taskName, description: taskDescription, state: false};
        const newTaskList = [...taskList, newTask];
        setTaskList(newTaskList);
        const newTasksID = tasksID + 1;
        setTasksID(newTasksID);
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
        localStorage.setItem("tasksID", JSON.stringify(newTasksID));
    };

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("taskList"));
        const storedTasksID = JSON.parse(localStorage.getItem("tasksID"));
        setTasksID(storedTasksID === null ? 5 : storedTasksID);
        setTaskList(storedTasks === null ? tasks : storedTasks);
    }, []);

    return [taskList, addTask, deleteTask, updateTask]
}