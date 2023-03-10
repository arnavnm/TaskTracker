
import Task from "./Task"

const Tasks = (props) => {

    
    return (
        <>
            {props.tasks.map((task) => (
                <Task key = {task.id} task = {task} onDelete ={props.onDelete} toggleReminder = {props.toggleReminder}/>
            ))}
        </>
    )
}

export default Tasks
