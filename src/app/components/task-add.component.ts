import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TaskActions from '../actions/task.actions';
import { AppState } from '../models/state.model';
import { FormsModule } from '@angular/forms';

let currentId = 1;

@Component({
 selector: 'task-add',
 standalone: true,
 imports: [FormsModule],
 templateUrl: './task-add.component.html',
})
export class TaskAddComponent {
 newTaskName: string = '';

 constructor(private store: Store<AppState>) {}

 addTask() {
   if (this.newTaskName.trim()) {
     this.store.dispatch(
       TaskActions.addTask({
         task: { id: currentId++, name: this.newTaskName, completed: false },
       })
     );
     this.newTaskName = ''; // Réinitialise le champ après ajout
   }
 }
}