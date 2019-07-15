import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { Task } from '../task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks$();
  }

  setCurrentTask(task: Task) {
    this.taskService.setCurrentTask(task);
  }

  isCurrentTask(task: Task) {
    return this.taskService.isCurrentTask(task);
  }

}
