import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task';

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

  constructor() {
    this.tasks = new BehaviorSubject(undefined);
    this.setTasks(dummyTasks);
  }

  getTasks$() {
    return this.tasks.asObservable();
  }

  setTasks(tasks: Task[]) {
    this.tasks.next(tasks);
  }

  setCurrentTask(task: Task) {
    this.pauseCurrentTask();
    this.currentTask.next(task);
  }

  getCurrentTask() {
    return this.currentTask.getValue();
  }

  getCurrentTask$() {
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
