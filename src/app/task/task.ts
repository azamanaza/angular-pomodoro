import { Subscription, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

let internalTaskId = 0;

export enum TaskState {
  IN_PROGRESS = 'in-progress',
  IDLE = 'idle'
}

export class Task {
  id: number;
  title: string;
  description: string;
  dateCreated: Date;
  timeElapsed: number = 0;
  timeLimit: number = 60 * 25 * 100;
  state: TaskState;
  private timeElapsedSub: Subscription;

  constructor(data: any = {}) {
    this.id = internalTaskId++;
    this.title = data.title || '';
    this.description = data.description || '';
    this.dateCreated = data.dateCreated || new Date();
    this.state = TaskState.IDLE;
  }

  start() {
    this.timeElapsedSub = timer(0, 10)
      .pipe(takeWhile(t => t < this.timeLimit))
      .subscribe(() => this.timeElapsed += 10);
    this.state = TaskState.IN_PROGRESS;
  }

  pause() {
    if (this.timeElapsedSub) {
      this.timeElapsedSub.unsubscribe();
      this.timeElapsedSub = undefined;
      this.state = TaskState.IDLE;
    }
  }

  isInProgress() {
    return this.state === TaskState.IN_PROGRESS;
  }
}
