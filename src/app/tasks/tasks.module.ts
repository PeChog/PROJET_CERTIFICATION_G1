import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { PageListTasksComponent } from './pages/page-list-tasks/page-list-tasks.component';
import { PageAddTaskComponent } from './pages/page-add-task/page-add-task.component';
import { PageEditTaskComponent } from './pages/page-edit-task/page-edit-task.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormTaskComponent,
    PageListTasksComponent,
    PageAddTaskComponent,
    PageEditTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    FormTaskComponent,
    PageListTasksComponent,
    PageAddTaskComponent,
    PageEditTaskComponent
  ]
})
export class TasksModule { }
