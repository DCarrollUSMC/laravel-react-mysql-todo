import { SET_TASKS, ADD_TASK, DELETE_TASK } from './types';

export function setTasks(payload) {
    return { type: SET_TASKS, payload };
}

export function addTask(payload) {
    return { type: ADD_TASK, payload };
}

export function deleteTask(payload) {
    return { type: DELETE_TASK, payload };
}