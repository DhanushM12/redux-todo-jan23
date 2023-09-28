import { ADD_TASK } from "../actions";
import { combineReducers } from "redux";

const taskReducers = (state = [], action) => {
    switch(action.type) {
        case ADD_TASK:
            state = state.concat(action.payload)
            break;
        default:
            break;
    }
    return state;
}


const reducers = combineReducers({
    tasks: taskReducers
})

export default reducers;