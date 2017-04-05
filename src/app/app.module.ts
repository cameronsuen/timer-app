import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MomentModule } from 'angular2-moment';

import { AppComponent }  from './app.component';
import { TaskComponent } from './task.component';

@NgModule({
  imports:      [ BrowserModule, MomentModule ],
  declarations: [ AppComponent, TaskComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
