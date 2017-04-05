import { Component } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
})
export class AppComponent  { 
    tasks: Task[]; 

    constructor(){
        this.tasks = [];
    }

    addTask(task_name: string) {
        // Length of the array can serve as id 
        this.tasks.push(new Task(this.tasks.length, task_name, 0));    
    }
}

