import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect} from "react"
import AddTasks from "./components/AddTasks";

  

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])


  useEffect(() => {

    const getTasks = async () => {
      const tasksResponse = await fetchTasks()
      setTasks(tasksResponse)
    }

    getTasks()
  }, [])

  

  // for use effect to fetch task 
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const addTask = async (task) => {


    const id = tasks.length + Math.floor(Math.random()*100)
    //console.log(id)
    const newTask = {id , ...task}
    console.log(newTask)

    const res = await fetch(`http://localhost:5000/tasks`, 
    {

      method: "POST", 
      headers: {
              'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }
    )

    const data = await res.json()
    setTasks([...tasks, data])

  }

  const onDelete = async (id) =>{

    await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method:'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder= async (id) => {
const taskToToggle = await fetchTask(id)
const updatedTask = {...taskToToggle, 
reminder: !taskToToggle.reminder}

const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json'
},
  body: JSON.stringify(updatedTask)
})

const data = await res.json()
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task , reminder: data.reminder} : task ))
  }

 
  const [name, addName] = useState('')
  
 
  return (


    <div className="App">
      <input type = 'text' value= {name} onChange = {(e)=> addName(e.target.value)} placeholder = "Your name"></input>
      <Header name = {name} onAdd = {() => setShowAddTask(!showAddTask) } showAdd = {showAddTask}/>
      {showAddTask && <AddTasks onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {onDelete} toggleReminder = {toggleReminder} /> : ("No Tasks")}
      
      
    </div>
  );
}

export default App;
