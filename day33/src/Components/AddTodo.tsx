import {AddTodo} from "../actions/index";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Add = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState<string>("");
    return(
        <>
            <div className="input-area">
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Add todo.."/>
            <button onClick={() => {
                if(todo !== ""){
                dispatch(AddTodo(todo)); setTodo("")
                }
                else{
                    return "";
                }
                }}>Add Todo</button>
            </div>
</>
    )
}

export default Add;