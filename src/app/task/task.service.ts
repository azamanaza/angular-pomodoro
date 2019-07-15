import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task';
import { MatDialog } from '@angular/material';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';

const dummyTasks: Task[] = [
  new Task({title: 'a', description: 'task a'}),
  new Task({title: 'b', description: 'task b'}),
  new Task({title: 'c', description: 'task c'}),
  new Task({title: 'd', description: 'task d'})
];

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: BehaviorSubject<Task[]>;
  private currentTask: BehaviorSubject<Task> = new BehaviorSubject(undefined);

  constructor(private matDialog: MatDialog) {
    this.tasks = new BehaviorSubject([]);
    this.setTasks(dummyTasks);
  }

  createTask() {
    const dialogRef = this.matDialog.open(NewTaskDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(taskParams => {
      if (taskParams.timeElapsed) {
        taskParams.timeElapsed *= 60 * 1000; 
      }

      const newTask = new Task(taskParams);
      this.tasks.getValue().push(newTask);
      this.currentTask.next(this.tasks.getValue().find(task => task.id === newTask.id));
    });
  }

  getTasks$(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  setTasks(tasks: Task[]) {
    this.tasks.next(tasks);
  }

  setCurrentTask(task: Task) {
    this.pauseCurrentTask();
    this.currentTask.next(task);
  }

  getCurrentTask(): Task {
    return this.currentTask.getValue();
  }

  getCurrentTask$(): Observable<Task> {
    return this.currentTask.asObservable();
  }

  pauseCurrentTask() {
    if (this.getCurrentTask()) {
      this.getCurrentTask().pause();
    }
  }

  playPauseTask(task: Task) {
    if (task.isInProgress()) {
      task.pause();
    } else {
      task.start();
    }
  }

  isCurrentTask(task: Task): boolean {
    return this.getCurrentTask() && this.getCurrentTask().id === task.id;
  }
}
