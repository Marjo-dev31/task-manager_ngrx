import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './reducers/task.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(StoreModule.forRoot({ taskState: taskReducer}))]
};
