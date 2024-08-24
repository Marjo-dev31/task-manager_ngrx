import { createReducer, on } from '@ngrx/store';
import { TaskState } from '../models/state.model';
import * as TaskActions from '../actions/task.actions';

export const initialState: TaskState = {
  tasks: [],
  loading: false,
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, { task }) => {
    return { ...state, tasks: [...state.tasks, task] };
  }),
  on(TaskActions.deleteTask, (state, {taskId})=>{
    return { ...state, tasks: state.tasks.filter((task)=> task.id !== taskId)}
  }),
  on(TaskActions.toggleTaskCompletion, (state, {taskId}) =>{
    return  { ...state, tasks: state.tasks.map((task)=> {
        if(task.id === taskId) {
            return { ...task, completed: !task.completed}
        }
        return task
    })}
  })
);
