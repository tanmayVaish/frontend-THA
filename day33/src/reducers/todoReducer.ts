interface addTodo{
    type: string,
    payload: string
}

interface removeTodo{
    type: string,
    payload: number
}

type todo = addTodo | removeTodo;

const todoReduce= (state :string[] = [], action : todo) => {
    if(action.type === "ADD_TODO"){
        return [...state,action.payload]
    } else if ( action.type === "REMOVE_TODO" ){
        return state.filter((item, index) => index !== action.payload)
    }
    return state;
}

export default todoReduce;