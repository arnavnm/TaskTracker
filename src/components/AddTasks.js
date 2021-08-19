import { useState } from "react"

const AddTasks = (props) => {

    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e)=> {

        e.preventDefault()
        if(!title){
            alert("Add title")
            return
        }
        if(!time){
            alert("Add time")
            return
        }

        props.onAdd({title,time,reminder})
        setTitle('')
        setTime('')
        setReminder(false)
    }
        return (
        <form className = "add-form" onSubmit = {onSubmit}>
            <div className = "form-control">
                <label>Task</label>
                <input type = 'text' value= {title} onChange = {(e)=> setTitle(e.target.value)} placeholder = "Add title"></input>
                <label>Time</label>
                <input type = 'text' value= {time} onChange = {(e)=> setTime(e.target.value)} placeholder = "Add time"></input>
                <label>Reminder</label>
                <input type = 'checkbox' checked = {reminder} value= {reminder} onChange = {(e)=> setReminder(e.currentTarget.checked)}></input>
                
            </div>
            <input type = 'submit' value = "Set task"></input>
        </form>
    )
}

export default AddTasks
