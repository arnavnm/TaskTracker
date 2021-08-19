import {FaTimes} from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className = {`task ${ props.task.reminder ? 'reminder' : ''}`} key = {props.id} onDoubleClick = {() => props.toggleReminder(props.task.id)}>
            <h2>{props.task.title}<FaTimes onClick = {() => props.onDelete(props.task.id)} style ={{color: "red", cursor: "pointer"}}/></h2>
            <p>{props.task.time}</p>
        </div>
    )
}

export default Task
