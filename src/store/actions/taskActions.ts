import { ADD_TASK, COMPLETE_TASK, EDIT_TASK, REMOVE_TASK, Task, TaskActionsTypes } from "../types/taskTypes";

export const addTask = (task: Task): TaskActionsTypes => ({
    type: ADD_TASK,
    payload: task,   
});

export const removeTask = (id: string): TaskActionsTypes => ({
    type: REMOVE_TASK,
    payload: id,
});

export const editTask = (id: string, task: Task): TaskActionsTypes => ({
    type: EDIT_TASK,
    payload: task,
});

export const completeTask = (id: string): TaskActionsTypes => ({
    type: COMPLETE_TASK,
    payload: id,
});