import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  days = [];
  hours = [];
  isLoaded: boolean = false;
  search$: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
    const DAYS = _.range(1, 32).map((day) => `Oct ${day}`);
    this.days = DAYS;
    this.hours = _.range(24);
    this.isLoaded = false;
  }

  load() {
    this.isLoaded = true;
  }

  searchAll() {
    this.search$.next();
  }

}
