import PropTypes from 'prop-types'


const Button = (props) => {
    
   

    return (
        <>
             <button onClick = {props.onClick} style= {{backgroundColor: props.color, color: 'white'}} 
             className ="btn">{props.text}</button>
        </>
    )
}

export default Button