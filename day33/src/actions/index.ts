const AddTodo = (todo: string) => {
    return({
        type: "ADD_TODO",
        payload: todo,
    })
}

const RemoveTodo = (id: number) => {
    return({
        type: "REMOVE_TODO",
        payload: id,
    })
}

export {AddTodo, RemoveTodo};