import { Task } from "./task.model";

export interface TaskState {
    tasks: Task[];
    loading: boolean;
}

export interface AppState {
    taskState: TaskState;
}