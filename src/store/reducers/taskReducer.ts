import { ADD_TASK, COMPLETE_TASK, EDIT_TASK, REMOVE_TASK, TaskActionsTypes, TaskState } from "../types/taskTypes";

const initialState: TaskState = {
    tasks: [],
};

export const taskReducer = (state = initialState, action: TaskActionsTypes): TaskState => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case REMOVE_TASK: {
            return { tasks: state.tasks.filter(task => task.id !== action.payload) };
        }
        case EDIT_TASK: {
            return { ...state, tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task) };
        }
        case COMPLETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ?
                        { ...task, isCompleted: !task.isCompleted } : task),
            }
        }
        default:
            return state;
    }
};