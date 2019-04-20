import { SET_TASKS, ADD_TASK, DELETE_TASK } from '../actions/types';

const initialState = {
    tasks: []
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TASKS:
            return {...state, tasks: action.payload};
        case ADD_TASK:
            return {...state, tasks: [action.payload, ...state.tasks]};
        case DELETE_TASK:
            console.log('deleteTask action', action);
            // return state.filter(task => task.id !== action.pyaload);
            return { tasks: state.tasks.filter(task => 
                task.id !== action.payload )}
        default:
            return state;
    }
}