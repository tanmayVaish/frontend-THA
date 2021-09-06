import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { RemoveTodo } from '../actions';
import { useDispatch } from 'react-redux';

interface todo{
    index: number,
    todo: string
}

const Todo = ({index, todo} : todo) => {

    const dispatch = useDispatch();
    const [icon, setIcon] = useState(faClipboardCheck)
    const [classes, setClasses] = useState("todo todo-remaining");

    return(
        <>
<div className={classes}>
        <span className="todo-text">{todo}</span>
        <FontAwesomeIcon 
        onClick={()=>{
            if(icon === faClipboardCheck){
            setIcon(faTrashAlt)
            setClasses("todo todo-done")
            }
            else if(icon === faTrashAlt){
                dispatch(RemoveTodo(index))
                setIcon(faClipboardCheck)
                setClasses("todo todo-remaining")
            }
            }}
        icon={icon} />
        </div>
        </>
    )
}

export default Todo;