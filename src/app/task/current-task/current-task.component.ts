import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-current-task',
  templateUrl: './current-task.component.html',
  styleUrls: ['./current-task.component.scss']
})
export class CurrentTaskComponent implements OnInit {

  currentTask: Task = undefined;
  constructor(private taskService: TaskService) { 
  }

  ngOnInit() {
    this.taskService.getCurrentTask$().subscribe(task => this.currentTask = task);
  }

  playPause() {
    this.taskService.playPauseTask(this.currentTask);
  }
}
