//src/app/component/task-add.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/state.models';
import * as TaskActions from '../actions/task.actions';

let currentId = 1;

@Component({
 selector: 'task-add',
 templateUrl: 'task-add.component.html',
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