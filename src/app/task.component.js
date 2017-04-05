"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var task_1 = require("./task");
var TaskComponent = (function () {
    function TaskComponent() {
        this.hasStarted = false;
    }
    // Start the timer, increment duartion every 1 second
    TaskComponent.prototype.startTimer = function () {
        var _this = this;
        // Check if timer has already started
        if (!this.hasStarted) {
            this.timer = Rx_1.Observable.timer(0, 1000);
            this.subscription = this.timer.subscribe(function (t) { return _this.task.duration += 1; });
            this.hasStarted = true;
            // Update the button description
            var startBtn = document.getElementById('start');
            startBtn.innerHTML = 'Pause';
        }
        else {
            this.subscription.unsubscribe();
            this.hasStarted = false;
            // Update the button description
            var startBtn = document.getElementById('start');
            startBtn.innerHTML = 'Restart';
        }
    };
    TaskComponent.prototype.stopTimer = function () {
        this.subscription.unsubscribe();
        // Remove the buttons
        var startBtn = document.getElementById('start');
        var stopBtn = document.getElementById('stop');
        startBtn.parentNode.removeChild(startBtn);
        stopBtn.parentNode.removeChild(stopBtn);
    };
    return TaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", task_1.Task)
], TaskComponent.prototype, "task", void 0);
TaskComponent = __decorate([
    core_1.Component({
        selector: 'task',
        moduleId: module.id,
        templateUrl: 'task.component.html'
    })
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map