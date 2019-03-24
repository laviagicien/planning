import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  start = this.convertStgToTime('7:30');

  end: Time = {
    hours : 20,
    minutes : 45
  }

  rngOfDayMin = this.convInMin(this.end) - this.convInMin(this.start);

  rangeOfDay = this.convInTime(this.rngOfDayMin);

  constructor() { }

  ngOnInit() {
    console.log(this.start);
  }

  convInMin (time: Time): number {
    return time.hours * 60 + time.minutes;
  }

  convInTime (entry: number): Time{
    const result: Time = {hours : null, minutes : null};
    const hours = Math.floor(entry / 60);
    const minutes = Math.floor(((entry / 60) - hours) * 60);

    result.hours = hours;
    result.minutes = minutes;

    return result;
  }

  convertStgToTime (text: String): Time {
    const splitText: Array<string> = text.split(':');
    return {
      hours : parseInt(splitText[0], 1),
      minutes: parseInt(splitText[1], 1)
    };

  }

}
