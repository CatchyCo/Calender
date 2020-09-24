
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
  reminder = [
    { id: 1, ReminderTopic: 'Breakfast', Time: '8am' },
    { id: 1, ReminderTopic: 'Breakfast', Time: '8am' },
    { id: 1, ReminderTopic: 'Breakfast', Time: '8am' },
    { id: 1, ReminderTopic: 'Breakfast', Time: '8am' },
    { id: 1, ReminderTopic: 'Breakfast', Time: '8am' }
  ];
  displayedColumns: string[] = ['id', 'ReminderTopic','time','Operation'];

  ngOnInit(): void {
    this.getDaysOfCurrentMonths();
  }

  getDaysOfCurrentMonths(): void {
    const now = new Date();
    this.numOfDaysInCurrentMotnhs = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    console.log(this.numOfDaysInCurrentMotnhs);
    this.currentMonth = now.toDateString().split(' ')[1];
  }

}
