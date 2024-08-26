import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskAddComponent } from "./components/task-add.component";
import { Observable, of } from 'rxjs';
import { Task } from './models/task.model';
import { Store } from '@ngrx/store';
import { AppState } from './models/state.model';
import { countCompletedTasks, selectLoading, selectTasks } from './reducers/task.selectors';
import * as TaskActions from './actions/task.actions' 
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TaskAddComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  isLoading$!: Observable<boolean>;
  newTaskName: string = '';
  tasksCompletedCount$: Observable<number> = of(0)

  selectedValue!: boolean

  readonly store = inject(Store<AppState>);

  ngOnInit(){
    this.tasks$ = this.store.select(selectTasks);

    this.isLoading$ = this.store.select(selectLoading);
    this.tasksCompletedCount$ = this.store.select(countCompletedTasks);

    this.tasks$.subscribe((data)=>{
      console.log('Tasks:', data)
    });

    this.store.dispatch(TaskActions.loadTasks());

  }

  completedTask(task: Task) {
    this.store.dispatch(TaskActions.toggleTaskCompletion({taskId: task.id}))
    console.log(task)
  }

  deleteTask(taskId: number) {
    this.store.dispatch(TaskActions.deleteTask({taskId}))
  }

  filter(stateFilter: boolean){
    this.store.dispatch(TaskActions.completeTask({stateFilter}))
    console.log(typeof(this.selectedValue))
  }
}
