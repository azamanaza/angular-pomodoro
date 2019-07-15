import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { CurrentTaskComponent } from './task/current-task/current-task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { NewTaskDialogComponent } from './task/new-task-dialog/new-task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTaskComponent,
    TaskListComponent,
    NewTaskDialogComponent
  ],
  entryComponents: [
    NewTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
