import {useState} from "react";

const Count = () => {

    // styling

    const style = {

        'background-color':'black',
        'height':'10vh',
        'width':'10vh',
        'font-size':'5vh',
        'color':'blue',
        'box-shadow':'black 1px 1px 4px 5px'
    }

    const [count,setCount] = useState(0);

    const increaseCount = () => {
        setCount(count+1);
    }


    return(
        <button style={style} onClick={increaseCount}>{count}</button>
    )
}

export default Count;