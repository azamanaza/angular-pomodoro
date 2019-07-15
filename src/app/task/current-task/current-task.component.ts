import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-task',
  templateUrl: './current-task.component.html',
  styleUrls: ['./current-task.component.scss']
})
export class CurrentTaskComponent implements OnInit {

  currentTask$: Observable<Task>;

  constructor(private taskService: TaskService) { 
    this.currentTask$ = taskService.getCurrentTask$();
  }

  ngOnInit() {
  }

  playPause(task: Task) {
    this.taskService.playPauseTask(task);
  }

  createTask() {
    this.taskService.createTask();
  }
}
