export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export interface Task {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean
};

export interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: Task;
};

export interface RemoveTaskAction {
    type: typeof REMOVE_TASK;
    payload: string;
};

export interface EditTaskAction {
    type: typeof EDIT_TASK;
    payload: Task;
};

export interface CompleteTaskAction {
    type: typeof COMPLETE_TASK;
    payload: string;
};

export type TaskActionsTypes = AddTaskAction | RemoveTaskAction | EditTaskAction | CompleteTaskAction;

export interface TaskState {
    tasks: Task[];
};