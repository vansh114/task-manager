import { combineReducers, createStore } from "redux";
import { taskReducer } from "./reducers/taskReducer";

const rootReducer = combineReducers({
    task: taskReducer,
})

export const store = createStore(rootReducer);

export type AppState = ReturnType <typeof rootReducer>;