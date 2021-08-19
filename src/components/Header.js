import { yellow } from 'chalk'
import propTypes from 'prop-types'
import Button from "./Button";

const Header = (props) => {

   

    return (
        <header>
            <h1 style = {HeaderStyles} >Hi {props.name}</h1>
            <div className ="Title"><h2>Your Task Tracker</h2>
            <Button onClick = {props.onAdd} color = {props.showAdd ? 'red' : 'green'} text = {!props.showAdd ? 'Add' : 'Close'}/>  
       
            </div>
        </header>
        
    )
}

Header.defaultProps = {name: "Default"}
Header.propTypes = {
    name: propTypes.string.isRequired
}

const HeaderStyles = {
    color: 'black', 
    backgroundColor: 'grey'
}

export default Header
