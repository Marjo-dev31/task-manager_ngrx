import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const addTask = createAction(
  '[Task Component] Add',
  props<{ task: Task }>()
);

export const loadTasks = createAction('[Task Component] LoadTasks');

export const deleteTask = createAction(
  '[Task Component] Delete',
  props<{ taskId: number }>()
);

export const toggleTaskCompletion = createAction(
  '[Task Component] ToggleCompletion',
  props<{ taskId: number }>()
);

export const completeTask = createAction(
  '[Task Component] CompleteTask',
  props<{ stateFilter: boolean }>()
);
