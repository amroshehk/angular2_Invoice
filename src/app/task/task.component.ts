import { Component, OnInit } from '@angular/core';
import {Task} from '../Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = []
  
  constructor() { 
    this.tasks.push(new Task('understanding angular', false),
  new Task('Taking a break', false),
    new Task('sleeping', true)
)
  }

  ngOnInit() {

  }

  completeAll(checked:boolean) {
    this.tasks.forEach( task => task.setCompleted(checked))
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(  t => t !== task);
  }

  addNewTask(description: string){
    this.tasks.push(new Task(description, description==='break'? true:false));
  }

  handleKeyUp(ev) {
    if (ev.which === 13){
      this.addNewTask(ev.target.value);
      ev.target.value = ''
    }
  }
}
