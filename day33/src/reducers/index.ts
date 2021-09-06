import todoReduce from "./todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todoReduce,
})

export type storeType = ReturnType<typeof rootReducer>;

export default rootReducer;