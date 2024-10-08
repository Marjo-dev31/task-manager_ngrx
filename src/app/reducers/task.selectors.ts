import { createSelector } from '@ngrx/store';
import { AppState, TaskState } from '../models/state.model';
import { Task } from '../models/task.model';

export const selectTaskState = (state: AppState) => state.taskState;

export const selectTasks = createSelector(
  selectTaskState,
  (taskState: TaskState) => taskState?.tasks
);

export const selectLoading = createSelector(
  selectTaskState,
  (taskState: TaskState) => (taskState ? taskState.loading : false)
);

export const countCompletedTasks = createSelector(
  selectTaskState,
  (taskState: TaskState) => taskState.tasks.filter(task => task.completed).length
)
