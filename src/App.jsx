import Header from "./components/Header"
import {TaskList} from "./components/TaskList"
import './App.css'

const tasks = [
  {
    name: "Buy a new gaming laptop", 
    state: false
  },
  {
    name: "Complete a previous task", 
    state: false
  },
  {
    name: "Create video for youtube", 
    state: true
  },
  {
    name: "Create a new portafolio site", 
    state: true
  }
];

function App() {
  return (
    <div>
      <Header />
      <TaskList list={tasks}/>
    </div>
  )
}

export default App
