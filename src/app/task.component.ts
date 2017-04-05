import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Task } from './task';

@Component({
    selector: 'task',
    moduleId: module.id,
    templateUrl: 'task.component.html' 
})
export class TaskComponent { 
    @Input() task: Task;
    timer: Observable.timer;
    hasStarted: boolean = false;
    subscription;

    // Start the timer, increment duartion every 1 second
    startTimer() {
        // Check if timer has already started
        if (!this.hasStarted) {
            this.timer = Observable.timer(0, 1000);
            this.subscription = this.timer.subscribe(t => this.task.duration += 1);
            this.hasStarted = true;

            // Update the button description
            let startBtn = document.getElementById('start');
            startBtn.innerHTML = 'Pause';
        } else {
            this.subscription.unsubscribe();
            this.hasStarted = false;

            // Update the button description
            let startBtn = document.getElementById('start');
            startBtn.innerHTML = 'Restart';
        }
    }

    stopTimer() {
        this.subscription.unsubscribe(); 

        // Remove the buttons
        let startBtn = document.getElementById('start');
        let stopBtn = document.getElementById('stop');
        startBtn.parentNode.removeChild(startBtn);
        stopBtn.parentNode.removeChild(stopBtn);
    }
}
