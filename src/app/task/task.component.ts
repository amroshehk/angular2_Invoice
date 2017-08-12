import { Component, OnInit } from '@angular/core';
import {Task} from '../Task'
import { TaskService } from "../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit {
  tasks: Task[] = []
  
  constructor( private dataSerive: TaskService) { 
    this.tasks = dataSerive.getTasks();
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
