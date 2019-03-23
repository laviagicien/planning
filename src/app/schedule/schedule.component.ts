import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  start = new Date('7:30:00');
  end = new Date('20:45:00');

  constructor() { }

  ngOnInit() {

    console.log(this.start);
    console.log(this.end);
  }



}
