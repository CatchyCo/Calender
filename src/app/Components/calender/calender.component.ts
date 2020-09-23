
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  constructor() { }
  numOfDaysInCurrentMotnhs: number;
  currentMonth;
  ngOnInit(): void {
    this.getDaysOfCurrentMonths();
  }

  getDaysOfCurrentMonths(): void {
    const now = new Date();
    this.numOfDaysInCurrentMotnhs = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDay();
    this.currentMonth = now.toDateString().split(' ')[1];
  }

}
