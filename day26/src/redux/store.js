import { createStore} from "redux";
import {userDataReducer} from "./userData/userDataReducer";

const store = createStore(userDataReducer);

export default store;