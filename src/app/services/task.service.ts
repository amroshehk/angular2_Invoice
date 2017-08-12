import { Injectable } from '@angular/core';
import { Task } from '../Task'
@Injectable()
export class TaskService {

  constructor() { }

  getTasks() {
    const tasks: Task[] = [];

    tasks.push(
      new Task('understanding angular', false),
      new Task('Taking a break', false),
      new Task('sleeping', true));
    return tasks;
  }

}
